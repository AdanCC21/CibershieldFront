import Stepper, { type Step } from "@/components/Steps";
import { useState, } from "react";
import type { TrainingForm } from "@/entities/form.entity";
import { Icons } from "@/constants/icons";
import Button from "@/components/Button";
import StUserType from "./formSteps/StUserType";
import StUserReg from "./formSteps/StUserReg";
import StCateg from "./formSteps/StCateg";
import toast from "react-hot-toast";
import StDificulty from "./formSteps/StDificulty";
import { useNavigate } from "react-router-dom";

export default function Training() {
  const steps: Step[] = [{ label: "Tipo de usuario", id: 0 }, { label: "Datos del usuario", id: 1 }, { label: "Categoria", id: 2 }, { label: "Dificultad", id: 3 }]

  const navigate = useNavigate();
  const [curStep, setCurStep] = useState<number>(0)
  const [form, setForm] = useState<TrainingForm>({ userType: null, name: '', email: '', category: null, dificulty: null })

  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleScreen = () => {
    switch (curStep) {
      case 0:
        return (<StUserType form={form} setForm={setForm} />)
      case 1:
        return (<StUserReg form={form} handleForm={handleForm} />)
      case 2:
        return (<StCateg form={form} setForm={setForm} />)
      case 3:
        return (<StDificulty form={form} setForm={setForm} />)
    }
    return (
      <div></div>
    )
  }

  const nextStep = () => {
    switch (curStep) {
      case 0:
        form.userType ?
          setCurStep(prev => prev + 1) :
          toast.error("Seleccione el tipo de usuario con el que quiere entrar.")
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
    console.log("Iniciamos")
    navigate('exercises')
  }

  return (
    <div className="flex w-full h-full gap-4">
      <div className="flex flex-col flex-1 p-4">
        <Stepper steps={steps} curStep={curStep} setCurStep={setCurStep} />
      </div>

      <div className="flex flex-col flex-3 p-4 gap-4">
        {handleScreen()}
        <div className="flex justify-end gap-4 mt-auto">
          {curStep > 0 &&
            <Button title="Anterior" icon={Icons.arrowRight} iconClass="rotate-180" onClick={() => { setCurStep(prev => prev - 1) }} btnStyle="outline" />
          }
          <Button title={`${curStep === 3 ? 'Iniciar' : 'Continuar'}`} icon={Icons.arrowRight} iconRight onClick={() => { !form.dificulty ? nextStep() : initTest() }} btnStyle="fill" iconInvert />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-2xl mb-2">Resumen</h2>
        <ul className="flex flex-col gap-2">
          <SummaryTest title="Tipo de usuario" desc="invitado" />
          <SummaryTest title="Usuario" desc="Antonio Ramos" />
          <SummaryTest title="Categoria" desc="SMS" />
          <SummaryTest title="Dificultad" desc="" />
        </ul>
      </div>

    </div>
  )
}

interface SumPrompts {
  title: string
  desc: string | null
}
function SummaryTest({ title, desc }: SumPrompts) {
  return (
    <li className="flex flex-col gap-2">
      <h5 className="text-lg">{title}</h5>
      <span className="text-sm text-(--text-gray)">{desc?.trim() ? desc : '...'}</span>
    </li>
  )
}
