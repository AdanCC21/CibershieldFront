import type { Dispatch, ReactNode, SetStateAction } from "react"
import { Icons } from "@/constants/icons"

interface Prompts {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    children: ReactNode | string

    title?: string
}
export default function GenModal({ active, setActive, children, title }: Prompts) {
    if (!active) return <></>

    return (
        <div className="fixed top-0 left-0 flex w-screen h-screen bg-black/40" onClick={(e) => { setActive(false); e.stopPropagation(); }}>
            <div className="flex flex-col gap-4 bg-white max-w-3/5 max-h-[60vh] m-auto p-4 overflow-hidden rounded-lg" onClick={(e) => { e.stopPropagation() }}>
                <header className="flex items-center justify-between bg-(--primary-secundary) py-2">
                    {title &&
                        <span className="text-2xl font-medium">
                            {title}
                        </span>
                    }
                    <button onClick={() => { setActive(false); }} className="flex items-center justify-center size-fit ml-auto cursor-pointer">
                        <img src={Icons.close} alt="close" className="h-8" />
                    </button>
                </header>
                <main className="flex flex-col">
                    {typeof children === 'string' ?
                        <span className="text-lg">{children}</span>
                        :
                        children
                    }
                </main>
            </div>
        </div>
    )
}
