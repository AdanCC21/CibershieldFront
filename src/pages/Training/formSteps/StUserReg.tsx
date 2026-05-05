import { Icons } from "@/constants/icons"
import type { TrainingForm } from "@/entities/form.entity"
import type { Dispatch, SetStateAction } from "react"

interface Prompts {
    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}
export default function StUserReg({ form, setForm }: Prompts) {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl">Usuario</h2>
                <span className="text-lg">Este sera el usuario con el que entraras</span>
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                    <div className="flex flex-col gap-4 w-fit">
                        <img src={Icons.person} alt="person" className="h-28 w-fit" />
                        <span className="text-2xl">Usuario</span>
                    </div>

                    <div className="flex flex-col gap-2 w-3/4">
                        <label htmlFor="name" className="text-base">Nombre</label>
                        <input id="name" name="name" type="text" className="p-2 border border-(--primary-color)/20 focus:border-(--primary-color)/80 outline-none rounded-lg" placeholder="Antonio Ramos Gonzalez" />
                    </div>

                    <div className="flex flex-col gap-2 w-3/4">
                        <label htmlFor="email" className="text-base">Correo</label>
                        <input id="email" name="email" type="mail" className="p-2 border border-(--primary-color)/20 focus:border-(--primary-color)/80 outline-none rounded-lg" placeholder="adandevp@gmail.com" />
                    </div>
                </div>
            </div>
        </>
    )
}
