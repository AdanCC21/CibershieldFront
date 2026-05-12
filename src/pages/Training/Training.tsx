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

export default function Training() {
  const steps: Step[] = [{ label: "Tipo de usuario", id: 0 }, { label: "Datos del usuario", id: 1 }, { label: "Categoria", id: 2 }, { label: "Dificultad", id: 3 }]

  const navigate = useNavigate();
  const [curStep, setCurStep] = useState<number>(0)
  const [form, setForm] = useState<TrainingForm>({ userType: null, name: '', email: '', category: null, dificulty: null })
  const [formFinish, setFinishForm] = useState(false);

  useEffect(() => {
    const localForm = LoadFormFromLocal(form, setCurStep);
    setForm(localForm);
    if (formFinish)
      setFinishForm(false);
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
              return toast.error("Usted seleccionó entrar con su cuenta, pero no ha iniciado sesión. Por favor entra como invitado o inicia sesión")
          }
          setCurStep(prev => prev + 1)
        } else {
          toast.error("Seleccione el tipo de usuario con el que quiere entrar.")
        }
        break;
      case 1:
        form.name.trim() && form.email.trim() ?
          setCurStep(prev => prev + 1) :
          toast.error(`Especifique el ${form.name ? 'nombre' : 'correo'} de su usario`)
        break;
      case 2:
        form.category ?
          setCurStep(prev => prev + 1) :
          toast.error("Seleccione la categoria con el que quiere entrar.");
        break;
      case 3:
        form.dificulty ?
          setCurStep(prev => prev + 1) :
          toast.error("Seleccione la dificultad con el que quiere entrar.");
        break;
    }
  }

  const initTest = () => {
    localStorage.setItem('formInfo', JSON.stringify(form));
    setFinishForm(true);
    setTimeout(() => {
      navigate('exercises')
    }, 400)
  }

  return (
    <AnimatePresence mode="wait">
      {!formFinish &&
        <motion.div className="flex w-full h-full gap-4">
          <section className="flex flex-col flex-1 p-4 gap-4">
            <Stepper steps={steps} curStep={curStep} setCurStep={setCurStep} />
          </section>

          <motion.section key={curStep} variants={showUpContainer} initial="hidden" animate="show" exit="exit" className="flex flex-col flex-3 p-4 gap-4">
            <motion.section variants={showUp}>
              {handleScreen()}
            </motion.section>
            <div className="flex justify-end gap-4 mt-auto">
              {curStep > 0 &&
                <motion.div variants={showUp}>
                  <Button title="Anterior" icon={Icons.arrowRight} iconClass="rotate-180" onClick={() => { setCurStep(prev => prev - 1) }} btnStyle="outline" />
                </motion.div>
              }
              <motion.div variants={showUp}>
                <Button title={`${curStep === 3 ? 'Iniciar' : 'Continuar'}`} icon={Icons.arrowRight} iconRight onClick={() => { !form.dificulty || curStep < 3 ? nextStep() : initTest() }} btnStyle="fill" iconInvert />
              </motion.div>
            </div>
          </motion.section>


          <section className="flex flex-col flex-1 p-4">
            <motion.h2 variants={showUp} initial="hidden" animate="show" exit="exit" className="text-2xl mb-2">Resumen</motion.h2>
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
      <h5 className="text-lg">{title}</h5>
      <span className="text-sm text-(--text-gray)">{desc?.trim() ? desc : '...'}</span>
    </motion.li>
  )
}
