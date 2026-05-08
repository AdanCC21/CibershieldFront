import { Icons } from "@/constants/icons";

type HeadColor = 'red' | 'primary';
type ModalType = 'finish' | 'error' | 'default';

interface Prompts {
    color: HeadColor
    type: ModalType
    title: string
    message: string
    
    btnLabel: string
}

export default function Modal({ title, message, color, type }: Prompts) {
    const bg = color === 'red' ? 'bg-red-500':'bg-(--primary-color)'
    return (
        <div className='flex flex-col gap-4'>
            <header className={`size-full ${bg}`}></header>
            <main className='flex flex-col p-4'>
                <h3 className="text-xl">{title}</h3>
                {type === 'error' ?
                    <div className="flex flex-col p-2">
                        <img src={Icons.incorrect} alt="incorrect" className="h-18" />
                        <h3 className="text-lg font-semibold">Incorrecto</h3>
                    </div>
                    :
                    <>
                        {type === 'finish' &&
                            <>
                                <span>Grafica*</span>
                                <span className=""></span>
                            </>
                        }
                    </>
                }
                <span>{message}</span>
            </main>
            <footer>

            </footer>
        </div>
    )
}
