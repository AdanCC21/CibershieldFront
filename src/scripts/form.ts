import type { TrainingForm } from "@/entities/form.entity";
import type { Dispatch, SetStateAction } from "react";

export function LoadFormFromLocal(baseForm: TrainingForm, setCurStep: Dispatch<SetStateAction<number>>): TrainingForm {
    const formRaw = localStorage.getItem('formInfo');
    if (!formRaw) return baseForm;

    const localForm = JSON.parse(formRaw) as TrainingForm;
    if (!localForm) return baseForm;

    let formLoaded: TrainingForm = { ...baseForm };
    formLoaded.userType = localForm.userType ?? null;
    formLoaded.name = localForm.name ?? "";
    formLoaded.email = localForm.email ?? "";
    formLoaded.category = localForm.category ?? null;
    formLoaded.dificulty = localForm.dificulty ?? null;

    if (formLoaded.userType) {
        if (formLoaded.name && formLoaded.email) {
            if (formLoaded.category) {
                if (formLoaded.dificulty) {
                    setCurStep(3);
                } else {
                    setCurStep(3);
                }
            } else {
                setCurStep(2);
            }
        } else {
            setCurStep(1);
        }
    }
    return formLoaded
}