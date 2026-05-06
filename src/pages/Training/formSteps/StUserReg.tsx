import { Icons } from "@/constants/icons"
import type { TrainingForm } from "@/entities/form.entity"

interface Prompts {
    form: TrainingForm
    handleForm: (e: any) => void
}

export default function StUserReg({ form, handleForm }: Prompts) {
    const guest = () => {
        return (
            <div className="flex flex-col gap-4 items-center justify-center w-full">
                <div className="flex flex-col gap-4 w-fit">
                    <img src={Icons.person} alt="person" className="h-28 w-fit" />
                    <span className="text-2xl">Usuario</span>
                </div>

                <div className="flex flex-col gap-2 w-3/4">
                    <label htmlFor="name" className="text-base">Nombre</label>
                    <input id="name" name="name" value={form.name} onChange={handleForm} type="text" className="p-2 border border-(--primary-color)/20 focus:border-(--primary-color)/80 outline-none rounded-lg" placeholder="Antonio Ramos Gonzalez" />
                </div>

                <div className="flex flex-col gap-2 w-3/4">
                    <label htmlFor="email" className="text-base">Correo</label>
                    <input id="email" name="email" value={form.email} onChange={handleForm} type="mail" className="p-2 border border-(--primary-color)/20 focus:border-(--primary-color)/80 outline-none rounded-lg" placeholder="adandevp@gmail.com" />
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl">Usuario</h2>
                <span className="text-lg">Este sera el usuario con el que entraras</span>
                {form.userType === 'guest' ?
                    <>
                        {guest()}
                    </>
                    :
                    <>
                        <span className="text-base">Usuario registrado</span>
                    </>
                }
            </div>
        </>
    )
}
