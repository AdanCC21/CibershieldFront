import type { TrainingForm } from "@/entities/form.entity"
import type { Dispatch, SetStateAction } from "react"
import Dificulty from "../components/Dificulty"

interface Prompts {
    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}
export default function StDificulty({form, setForm}: Prompts) {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">Categoria</h1>
                <span className="text-lg">Selecciona una categoria para llevar a cabo las pruebas</span>
            </div>

            <div className="flex gap-4">
                <Dificulty level="facil" form={form} setForm={setForm} />
                <Dificulty level="medio" form={form} setForm={setForm} />
                <Dificulty level="dificil" form={form} setForm={setForm} />
            </div>
        </>
    )
}
