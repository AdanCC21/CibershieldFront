import { useEffect, useState } from 'react'
import TipCard from './TipCard'
import type { TipEntity } from '@/entities/tip'

import type { CategoryType } from '@/entities/form.entity'
import { TipsList } from '@/constants/tips'
import { GetRandomTip } from '@/scripts/tips'
import { AnimatePresence } from 'framer-motion'

interface Prompts {
    tipType: CategoryType
}
export default function TipsCarrusel({ tipType }: Prompts) {
    const [curTip, setCurTip] = useState<TipEntity>(TipsList[0])

    useEffect(() => {
        const timer = setTimeout(() => {
            const tip = GetRandomTip(tipType, curTip.id);
            setCurTip(tip ?? TipsList[0]);
        }, 10000)

        return () => clearTimeout(timer)
    }, [curTip, tipType])

    const nextTip = () => {
        const tip = GetRandomTip(tipType, curTip.id);
        tip ?
            setCurTip(tip) : setCurTip(TipsList[0])
    }

    return (
        <div className="flex flex-col items-center justify-center flex-1">
            <AnimatePresence mode='wait'>
                {curTip &&
                    <TipCard key={curTip.id} tip={curTip} changeTip={nextTip} />
                }
            </AnimatePresence>
            <span className="absolute bottom-[20vh] text-sm mt-2 animate-pulse ">Cargando...</span>
        </div>
    )
}