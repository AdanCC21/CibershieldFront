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
    const bg = color === 'red' ? 'bg-red-500' : 'bg-(--primary-color)'
    const navigator = useNavigate();

    const handleContent = () => {
        if (!modalType) return
        switch (modalType) {
            case 'error':
                return (
                    <div className="flex flex-col p-2">
                        <img src={Icons.incorrect} alt="incorrect" className="h-18" />
                        <h3 className="text-center text-lg font-semibold">Incorrecto</h3>
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
            <div className="relative flex flex-col gap-4 justify-center items-center m-auto bg-white rounded-xl max-w-3/5 min-w-2/5 min-h-80" onClick={(e) => {
                e.stopPropagation(); if (modalType === 'finish')
                    navigator("/training");
            }}>
                <button className="absolute top-2 right-2 flex size-fit cursor-pointer">
                    <img className="h-8" src={Icons.close} alt="close" onClick={() => {
                        setActive(false)
                        if (modalType === 'finish')
                            navigator("/training");
                    }} />
                </button>
                {color &&
                    <header className={`w-full py-4 ${bg} rounded-t-xl`}></header>
                }
                <main className='flex flex-col items-center justify-center h-full flex-1 p-4'>
                    <h3 className="text-xl">{title}</h3>
                    {handleContent()}
                    <p className={`text-base ${modalType === 'error' && 'text-center'}`}>{message}</p>
                </main>
                {/* <footer className="flex w-full p-2 justify-end mt-auto">
                    <Button title={btnLabel ?? 'Cerrar'} onClick={() => setActive(false)} btnStyle="outline" />
                </footer> */}
            </div>
        </div>
    )
}
