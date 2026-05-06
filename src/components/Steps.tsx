import { tailwindcssDuration } from "@/constants/animations";
import { type Dispatch, type SetStateAction } from "react";

export type Step = {
    id: number;
    label: string;
};

interface Prompts {
    steps: Step[],
    curStep: number
    setCurStep: Dispatch<SetStateAction<number>>
}
export default function Stepper({ steps, curStep, setCurStep }: Prompts) {
    return (
        <ul className="flex flex-col w-fit">
            {steps.map((step, index) => {
                const isActive = step.id === curStep;
                const isCompleted = step.id < curStep;
                const isLast = index === steps.length - 1;

                return (
                    <li key={step.id} className="flex flex-col items-end">
                        <div className="flex items-center gap-4">
                            <button className={` px-5 py-2 rounded-lg border text-sm font-medium ${tailwindcssDuration}
                            ${isActive ? "border-(--primary-color) text-(--primary-color) bg-(--primary-color)/3 shadow-sm" : isCompleted ? "border-(--primary-color) text-(--primary-color) bg-white" : "border-gray-200 text-gray-400 bg-white"} cursor-pointer`} onClick={() => setCurStep(step.id)}>
                                <span>{step.label}</span>
                            </button>

                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${tailwindcssDuration} cursor-pointer ${isActive ? "bg-(--primary-color) border-(--primary-color) text-white shadow-md shadow-indigo-200" : isCompleted ? "bg-(--primary-color) border-(--primary-color) text-(--primary-color)" : "bg-white border-(--primary-color)/20 text-(--text-gray)"}`}
                                onClick={() => setCurStep(step.id)}>
                                <span className={`${isCompleted && 'text-white'} text-sm font-semibold`}>{step.id + 1}</span>
                            </div>
                        </div>

                        {!isLast && (
                            <div className="self-end mr-4.5 w-0.5 h-10 bg-indigo-200" />
                        )}
                    </li>
                );
            })}
        </ul>
    );
}