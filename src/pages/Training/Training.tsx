import Stepper, { type Step } from "@/components/Steps";
import { useState, } from "react";
import invitado from '@/assets/icons/person.svg';
import type { UserType } from "@/entities/form.entity";
import UserCard from "./components/UserCard";
import Button from "@/components/Button";
import { Icons } from "@/constants/icons";

interface TrainingForm {
  userType: UserType | null
}

export default function Training() {
  const steps: Step[] = [{ label: "Tipo de usuario", id: 0 }, { label: "Datos del usuario", id: 1 }, { label: "Categoria", id: 2 }, { label: "Dificultad", id: 3 }]

  const [curStep, setCurStep] = useState<number>(0)

  const [form, setForm] = useState<TrainingForm>({ userType: null })

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col flex-1 p-4">
        <Stepper steps={steps} curStep={curStep} setCurStep={setCurStep} />
      </div>

      <div className="flex flex-col flex-3 p-4 gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl">Tipo de usuario</h1>
          <span className="text-lg">Selecciona la forma en la cual vas a simular una practica de pishing</span>
        </div>

        <div className="flex gap-4">
          <UserCard title="Entrar como invitado" active={form.userType === 'guest'} icon={invitado} setForm={setForm} value="guest" />
          <UserCard title="Entrar con cuenta" active={form.userType === 'account'} icon={invitado} setForm={setForm} value="account" />
        </div>

        <div className="flex justify-end gap-4 mt-auto">
          <Button title="Anterior" icon={Icons.arrowRight} iconClass="rotate-180" onClick={() => { }} btnStyle="outline"/>
          <Button title="Continuar" icon={Icons.arrowRight} iconRight onClick={() => { }} btnStyle="fill" iconInvert/>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-4xl">Resumen</h2>
      </div>

    </div>
  )
}
