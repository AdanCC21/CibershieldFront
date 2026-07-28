import EmailCard from "./components/EmailCard"
import { Icons } from "@/constants/icons"
import PhoneCard from "./components/PhoneCard"
import { useEffect, useState } from "react"
import type { TrainingForm } from "@/entities/form.entity"
import toast from "react-hot-toast"
import { showUp, showUpDown, tailwindcssDuration } from "@/constants/animations"
import { useNavigate } from "react-router-dom"
import { getExamples } from "@/scripts/examples"
import TipsCarrusel from "./components/TipsCarrusel"
import { AnimatePresence, motion } from "framer-motion"
import type { EmailExercises } from "@/entities/email"
import GenModal from "@/components/modal/GenModal"
import Button from "@/components/Button"
import { handleResultMessage } from "@/scripts/exercise"
import ExerciseItem from "./components/ExerciseItem"
import DonutChart from "@/components/DonutChart"
import type { ModalPrompts } from "@/entities/modal"


export default function Exercises() {
    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState<TrainingForm | null>(null)
    const [loading, setLoading] = useState(false);

    const [exercises, setExercises] = useState<EmailExercises[]>([])

    const [modalState, setModalState] = useState(false);
    const [modalData, setModalData] = useState<ModalPrompts>({ title: "", message: "", modalType: null });

    const [curEx, setEx] = useState<number>(0);
    const [results, setResult] = useState({ correct: 0, incorrect: 0 });

    const handleResult = (isReal: boolean) => {
        const newResults = { ...results }

        if (exercises[curEx].isReal === isReal) {
            toast.success("Correcto");

            newResults.correct += 1;

            if (curEx > 1 && curEx < 3) {
                console.log("Eliminando formInfo")
                localStorage.removeItem('formInfo');
            }
        } else {
            if (curEx < exercises.length - 1) {
                if (exercises[curEx].whyIsAnError) {
                    const msg = exercises[curEx].whyIsAnError;
                    console.log(msg);

                    setModalData({
                        message: msg,
                        modalType: 'error',
                    })

                    setModalState(true);
                } else {
                    setModalData({
                        message: "El correo es un intento de phishing. (Hubo un error extrayendo el motivo)",
                        modalType: 'error',
                    })
                    setModalState(true);

                    console.log("error sin feedback");
                    toast.error("Incorrecto");
                }
            }
            newResults.incorrect += 1;
        }

        setResult(newResults);
        window.scroll({top:0, left:0, behavior:'smooth'})

        if (curEx === exercises.length - 1) {
            const msg = exercises[curEx].whyIsAnError ?? "";
            setModalData({
                title: "Fin de las pruebas",
                message: `${msg}`,
                modalType: 'finish',
                color: 'primary',
                results: newResults
            })
            setModalState(true);
        } else {
            setEx(prev => prev + 1);
        }
    }

    useEffect(() => {
        if (loading) return;
        setLoading(true);

        try {
            const raw = localStorage.getItem('formInfo');
            if (!raw) return;

            const localForm = JSON.parse(raw);
            if (!localForm) {
                toast.error("No pudimos cargar los datos necesarios para los ejercicios");
                setFormInfo(null);
                setLoading(false);
                return;
            }
            setFormInfo(localForm);
            if (!localForm.dificulty || !localForm.category) {
                throw new Error("La categoría y/o dificultad son inválidas para estos ejercicios.");
            }
            console.log(localForm.category, localForm.dificulty);
            setExercises([...getExamples(localForm.dificulty, localForm.category)]);
        } catch (e) {
            console.error(e);
            setFormInfo(null);
        }

        setTimeout(() => {
            setLoading(false);
        }, 5000)

        return (() => { setLoading(false) })
    }, [])

    if (loading) return (
        <TipsCarrusel tipType={formInfo?.category ?? 'email'} />
    )

    if (!formInfo) return (
        <div className="flex flex-col items-center justify-center flex-1">
            <h3 className="text-xl">Lo sentimos, hubo un error. Intentalo más tarde</h3>
        </div>
    )

    return (
        <div className='flex flex-col md:flex-row justify-between py-[2vh] gap-4 flex-1 my-[2vh] page-margin overflow-y-auto'>
            {(modalData.modalType === 'error') ?
                <GenModal item={{ title: "Incorrecto" }} modalSize="w-md" headerStyle={'red'} active={modalState} setActive={setModalState}>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <img src={Icons.incorrect} alt="Error" className="h-20 p-4 rounded-full border-2 border-red-500" />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-3xl text-red-600 font-bold">Incorrecto</h3>
                            <p className="text-base">{modalData.message}</p>
                        </div>
                    </div>
                    <Button title="Cerar" btnStyle="default" btnClass="mt-8 ml-auto" onClick={() => { setModalState(false) }} />
                </GenModal>
                :
                <GenModal item={{ title: "Resultados" }} modalSize="w-sm" headerStyle={'default'} active={modalState} setActive={setModalState} onClose={() => { navigate("/training") }}>
                    <section className="flex flex-col items-center justify-center mb-4">
                        <DonutChart percentage={(results.correct / (results.correct + results.incorrect)) * 100} />
                        <p className="text-base text-center mt-4">{handleResultMessage(results)}</p>
                    </section>
                    <section className="flex gap-2">

                        <div className="flex flex-1 items-center gap-4 bg-green-200/40 p-2 rounded-xl">
                            <img src={Icons.checkCircle} className="" />
                            <div className="flex flex-col">
                                <span className="text-lg">{results.correct}</span>
                                <span className="text-sm text-green-600">Aciertos</span>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center gap-4 bg-red-200/40 p-2 rounded-xl">
                            <img src={Icons.cancel} className="" />
                            <div className="flex flex-col ">
                                <span className="text-xl">{results.incorrect}</span>
                                <span className="text-xs text-red-600">Errores</span>
                            </div>
                        </div>

                    </section>
                </GenModal>
            }

            <motion.section variants={showUp} initial="hidden" animate="show" exit="exit" className="hidden lg:flex flex-col gap-4 md:max-w-2/10 max-h-[90vh]">
                <article className="flex flex-col items-center gap-4 card-shadow border border-black/10 rounded-lg p-4">
                    <img src={Icons.person} alt="person" className="h-12" />
                    <span className="text-base">{formInfo.name}</span>
                    <span className="text-xs">{formInfo.email}</span>
                </article>

                <article className="flex flex-col gap-4 p-4 w-full flex-1 card-shadow border border-black/10 rounded-lg overflow-y-auto">
                    <span className="text-lg font-medium">Bandeja de entrada</span>

                    <ul className="flex flex-col gap-4 w-full">
                        {exercises.map((ex, ind) => (<ExerciseItem key={ex.id} title={ex.title} owner={ex.owner.email} active={curEx === ind} />))}
                    </ul>
                </article>

                <button className={`group flex items-center justify-center gap-2 p-2 rounded-lg border-t-4 border-(--primary-color) shadow-md hover:border-red-800 hover:bg-red-400 hover:text-white ${tailwindcssDuration} cursor-pointer`} onClick={() => {
                    localStorage.removeItem('formInfo')
                    navigate('/')
                }}>
                    <span className="text-base">Salir</span>
                </button>
            </motion.section>

            <div className="hidden lg:block w-px bg-[#0002]"></div>

            <AnimatePresence mode="wait">
                <motion.section key={curEx} variants={showUpDown} initial="hidden" animate="show" exit="exit" className={`flex lg:max-h-[90vh] ${formInfo.category === 'email' ? 'flex-col w-full gap-4' : 'flex-col justify-between lg:justify-center lg:items-center lg:size-fit lg:m-auto flex-1'} `}>
                    {formInfo.category === 'email' ?
                        <EmailCard key={curEx} ex={exercises[curEx]} />
                        :
                        <PhoneCard ex={exercises[curEx]} />
                    }

                    <article className={`flex gap-8 ${formInfo.category === 'email' ? 'justify-center items-center' : 'justify-center w-full pt-4'} `}>
                        <button title="Es un mensaje legitimo" className="group flex items-center gap-2 px-3 py-1 border-t-3 border-green-600 hover:border-green-800 bg-green-50 hover:bg-green-400 rounded-lg cursor-pointer shadow-md"
                            onClick={() => { handleResult(true) }}>
                            <span className={`group-hover:text-white text-base ${tailwindcssDuration}`}>No es phishing</span>
                            <img src={Icons.check} alt="wrong" className={`group-hover:invert h-5 ${tailwindcssDuration}`} />
                        </button>

                        <button title="Es un mensaje falso" className="group flex items-center gap-2 px-3 py-1 border-t-3 border-red-600 hover:border-red-800 bg-red-50 hover:bg-red-400 rounded-lg cursor-pointer shadow-md"
                            onClick={() => { handleResult(false) }}>
                            <span className={`group-hover:text-white text-base ${tailwindcssDuration}`}>Es phishing</span>
                            <img src={Icons.warning} alt="check" className={`group-hover:invert h-5 ${tailwindcssDuration}`} />
                        </button>
                    </article>
                </motion.section>
            </AnimatePresence>
        </div>
    )
}

