import Stepper, { type Step } from "@/components/Steps";
import { useEffect, useState, } from "react";
import type { TrainingForm } from "@/entities/form.entity";
import { Icons } from "@/constants/icons";
import Button from "@/components/Button";
import StUserType from "./formSteps/StUserType";
import StUserReg from "./formSteps/StUserReg";
import StCateg from "./formSteps/StCateg";
import toast from "react-hot-toast";
import StDificulty from "./formSteps/StDificulty";
import { useNavigate } from "react-router-dom";
import { GetUser } from "@/scripts/user";
import { LoadFormFromLocal } from "@/scripts/form";
import { AnimatePresence, motion } from "framer-motion";
import { showUp, showUpContainer } from "@/constants/animations";
import GenModal from "@/components/modal/GenModal";

export default function Form() {
  const steps: Step[] = [{ label: "Tipo de usuario", id: 0 }, { label: "Datos del usuario", id: 1 }, { label: "Categoría", id: 2 }, { label: "Dificultad", id: 3 }]

  const navigate = useNavigate();
  const [curStep, setCurStep] = useState<number>(0)
  const [form, setForm] = useState<TrainingForm>({ userType: null, name: '', email: '', category: null, dificulty: null })
  const [formFinish, setFinishForm] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const localForm = LoadFormFromLocal(form, setCurStep);

    const localTutorial = localStorage.getItem('showTutorial');
    if (localTutorial === null || localTutorial === 'true') {
      setShowTutorial(true);
      localStorage.setItem('showTutorial', 'true');
    }

    if (formFinish)
      setFinishForm(false);

    const us = GetUser()
    if (us) {
      localForm.userType = 'account'
      localForm.name = us.name
      localForm.email = us.email
      setCurStep(2);
    }
    setForm(localForm);
  }, [])

  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (form.category || form.dificulty)
      localStorage.setItem('formInfo', JSON.stringify(form));
  }, [form.category, form.dificulty])

  const handleScreen = () => {
    switch (curStep) {
      case 0:
        return (<StUserType form={form} setForm={setForm} />)
      case 1:
        return (<StUserReg form={form} handleForm={handleForm} setForm={setForm} />)
      case 2:
        return (<StCateg form={form} setForm={setForm} />)
      case 3:
        return (<StDificulty form={form} setForm={setForm} />)
      default:
        return (<div>
          <span className="text-xl">
            Seccion no valida
          </span>
        </div>)
    }
  }

  const nextStep = () => {
    switch (curStep) {
      case 0:
        if (form.userType) {
          if (form.userType === 'account') {
            if (!GetUser())
              return toast.error(
                "Usted seleccionó entrar con su cuenta, pero no ha iniciado sesión. Por favor, entre como invitado o inicie sesión."
              )
          }
          setCurStep(prev => prev + 1)
        } else {
          toast.error("Seleccione el tipo de usuario con el que quiere entrar.")
        }
        break;

      case 1:
        form.name.trim() && form.email.trim()
          ? setCurStep(prev => prev + 1)
          : toast.error(
            `Especifique el ${form.name ? 'correo' : 'nombre'} de su usuario`
          )
        break;

      case 2:
        form.category
          ? setCurStep(prev => prev + 1)
          : toast.error(
            "Seleccione la categoría con la que quiere entrar."
          )
        break;

      case 3:
        form.dificulty
          ? setCurStep(prev => prev + 1)
          : toast.error(
            "Seleccione la dificultad con la que quiere entrar."
          )
        break;
    }
  }

  const initTest = () => {
    localStorage.setItem('formInfo', JSON.stringify(form));
    localStorage.setItem('showTutorial', 'false');
    setFinishForm(true);
    setTimeout(() => {
      navigate('exercises')
    }, 400);

  }

  return (
    <AnimatePresence mode="wait">
      <GenModal active={showTutorial} setActive={setShowTutorial} item={{ id: 0, title: "Bienvenidos al sistema de entrenamiento", icon: Icons.email, iconAlt: "email" }} headerStyle="primary">
        <main className="flex flex-col gap-2">
          <div className="flex gap-2 mb-8">
            <p className="text-base flex-2">
              Estos entrenamientos están diseñados para ayudarte a mejorar tus habilidades de detección de phishing. A lo largo de esta sección, te guiaremos a través de una serie de ejercicios prácticos que simulan situaciones reales de phishing. <br /> <br /> Primero deberás especificar algunos datos para personalizar tu experiencia de entrenamiento, como el usuario, tipo de phishing, y la dificultad. <br /> <br /> Te guiaremos a personalizar tu entrenamiento.
            </p>
            <img src='/phishing/talking_about_phishing.webp' alt="Phishing Email" className=" max-h-60 mx-auto rounded-lg shadow-lg" />
          </div>
          <Button title="Comenzar" onClick={() => setShowTutorial(false)} btnStyle="fill" btnClass="w-fit mx-auto" icon={Icons.arrowRight} iconRight iconInvert />
        </main>
      </GenModal>

      {!formFinish &&
        <motion.div className="flex flex-col lg:flex-row size-full gap-4 bg-white lg:border-t-0 border-t-4 border-(--primary-color) shadow-sm rounded-xl z-1 my-auto p-2 lg:p-4">
          <section className="flex flex-1 justify-center p-4 gap-4">
            <Stepper steps={steps} curStep={curStep} setCurStep={setCurStep} />
          </section>

          <motion.section key={curStep} variants={showUpContainer} initial="hidden" animate="show" exit="exit" className="flex flex-col flex-5 p-4 gap-4">
            <motion.section variants={showUp} className="min-h-[60vh]">
              {handleScreen()}
            </motion.section>
            <motion.div variants={showUp} className="flex justify-end gap-4 mt-auto">
              {curStep > 0 &&
                <Button title="Anterior" icon={Icons.arrowRight} iconClass="rotate-180" onClick={() => { setCurStep(prev => prev - 1) }} btnStyle="outline" />
              }
              <Button title={`${curStep === 3 ? 'Iniciar' : 'Continuar'}`} icon={Icons.arrowRight} iconRight onClick={() => { !form.dificulty || curStep < 3 ? nextStep() : initTest() }} btnStyle="fill" iconInvert />
            </motion.div>
          </motion.section>


          <section className={`hidden lg:flex flex-col flex-1 p-4`}>
            <motion.h2 variants={showUp} initial="hidden" animate="show" exit="exit" className="text-2xl mb-2 font-semibold">Resumen</motion.h2>
            <motion.ul variants={showUpContainer} initial="hidden" animate="showShort" exit="exit" className="flex flex-col gap-2">
              <SummaryTest title="Tipo de usuario" desc={form.userType ? form.userType === 'guest' ? 'invitado' : 'cuenta' : null} />
              <SummaryTest title="Usuario" desc={form.name} />
              <SummaryTest title="Categoria" desc={form.category} />
              <SummaryTest title="Dificultad" desc={form.dificulty} />
            </motion.ul>
          </section>

        </motion.div>
      }
    </AnimatePresence>
  )
}

interface SumPrompts {
  title: string
  desc: string | null
}
function SummaryTest({ title, desc }: SumPrompts) {
  return (
    <motion.li variants={showUp} className="flex flex-col gap-2">
      <h5 className="text-lg font-medium">{title}</h5>
      <span className="text-sm text-black/80">{desc?.trim() ? desc : '...'}</span>
    </motion.li>
  )
}
