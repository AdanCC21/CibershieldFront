import Stepper, { type Step } from "@/components/Steps";
import { useState, } from "react";
import type { TrainingForm } from "@/entities/form.entity";
import { Icons } from "@/constants/icons";
import Button from "@/components/Button";
import StUserType from "./formSteps/StUserType";
import StUserReg from "./formSteps/StUserReg";
import StCateg from "./formSteps/StCateg";

export default function Training() {
  const steps: Step[] = [{ label: "Tipo de usuario", id: 0 }, { label: "Datos del usuario", id: 1 }, { label: "Categoria", id: 2 }, { label: "Dificultad", id: 3 }]

  const [curStep, setCurStep] = useState<number>(0)
  const [form, setForm] = useState<TrainingForm>({ userType: null, name: '', email: '' })

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
    }
    return (
      <div></div>
    )
  }

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col flex-1 p-4">
        <Stepper steps={steps} curStep={curStep} setCurStep={setCurStep} />
      </div>

      <div className="flex flex-col flex-3 p-4 gap-4">
        {handleScreen()}
        <div className="flex justify-end gap-4 mt-auto">
          {curStep > 0 &&
            <Button title="Anterior" icon={Icons.arrowRight} iconClass="rotate-180" onClick={() => { setCurStep(prev => prev - 1) }} btnStyle="outline" />
          }
          <Button title="Continuar" icon={Icons.arrowRight} iconRight onClick={() => { setCurStep(prev => prev + 1) }} btnStyle="fill" iconInvert />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-4xl">Resumen</h2>
      </div>

    </div>
  )
}

