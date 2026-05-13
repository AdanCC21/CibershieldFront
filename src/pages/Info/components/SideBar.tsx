import { virusList } from "@/constants/virusInfo"
import type { VirusSection } from "@/entities/virus"
import type { Dispatch, SetStateAction } from "react"

interface Prompts {
    virusActive: VirusSection
    setVirus: Dispatch<SetStateAction<VirusSection>>
}

export default function SideBar({ virusActive, setVirus }: Prompts) {
    return (
        <nav className='flex flex-col border-r border-[#fff2] my-4'>
            <ul className="flex flex-col gap-4">
                {virusList.map((virus, indx) => {
                    return (
                        <li key={indx}>
                            <button className={`${virus.title === virusActive.title ? 'text-(--secundary-color) font-semibold text-xl border-b border-(--primary-color)' : 'text-base '} cursor-pointer`} onClick={() => { setVirus(virus) }}>
                                {virus.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
