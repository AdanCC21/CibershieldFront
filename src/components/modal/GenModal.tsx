import { useEffect, type Dispatch, type ReactNode, type SetStateAction } from "react"
import { Icons } from "@/constants/icons"
import { motion } from "framer-motion"
import { showUp } from "@/constants/animations"

export type HeaderStyles = 'default' | 'primary' | 'red' | 'green';

interface Prompts {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    children: ReactNode

    item?: ModalData
    onClose?: () => void
    headerStyle: HeaderStyles

    modalClassName?: string
    modalSize?: "w-sm" | "w-md" | "w-lg" | "w-xl"
}

export interface ModalData {
    id?: number
    title?: string
    titleClass?: string
    titleSize?: string

    icon?: string
    iconAlt?: string
}
export default function GenModal({ active, setActive, onClose, item, headerStyle = 'default', children, modalClassName, modalSize }: Prompts) {

    const handleHeaderStyle = () => {
        switch (headerStyle) {
            case 'default':
                return "bg-white text-black"
            case 'primary':
                return "bg-(--primary-color) text-white"
            case 'red':
                return "bg-red-500 text-white"
            case 'green':
                return "bg-green-500 text-white"
            default:
                return "bg-white text-black"
        }
    }

    const handleIconInvert = () => {
        switch (headerStyle) {
            case 'red':
                return "invert"
            case 'primary':
                return "invert"
            default:
                return ""
        }
    }

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
        <motion.div className="fixed top-0 left-0 flex w-screen h-screen z-110" initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }} animate={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }} onClick={(e) => { setActive(false); e.stopPropagation(); }}>

            <motion.div variants={showUp} initial="hidden" animate="showShort" exit="exit" className={`flex flex-col gap-4 bg-white ${modalSize ?? 'max-w-3/5'} max-h-[60vh] m-auto overflow-hidden rounded-lg ${modalClassName}`} onClick={(e) => { e.stopPropagation() }}>
                <header className={`flex items-center gap-4 ${handleHeaderStyle()} px-4 py-2`}>
                    <div className="flex items-center gap-4">
                        {item && item.icon &&
                            <img src={item.icon} className={`h-8 ${handleIconInvert()}`} />
                        }
                        {item && item.title &&
                            <span className={`${item.titleClass ?? ''} ${item.titleSize ?? 'text-xl'} font-bold`}>
                                {item.title}
                            </span>
                        }
                    </div>
                    <button onClick={() => { onClose?.(); setActive(false); }} className="flex items-center justify-center size-fit ml-auto cursor-pointer">
                        <img src={Icons.close} alt="close" className={`h-8 ${handleIconInvert()}`} />
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
