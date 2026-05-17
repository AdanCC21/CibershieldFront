import InputLabel from "@/components/form/InputLabel"
import { Icons } from "@/constants/icons"
import type { TrainingForm } from "@/entities/form.entity"
import type { UserEntity } from "@/entities/user"
import { GetUser } from "@/scripts/user"
import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import toast from "react-hot-toast"

interface Prompts {
    form: TrainingForm
    handleForm: (e: any) => void
    setForm: Dispatch<SetStateAction<TrainingForm>>
}

export default function StUserReg({ form, handleForm, setForm }: Prompts) {
    const [us, setUs] = useState<UserEntity | null>(null)

    useEffect(() => {
        if (form.userType === 'guest') return

        const user = GetUser()

        if (!user) {
            toast.error("No pudimos cargar los datos de su sesión.")
            return
        }

        setUs(user)
        setForm(prev => ({
            ...prev,
            name: user.name,
            email: user.email
        }))
    }, [])

    const guest = () => {
        return (
            <div className="flex flex-col gap-4 items-center justify-center w-full">
                <div className="flex flex-col gap-4 w-fit">
                    <img src={Icons.person} alt="person" className="h-28 w-fit" />
                    <span className="text-2xl">Usuario</span>
                </div>

                <div className="w-3/4">
                    <InputLabel
                        label="Nombre"
                        value={form.name}
                        atribute="name"
                        handleForm={handleForm}
                    />
                </div>

                <div className="w-3/4">
                    <InputLabel
                        label="Correo"
                        value={form.email}
                        atribute="email"
                        handleForm={handleForm}
                        inpType="email"
                    />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl">Usuario</h2>

                <span className="text-lg">
                    Este será el usuario con el que entrarás.
                </span>

                {form.userType === 'guest' ? (
                    <>
                        {guest()}
                    </>
                ) : (
                    <div className="flex flex-col gap-4 w-full items-center">
                        <img src={Icons.person} alt="person" className="h-28 w-fit" />
                        <span className="text-2xl">{us?.name}</span>
                    </div>
                )}
            </div>
        </>
    )
}
