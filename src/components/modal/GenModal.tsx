import { useEffect, type Dispatch, type ReactNode, type SetStateAction } from "react"
import { Icons } from "@/constants/icons"
import { motion } from "framer-motion"
import { showUp } from "@/constants/animations"

export type HeaderStyles = 'default' | 'primary';

interface Prompts {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>

    item?: ModalData
    headerStyle: HeaderStyles
    children: ReactNode
}

export interface ModalData {
    id?: number
    title?: string
    titleClass?: string
    titleSize?: string

    icon?: string
    iconAlt?: string
}
export default function GenModal({ active, setActive, item, headerStyle='default', children }: Prompts) {
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
        <motion.div className="fixed top-0 left-0 flex w-screen h-screen z-90" initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }} animate={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }} onClick={(e) => { setActive(false); e.stopPropagation(); }}>
            <motion.div variants={showUp} initial="hidden" animate="showShort" exit="exit" className="flex flex-col gap-4 bg-white max-w-3/5 max-h-[60vh] m-auto overflow-hidden rounded-lg" onClick={(e) => { e.stopPropagation() }}>
                <header className={`flex items-center gap-4 ${headerStyle === 'primary' ? 'bg-(--primary-color) text-white' : 'bg-white'}  p-4`}>
                    <div className="flex items-center gap-4">
                        {item && item.icon &&
                            <img src={item.icon} className={`h-8 ${headerStyle === 'primary' && 'invert'}`} />
                        }
                        {item && item.title &&
                            <span className={`${item.titleClass ?? ''} ${item.titleSize ?? 'text-2xl'} font-medium`}>
                                {item.title}
                            </span>
                        }
                    </div>
                    <button onClick={() => { setActive(false); }} className="flex items-center justify-center size-fit ml-auto cursor-pointer">
                        <img src={Icons.close} alt="close" className={`h-8 ${headerStyle === 'primary' && 'invert'}`} />
                    </button>
                </header>

                <main className="p-4">
                    {typeof children === 'string' ?
                        <span className="text-lg">{children}</span>
                        :
                        children
                    }
                </main>
            </motion.div>
        </motion.div>
    )
}
