import { virusList } from "@/constants/virusInfo"
import type { VirusSection } from "@/entities/virus"
import type { Dispatch, SetStateAction } from "react"
interface Prompts {
    virusActive: VirusSection
    setVirus: Dispatch<SetStateAction<VirusSection>>
}

export default function SideBar({ virusActive, setVirus }: Prompts) {
    return (
        <ul className="flex lg:flex-col gap-4 mt-4 lg:items-start items-end">
            {virusList.map((virus, indx) => {
                return (
                    <li key={indx}>
                        <button className={`${virus.title === virusActive.title ? 'text-(--secundary-color) font-semibold text-xl border-b border-(--primary-color)' : 'text-base '} cursor-pointer`} onClick={() => { setVirus(virus); }}>
                            {virus.title}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
