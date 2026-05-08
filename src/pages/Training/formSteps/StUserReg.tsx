import InputLabel from "@/components/form/InputLabel"
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

                <div className="w-3/4">
                    <InputLabel label="Nombre" value={form.name} atribute="name" handleForm={handleForm} />
                </div>

                <div className="w-3/4">
                    <InputLabel label="Correo" value={form.email} atribute="email" handleForm={handleForm} inpType="email" />
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
