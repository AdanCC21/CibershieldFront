import type { TrainingForm } from "@/entities/form.entity"
import type { Dispatch, SetStateAction } from "react"
import Dificulty from "../components/Dificulty"

interface Prompts {
    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}

const easyMsg = "Tus prácticas tendrán pocos ejercicios y serán muy sencillos."
const medMsg = "Tus prácticas tendrán más ejercicios de nivel intermedio."
const hardMsg = "Tus prácticas tendrán muchos más ejercicios y serán más complejos."

export default function StDificulty({ form, setForm }: Prompts) {
    let msg = "";
    if (form.dificulty) {
        msg = form.dificulty === 'facil' ? easyMsg : form.dificulty === 'medio' ? medMsg : hardMsg
    }
    return (
        <>
            <div className="flex flex-col gap-4 mb-4">
                <h1 className="text-4xl">Categoría</h1>
                <span className="text-lg">
                    Selecciona una categoría para llevar a cabo las pruebas.
                </span>
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
