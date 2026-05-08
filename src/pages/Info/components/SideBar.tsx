import { virusList } from "@/constants/virusInfo"
import type { VirusSection } from "@/entities/virus"
import type { Dispatch, SetStateAction } from "react"

interface Prompts {
    virusActive: VirusSection
    setVirus: Dispatch<SetStateAction<VirusSection>>
}

export default function SideBar({ virusActive, setVirus }: Prompts) {
    return (
        <nav className='flex-1 flex flex-col border-r border-[#fff2]'>
            <h3 className="text-2xl my-2 font-medium">{virusActive.title}</h3>

            <div className="h-px bg-[#0002] my-2 mx-4"></div>

            <ul className="flex flex-col gap-2 list-disc list-inside">
                {virusActive.sections.map((sec => (
                    <li className="text-sm font-medium cursor-pointer">
                        {sec.navTitle}
                    </li>
                )))}
            </ul>
            <div className="h-px bg-[#0002] my-2 mx-4"></div>
            <ul className="flex flex-col gap-2">
                {virusList.map((vir) => (
                    <li>
                        <button className={`${vir.title === virusActive.title ? 'text-(--primary-color) font-bold text-lg' : 'text-base '} cursor-pointer`} onClick={() => { setVirus(vir) }}>
                            {vir.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
