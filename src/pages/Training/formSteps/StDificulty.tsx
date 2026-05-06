import type { TrainingForm } from "@/entities/form.entity"
import type { Dispatch, SetStateAction } from "react"

interface Prompts {
    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}
export default function StDificulty({ form, setForm }: Prompts) {
    return (
        <>

        </>
    )
}
