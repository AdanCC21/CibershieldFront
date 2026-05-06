import { tailwindcssDuration } from "@/constants/animations"
import { Icons } from "@/constants/icons"
import type { DificultyType, TrainingForm } from "@/entities/form.entity"
import type { Dispatch, SetStateAction } from "react"

interface Prompts {
    title: string
    level: DificultyType

    active: boolean
    setForm: Dispatch<SetStateAction<TrainingForm>>
}
export default function Dificulty({ title, level, active, setForm }: Prompts) {
    const starts = () => {
        let count = 1;
        if (level === 'medium') count += 1;
        if (level === 'hard') count += 1;
    }
    return (
        <button className={`flex flex-col items-center justify-center w-full h-fit p-4 border ${active ? 'bg-(--primary-color) border-[#fff0]' : 'border-black hover:bg-(--primary-color)/20 hover:border-black/40'}  rounded-lg cursor-pointer ${tailwindcssDuration}`} onClick={() => setForm(prev => ({ ...prev, dificulty: level }))}>
            <span className={`text-lg ${active && 'text-white'} font-semibold`}>{title}</span>

            <img src={Icons.star} alt="invitado" className={`${active && 'invert'} h-10`} />
        </button>
    )
}
