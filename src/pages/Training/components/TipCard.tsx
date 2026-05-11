import { tailwindcssDuration } from "@/constants/animations"
import type { TipEntity } from "@/entities/tip"

interface Prompts {
    tip: TipEntity
    changeTip: () => void
}
export default function TipCard({ tip, changeTip }: Prompts) {
    return (
        <div className="flex flex-col h-60 p-4 gap-4 border-t-4 border-yellow-400 bg-white shadow-md rounded-lg animate-fade-in">
            <h5 className="text-lg">{tip.title}</h5>
            <p className="text-base">{tip.desc}</p>
            <div className="flex justify-end w-full mt-auto">
                <button className="group cursor-pointer" onClick={changeTip}>
                    <span className={`text-sm border-b border-b-black/0 group-hover:border-b-(--primary-color) ${tailwindcssDuration} `}>Siguiente</span>
                </button>
            </div>
        </div>
    )
}
