
import SideBar from "./components/SideBar";

import { useState } from "react";
import type { VirusSection } from "@/entities/virus";
import TitleDescription from "./components/TitleDesc";
import { Phishing } from "@/constants/pishing";

export default function Info() {
    const [curVirus, setVirus] = useState<VirusSection>(Phishing);

    return (
        <div className='flex w-full'>
            <SideBar virusActive={curVirus} setVirus={setVirus} />
            <main className='flex-5 max-w-5/6 flex flex-col p-2 gap-2'>
                <h1 className='text-4xl font-medium'>{curVirus.title}</h1>
                

                <div className="h-px bg-[#0002] my-2 mx-4"></div>

                {curVirus.sections.map(sec => {
                    return (
                        <TitleDescription key={sec.content.id} title={sec.content.title} desc={sec.content.content} />
                    )
                })}
            </main>
        </div>
    )
}
