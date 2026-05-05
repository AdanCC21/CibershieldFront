import Stepper, { type Step } from "@/components/steps";
import { useState } from "react";
import invitado from '@/assets/icons/person.svg';

export default function Training() {
  const steps: Step[] = [{ label: "Tipo de usuario", id: 0 }, { label: "Datos del usuario", id: 1 }, { label: "Categoria", id: 2 }, { label: "Dificultad", id: 3 }]

  const [curStep, setCurStep] = useState<number>(0)
  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col flex-1 p-4">
        <Stepper steps={steps} curStep={curStep} setCurStep={setCurStep} />
      </div>

      <div className="flex flex-col flex-3 p-4 gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl">Tipo de usuario</h1>
          <span className="text-lg">Selecciona la forma en la cual vas a simular una practica de pishing</span>
        </div>

        <div className="flex gap-4">
          <UserCard title="Entrar como invitado" active icon={invitado}/>
          <UserCard title="Entrar con cuenta" active={false} icon={invitado}/>
        </div>

      </div>

      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-4xl">Resumen</h2>
      </div>

    </div>
  )
}

interface UserCardPrompts {
  title: string
  icon: string
  active: boolean
}
function UserCard({title, icon, active}:UserCardPrompts) {
  return (
    <button className={`flex flex-col items-center justify-center w-full h-fit p-4 border ${active ? 'border-(--primary-color) border-2':'border-black'} rounded-lg cursor-pointer`}>
      <span className={`text-lg ${active && 'text-(--primary-color)'} font-semibold`}>{title}</span>
      <img src={icon} alt="invitado" className="h-10" />
    </button>
  )
}
