
import SideBar from "./components/SideBar";

import { useEffect, useState } from "react";
import type { VirusSection } from "@/entities/virus";
import TitleDescription from "./components/TitleDesc";
import { Phishing } from "@/constants/pishing";
import { useLocation } from "react-router-dom";
import { Malware } from "@/constants/malware";
import { AnimatePresence, motion } from "framer-motion";
import { showUp, showUpContainer } from "@/constants/animations";

export default function Info() {
    const [curVirus, setVirus] = useState<VirusSection>(Phishing);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes('malware')) {
            setVirus(Malware);
        } else {
            setVirus(Phishing);
        }
    }, [])

    return (
        <AnimatePresence mode="wait">
            <div className='flex w-full'>
                <SideBar virusActive={curVirus} setVirus={setVirus} />
                <main className='flex-5 max-w-5/6 flex flex-col p-2 gap-2'>
                    <motion.h1 variants={showUp} initial="hidden" animate="showShort" exit="exit" className='text-4xl font-medium'>{curVirus.title}</motion.h1>
                    <motion.div variants={showUp} initial="hidden" animate="showShort" exit="exit" className="h-px bg-[#0002] my-2 mx-4"></motion.div>
                    <motion.ul variants={showUpContainer} initial="hidden" animate="showShort" exit="exit">
                        {curVirus.sections.map(sec => {
                            return (
                                <TitleDescription key={sec.content.id} title={sec.content.title} desc={sec.content.content} />
                            )
                        })}
                    </motion.ul>
                </main>
            </div>
        </AnimatePresence>
    )
}
