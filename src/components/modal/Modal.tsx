import { Icons } from "@/constants/icons";
import type { Dispatch, SetStateAction } from "react";
import { PieChart } from "@mui/x-charts-pro";
import type { HeadColor, ModalType } from "@/entities/modal";
import { useNavigate } from "react-router-dom";

interface Prompts extends ModalPrompts {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

export interface ModalPrompts {
    title?: string | null
    message: string

    color?: HeadColor | null
    modalType?: ModalType | null
    results?: { correct: number, incorrect: number }

    btnLabel?: string
}

export default function Modal({ active, setActive, title, message, color, modalType, results }: Prompts) {
    if (!active) return
    let bg = "";
    if (color) {
        bg = color === 'red' ? 'bg-red-400' : 'bg-(--primary-color)'
    }
    const navigator = useNavigate();

    const handleContent = () => {
        if (!modalType) return
        switch (modalType) {
            case 'error':
                return (
                    <div className="flex flex-col">
                        <img src={Icons.incorrect} alt="incorrect" className="h-24" />
                        <h3 className="text-center text-xl font-semibold">Incorrecto</h3>
                    </div>
                )
            case 'finish':
                return (
                    <div className="flex flex-col p-2">
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: results?.correct ?? 0, label: `Aciertos ${results?.correct}`, color: "#af0" },
                                        { id: 1, value: results?.incorrect ?? 0, label: `Erroneos ${results?.incorrect}`, color: "#f20" },
                                    ],
                                },
                            ]}
                            width={200}
                            height={200}
                        />
                    </div>
                )
            default:
                return <></>
        }
    }

    return (
        <div className='fixed top-0 left-0 flex w-screen h-screen bg-black/40 z-900' onClick={(e) => {
            setActive(false); e.stopPropagation(); if (modalType === 'finish')
                navigator("/");
        }}>
            <div className="relative flex flex-col m-auto bg-white rounded-xl max-w-2/5 min-w-2/5 min-h-120" onClick={(e) => {
                e.stopPropagation();
            }}>
                <header className={`absolute top-0 left-0 flex w-full py-1 justify-end ${bg} rounded-t-xl px-4`}>
                    <button className="flex size-fit cursor-pointer">
                        <img className={`h-8 ${color && 'invert'}`} src={Icons.close} alt="close" onClick={() => {
                            setActive(false)
                            if (modalType === 'finish')
                                navigator("/testing");
                        }} />
                    </button>
                </header>

                <main className='flex flex-col flex-1 px-8 items-center justify-center'>
                    <h3 className="text-2xl">{title}</h3>
                    {handleContent()}
                    <p className={`text-base ${modalType === 'error' && 'text-center'} my-2`}>{message}</p>
                </main>
            </div>
        </div>
    )
}
