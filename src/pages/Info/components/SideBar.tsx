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
            <ul className="flex flex-col gap-4">
                {virusList.map((virus, indx) => {
                    if (virus.title === virusActive.title) {
                        return (
                            <li key={indx} className="flex flex-col gap-2">
                                <span className="text-xl font-bold">{virus.title}</span>
                                <ul className="flex flex-col gap-1">
                                    {virus.sections.map((sec) => (
                                        <li key={sec.navTitle}>
                                            <span className="text-sm text-(--text-gray)">{sec.navTitle}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    }
                    return (
                        <li key={indx}>
                            <button className={`${virus.title === virusActive.title ? 'text-(--primary-color) font-bold text-xl' : 'text-base '} cursor-pointer`} onClick={() => { setVirus(virus) }}>
                                {virus.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
