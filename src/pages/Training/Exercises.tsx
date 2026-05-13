import EmailCard from "./components/EmailCard"
import { Icons } from "@/constants/icons"
import PhoneCard from "./components/PhoneCard"
import { useEffect, useState } from "react"
import type { TrainingForm } from "@/entities/form.entity"
import toast from "react-hot-toast"
import { emailExamples, smsExamples, type EmailExercises } from "@/constants/example"
import { showUp, showUpDown, tailwindcssDuration } from "@/constants/animations"
import Modal, { type ModalPrompts } from "@/components/modal/Modal"
import { useNavigate } from "react-router-dom"
import { getExamples } from "@/scripts/examples"
import TipsCarrusel from "./components/TipsCarrusel"
import { AnimatePresence, motion } from "framer-motion"


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
            if (curEx > 1) {
                localStorage.removeItem('formInfo');
            }
        } else {
            if (curEx < exercises.length - 1) {
                if (exercises[curEx].whyIsAnError) {
                    const msg = exercises[curEx].whyIsAnError;
                    setModalData({
                        message: msg,
                        modalType: 'error',
                        color:'red'
                    })
                    setModalState(true);
                } else {
                    toast.error("Incorrecto");
                }
            }
            newResults.incorrect += 1;
        }
        setResult(newResults);

        if (curEx === exercises.length - 1) {
            const msg = exercises[curEx].whyIsAnError ?? "";
            setModalData({
                title: "Fin de las pruebas",
                message: `${msg}`,
                modalType: 'finish',
                color:'primary',
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
            } else {
                setFormInfo(localForm);
            }
        } catch (e) {
            console.error(e);
            setFormInfo(null);
        }

        const maxEx = formInfo?.dificulty === 'facil' ? 3 : formInfo?.dificulty === 'medio' ? 5 : 8;
        const typeEx = formInfo?.category === 'email' ? emailExamples : smsExamples
        setExercises([...getExamples(maxEx, typeEx)]);

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
            <h3 className="text-xl">Lo sentimos, hubo un error. Intentalo mas tarde</h3>
        </div>
    )

    return (
        <div className='flex flex-col md:flex-row justify-between py-[2vh] gap-4 flex-1 my-[2vh] page-margin'>
            <Modal active={modalState} setActive={setModalState} title={modalData.title} message={modalData.message} modalType={modalData.modalType} color={modalData.color} results={modalData.results} />

            <motion.section variants={showUp} initial="hidden" animate="show" exit="exit" className="flex flex-col gap-4 max-w-1/6 max-h-[75vh]">
                <article className="flex flex-col items-center gap-4 card-shadow rounded-lg p-4">
                    <img src={Icons.person} alt="person" className="h-12" />
                    <span className="text-base">Usuario</span>
                    <span className="text-xs">usuario@gmail.com</span>
                </article>

                <article className="flex flex-col gap-4 p-4 w-full flex-1 card-shadow rounded-lg overflow-y-auto">
                    <ul className="flex flex-col gap-4 w-full">
                        {exercises.map((ex, ind) => (<ExerciseItem title={ex.title} owner={ex.owner.email} active={curEx === ind} />))}
                    </ul>
                </article>

                <button className={`group flex items-center justify-center gap-2 p-2 rounded-lg border-t-4 border-(--primary-color) shadow-md hover:border-red-800 hover:bg-red-400 hover:text-white ${tailwindcssDuration} cursor-pointer`} onClick={() => {
                    localStorage.removeItem('formInfo')
                    navigate('/')
                }}>
                    <img src={Icons.close} className={`group-hover:invert h-4 ${tailwindcssDuration}`} alt="exit" />
                    <span className="text-base">Salir</span>
                </button>
            </motion.section>

            <div className="max-w-px flex-1 bg-[#0002]"></div>

            <AnimatePresence mode="wait">
                <motion.section key={curEx} variants={showUpDown} initial="hidden" animate="show" exit="exit" className={`flex ${formInfo.category === 'email' ? 'flex-col flex-1 gap-4' : 'justify-center items-center size-fit m-auto'} `}>
                    {formInfo.category === 'email' ?
                        <EmailCard key={curEx} ex={exercises[curEx]} />
                        :
                        <PhoneCard ex={exercises[curEx]} />
                    }

                    <article className={`flex gap-8 ${formInfo.category === 'email' ? 'justify-center items-center' : 'w-fit'} `}>
                        <button className="group flex items-center gap-2 px-3 py-1 border-t-3 border-red-600 hover:red-800 bg-red-50 hover:bg-red-400 rounded-lg cursor-pointer shadow-md"
                            onClick={() => { handleResult(false) }}>
                            <span className={`group-hover:text-white text-base ${tailwindcssDuration}`}>Falso</span>
                            <img src={Icons.close} alt="wrong" className={`group-hover:invert h-5 ${tailwindcssDuration}`} />
                        </button>

                        <button className="group flex items-center gap-2 px-3 py-1 border-t-3 border-green-600 hover:border-green-800 bg-green-50 hover:bg-green-400 rounded-lg cursor-pointer shadow-md"
                            onClick={() => { handleResult(true) }}>
                            <span className={`group-hover:text-white text-base ${tailwindcssDuration}`}>Verdadero</span>
                            <img src={Icons.check} alt="check" className={`group-hover:invert h-5 ${tailwindcssDuration}`} />
                        </button>
                    </article>
                </motion.section>
            </AnimatePresence>
        </div>
    )
}

interface ExPrompts {
    title: string
    owner: string
    active: boolean
}
function ExerciseItem({ title, owner, active }: ExPrompts) {
    return (
        <li className={`flex gap-2 items-center overflow-hidden`}>
            <div className={`flex flex-col w-full `}>
                <span className={`text-base truncate ${active && 'font-bold'}`}>
                    {active && '- '}
                    {title}
                </span>
                <span className={`text-xs text-(--text-gray) truncate`}>{owner}</span>
            </div>

        </li>
    )
}