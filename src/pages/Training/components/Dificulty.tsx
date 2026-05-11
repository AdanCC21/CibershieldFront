import { tailwindcssDuration } from "@/constants/animations"
import { Icons } from "@/constants/icons"
import type { DificultyType, TrainingForm } from "@/entities/form.entity"
import type { Dispatch, SetStateAction } from "react"

interface Prompts {
    level: DificultyType

    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}
export default function Dificulty({ level, form, setForm }: Prompts) {
    const stars = () => {
        const starsRes = []
        let count = 1;
        level === 'medio' ? count += 1 : level === 'dificil' ? count += 2 : count;
        for (let i = 0; i < 3; i++) {
            starsRes.push(
                <img src={i < count ? Icons.star : Icons.startEmpty} alt="star" className="h-4" />
            )
        }
        return starsRes;
    }

    return (
        <button className={`flex flex-col items-center justify-center w-full h-fit p-4 border ${form.dificulty === level ? 'bg-(--primary-color) border-[#fff0]' : 'border-black hover:bg-(--primary-color)/20 hover:border-black/40'}  rounded-lg cursor-pointer ${tailwindcssDuration}`} onClick={() => setForm(prev => ({ ...prev, dificulty: level }))}>
            <span className={`text-lg ${form.dificulty === level && 'text-white'} font-semibold`}>{level}</span>

            <ul className={`flex gap-2 ${form.dificulty === level && 'invert'}`}>
                {stars()}
            </ul>
        </button>
    )
}
