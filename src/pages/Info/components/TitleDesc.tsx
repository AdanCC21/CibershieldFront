import GenModal, { type ModalData } from "@/components/modal/GenModal"
import { showUp, tailwindcssDuration } from "@/constants/animations"
import type { InfoArticle } from "@/entities/virus"
import { AnimatePresence, motion } from "framer-motion"
import { useState, type ReactNode } from "react"

interface Prompts {
    title: string
    desc: string | string[] | InfoArticle[]
    img?: string
    child?: ReactNode
}
export default function TitleDescription({ title, desc, img, child }: Prompts) {
    const [modalActive, showModal] = useState(false);
    const [curModalChild, setModChild] = useState<{ children: ReactNode } & ModalData | null>(null);

    const openModal = (data: InfoArticle) => {
        showModal(true);
        if (typeof data.content === 'string') {
            setModChild({
                id: data.id,
                icon: data.icon,
                title: data.title,
                children: data.content
            })
        }
    }

    const switchItem = () => {
        if (typeof desc === 'string') {
            return <p className='text-base whitespace-pre-line'>{desc}</p>
        } else if (desc.every(item => typeof item === 'string')) {
            return (
                <ul className="flex flex-col gap-2 w-full">
                    {(desc as string[]).map((cur, i) =>
                        <li key={i} className="list-disc list-inside text-sm">
                            {cur}
                        </li>
                    )}
                </ul>
            )

        } else {
            return (
                <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-6 gap-4 my-2">
                    {(desc as InfoArticle[]).map((article) =>
                        <li key={article.id} className={`group bg-white hover:bg-(--secundary-color) hover:text-white hover:scale-102 card-shadow rounded-lg ${tailwindcssDuration}`}>
                            <button className="flex flex-col h-full text-start w-full px-4 py-2 cursor-pointer" onClick={() => { openModal(article) }}>
                                <div className="flex gap-2 items-center">
                                    {article.icon &&
                                        <img src={article.icon} className={`group-hover:invert h-4 w-fit ${tailwindcssDuration}`} alt="icon" />
                                    }
                                    <h5 className="font-semibold text-lg">{article.title}</h5>
                                </div>
                                {article.summary && (
                                    <p className={`text-sm text-(--text-gray) group-hover:text-white/60 ${tailwindcssDuration}`}>{article.summary}</p>
                                )}
                            </button>
                        </li>
                    )}
                </ul>
            )
        }
    }

    return (
        <AnimatePresence mode='wait'>
            <motion.div variants={showUp} className='flex flex-col gap-2 h-fit w-full'>
                <div className="flex gap-2 w-full">
                    <div className="flex flex-col gap-2 flex-2 ">
                        <h3 className='text-2xl font-semibold'>{title}</h3>
                        {switchItem()}
                    </div>
                    {img &&
                        <div className='flex flex-1 overflow-hidden'>
                            <img src={img} alt='img' className='m-auto max-h-100' />
                        </div>
                    }
                </div>
                {child &&
                    <div className="flex w-full justify-end">
                        {child}
                    </div>
                }
                {curModalChild && curModalChild.children &&
                    <GenModal key={curModalChild.id} active={modalActive} setActive={showModal} item={curModalChild}>
                        <main>
                            {curModalChild.children}
                        </main>
                    </GenModal>
                }
            </motion.div>
        </AnimatePresence>
    )
}