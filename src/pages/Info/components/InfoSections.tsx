import GenModal, { type ModalData } from "@/components/modal/GenModal"
import { showUp } from "@/constants/animations"
import type { InfoArticle } from "@/entities/virus"
import { AnimatePresence, motion } from "framer-motion"
import { useState, type ReactNode } from "react"
import TypeCard from "./TypeCard"

interface Prompts {
    title: string
    desc: string | string[] | InfoArticle[]
    img?: string
    imgDown?: boolean
    imgAlt?: string
    child?: ReactNode
}
export default function InfoSections({ title, desc, img, imgDown, imgAlt, child }: Prompts) {
    const [modalActive, showModal] = useState(false);
    const [curModalChild, setModChild] = useState<{ children: ReactNode } & ModalData | null>(null);

    const openModal = (data: InfoArticle) => {
        showModal(true);
        if (typeof data.content === 'string') {
            setModChild({
                id: data.id,
                icon: data.icon,
                title: data.title,
                children: data.child ?? data.content
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
                        <li key={i} className="list-disc list-inside">
                            <span className="text-sm">{cur}</span>
                        </li>
                    )}
                </ul>
            )
        } else {
            return (
                <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-6 gap-4 my-2">
                    {(desc as InfoArticle[]).map((article) =>
                        <TypeCard key={article.id} article={article} onClick={() => { openModal(article) }} />
                    )}
                </ul>
            )
        }
    }

    return (
        <AnimatePresence mode='wait'>
            <motion.div variants={showUp} className='flex flex-col gap-2 h-fit w-full'>
                <div className={`flex ${imgDown ? 'flex-col' : 'flex-col lg:flex-row'} gap-2 w-full`}>
                    <div className={`flex flex-col gap-2 ${!imgDown && 'flex-2'}`}>
                        <h3 className='text-2xl font-semibold'>{title}</h3>
                        {switchItem()}
                    </div>
                    {img &&
                        <div className={`flex flex-1 overflow-hidden`}>
                            <img src={img} alt={imgAlt || 'img'} className={`m-auto ${!imgDown ? ' max-h-50' : ' max-h-80'}`} />
                        </div>
                    }
                </div>
                {child &&
                    <div className="flex w-full justify-end">
                        {child}
                    </div>
                }
                {curModalChild && curModalChild.children &&
                    <GenModal key={curModalChild.id} modalSize='w-6xl' active={modalActive} setActive={showModal} item={curModalChild} headerStyle="primary">
                        <main>
                            {curModalChild.children}
                        </main>
                    </GenModal>
                }
            </motion.div>
        </AnimatePresence>
    )
}