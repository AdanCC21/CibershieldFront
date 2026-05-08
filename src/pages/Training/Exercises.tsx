import EmailCard from "./components/EmailCard"
import { Icons } from "@/constants/icons"
import PhoneCard from "./components/PhoneCard"
import { useEffect, useState } from "react"
import type { TrainingForm } from "@/entities/form.entity"
import toast from "react-hot-toast"
import Loader from "@/components/Loader"
import { emailExamples } from "@/constants/example"
import { tailwindcssDuration } from "@/constants/animations"
import Modal, { type ModalPrompts } from "@/components/modal/Modal"
import type { HeadColor, ModalType } from "@/entities/modal"


export default function Exercises() {
    const [formInfo, setFormInfo] = useState<TrainingForm | null>(null)
    const [loading, setLoading] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [modalData, setModalData] = useState<ModalPrompts>({ title: "", message: "", modalType: null });

    const [curEx, setEx] = useState<number>(0);
    const [results, setResult] = useState({ correct: 0, incorrect: 0 });

    const handleResult = (isReal: boolean) => {
        // Si es correcto
        const newResults = { ...results }
        if (emailExamples[curEx].isReal === isReal) {
            toast.success("Correcto mamuu 🐈");
            newResults.correct += 1;
        } else {
            if (curEx < emailExamples.length - 1) {
                if (emailExamples[curEx].whyIsAnError) {
                    const msg = emailExamples[curEx].whyIsAnError;
                    setModalData({
                        message: msg,
                        modalType: 'error',
                    })
                    setModalState(true);
                }
            }
            newResults.incorrect += 1;
        }
        setResult(newResults);

        if (curEx === emailExamples.length - 1) {
            const msg = emailExamples[curEx].whyIsAnError ?? "";
            setModalData({
                title: "Fin de las pruebas",
                message: `${msg}`,
                modalType: 'finish',
                results: newResults
            })
            setModalState(true);
        } else {
            setEx(prev => prev + 1);
        }
    }

    useEffect(() => {
        const loadLocalData = async () => {
            if (loading) return;
            setLoading(true);

            try {
                const localForm = await JSON.parse(localStorage.getItem('formInfo') || '');
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

            setLoading(false);
        }
        loadLocalData()
        return (() => { setLoading(false) })
    }, [])

    if (loading) return (
        <div className="flex flex-col items-center justify-center flex-1">
            <Loader />
            <span className="text-sm mt-2">Cargando</span>
        </div>
    )

    if (!formInfo) return (
        <div className="flex flex-col items-center justify-center flex-1">
            <h3 className="text-xl">Lo sentimos, hubo un error. Intentalo mas tarde</h3>
        </div>
    )
    return (
        <div className='flex flex-col justify-between py-[2vh] gap-4 flex-1 my-[2vh]'>
            <Modal active={modalState} setActive={setModalState} title={modalData.title} message={modalData.message} modalType={modalData.modalType} color={modalData.color} results={modalData.results} />

            <button className={`group absolute top-2 left-2 flex items-center gap-2 size-fit hover:bg-red-400 shadow-md hover:shadow-[#0004] hover:scale-110 p-2 rounded-full cursor-pointer ${tailwindcssDuration}`}>
                <img src={Icons.arrowRight} className={`group-hover:invert rotate-180 h-2 ${tailwindcssDuration}`} />
                <span className={`group-hover:text-white text-xs ${tailwindcssDuration}`}>Salir</span>
            </button>

            <div className="mt-[-4vh] size-fit bg-(--primary-color) text-white py-2 px-4 rounded-b-lg rounded-x-lg">
                <h2 className=' text-2xl font-bold'>Ejercicio #{curEx + 1}</h2>
            </div>

            <div className={`flex ${formInfo.category === 'email' ? 'flex-col size-full flex-1 gap-4' : 'justify-center items-center size-fit m-auto'} `}>
                {formInfo.category === 'email' ?
                    <EmailCard id={1} ex={emailExamples[curEx]} />
                    :
                    <PhoneCard />
                }

                <div className={`flex gap-8 ${formInfo.category === 'email' ? 'justify-center items-center' : 'w-fit'} `}>
                    <button className="flex items-center gap-2 px-3 py-1 bg-red-600 rounded-lg cursor-pointer"
                        onClick={() => { handleResult(false) }}>
                        <span className="text-base text-white">Plagio</span>
                        <img src={Icons.close} alt="wrong" className="h-5 invert" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1 border-2 border-[#059669] rounded-lg cursor-pointer"
                        onClick={() => { handleResult(true) }}>
                        <span className="text-base text-[#059669]">Verdadero</span>
                        <img src={Icons.check} alt="wrong" className="h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}