import type { TrainingForm } from "@/entities/form.entity"
import type { Dispatch, SetStateAction } from "react"
import Dificulty from "../components/Dificulty"

interface Prompts {
    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}

const easyMsg = "Tu practicas tendran pocos ejercicios y muy sencillos"
const medMsg = "Tus practicas tendran mas ejercicios de nivel intermedio"
const hardMsg = "Tus practicas tendran muchos mas ejercicios y mas complejos"

export default function StDificulty({ form, setForm }: Prompts) {
    let msg = "";
    if (form.dificulty) {
        msg = form.dificulty === 'facil' ? easyMsg : form.dificulty === 'medio' ? medMsg : hardMsg
    }
    return (
        <>
            <div className="flex flex-col gap-4 mb-4">
                <h1 className="text-4xl">Categoria</h1>
                <span className="text-lg">Selecciona una categoria para llevar a cabo las pruebas</span>
            </div>

            <div className="flex gap-4 mb-4">
                <Dificulty level="facil" form={form} setForm={setForm} />
                <Dificulty level="medio" form={form} setForm={setForm} />
                <Dificulty level="dificil" form={form} setForm={setForm} />
            </div>

            <span className="text-base">
                {msg}
            </span>
        </>
    )
}
