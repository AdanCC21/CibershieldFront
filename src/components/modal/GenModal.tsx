import { useEffect, useEffectEvent, type Dispatch, type ReactNode, type SetStateAction } from "react"
import { Icons } from "@/constants/icons"
import { motion } from "framer-motion"
import { showUp } from "@/constants/animations"

interface Prompts {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>

    item: ModalData
    children: ReactNode
}

export interface ModalData {
    id: number
    title?: string
    icon?: string
}
export default function GenModal({ active, setActive, item, children }: Prompts) {
    useEffect(() => {
        active ?
            document.documentElement.style.overflowY = "hidden" :
            document.documentElement.style.overflowY = ""

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActive(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.documentElement.style.overflowY = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [active, setActive]);

    if (!active) return <></>

    return (
        <div className="fixed top-0 left-0 flex w-screen h-screen bg-black/40" onClick={(e) => { setActive(false); e.stopPropagation(); }}>
            <motion.div variants={showUp} initial="hidden" animate="showShort" exit="exit" className="flex flex-col gap-4 bg-white max-w-3/5 max-h-[60vh] m-auto p-4 overflow-hidden rounded-lg" onClick={(e) => { e.stopPropagation() }}>
                <header className="flex items-center gap-4 bg-(--primary-secundary) py-2">
                    <div className="flex items-center gap-4">
                        {item.icon &&
                            <img src={item.icon} className="h-8" />
                        }
                        {item.title &&
                            <span className="text-2xl font-medium">
                                {item.title}
                            </span>
                        }
                    </div>
                    <button onClick={() => { setActive(false); }} className="flex items-center justify-center size-fit ml-auto cursor-pointer">
                        <img src={Icons.close} alt="close" className="h-8" />
                    </button>
                </header>

                {typeof children === 'string' ?
                    <span className="text-lg">{children}</span>
                    :
                    children
                }
            </motion.div>
        </div>
    )
}
