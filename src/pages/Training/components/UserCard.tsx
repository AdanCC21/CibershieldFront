import { tailwindcssDuration } from "@/constants/animations"
import type { CategoryType, TrainingForm, UserType } from "@/entities/form.entity"
import type { Dispatch, SetStateAction } from "react"

interface UserCardPrompts {
    title: string
    icon: string
    active: boolean
    atribute: string
    value: UserType | CategoryType
    setForm: Dispatch<SetStateAction<TrainingForm>>
}
export default function UserCard({ title, icon, active, setForm, value, atribute }: UserCardPrompts) {
    return (
        <button className={`flex flex-col items-center justify-center w-full h-fit p-4 border ${active ? 'bg-(--primary-color) border-[#fff0]' : 'border-black hover:bg-(--primary-color)/20 hover:border-black/40'}  rounded-lg cursor-pointer ${tailwindcssDuration}`} onClick={() => setForm(prev => ({ ...prev, [atribute]: value }))}>
            <span className={`text-lg ${active && 'text-white'} font-semibold`}>{title}</span>
            <img src={icon} alt="invitado" className={`${active && 'invert'} h-10`} />
        </button>
    )
}