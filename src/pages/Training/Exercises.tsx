import EmailCard from "./components/EmailCard"
import { Icons } from "@/constants/icons"
import PhoneCard from "./components/PhoneCard"
import { useEffect, useState } from "react"
import type { TrainingForm } from "@/entities/form.entity"
import toast from "react-hot-toast"
import Loader from "@/components/Loader"


export default function Exercises() {
    const [formInfo, setFormInfo] = useState<TrainingForm | null>(null)
    const [loading, setLoading] = useState(false);

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
    },[])

    if (loading) return (
        <div className="flex flex-col items-center justify-center flex-1">
            <Loader/>
            <span className="text-sm mt-2">Cargando</span>
        </div>
    )

    if (!formInfo) return (
        <div className="flex flex-col items-center justify-center flex-1">
            <h3 className="text-xl">Lo sentimos, hubo un error. Intentalo mas tarde</h3>
        </div>
    )
    return (
        <div className='flex flex-col justify-between py-[2vh] gap-4 flex-1'>
            <h2 className='text-2xl font-bold'>Ejercicio #1</h2>

            <div className={`flex ${formInfo.category === 'email' ? 'flex-col size-full flex-1 gap-4' : 'justify-center items-center size-fit m-auto'} `}>
                {formInfo.category === 'email' ?
                    <EmailCard id={1} ex={{}} />
                    :
                    <PhoneCard />
                }

                <div className={`flex gap-8 ${formInfo.category === 'email' ? 'justify-center items-center' : 'w-fit'} `}>
                    <button className="flex items-center gap-2 px-3 py-1 bg-red-600 rounded-lg cursor-pointer">
                        <span className="text-base text-white">Plagio</span>
                        <img src={Icons.close} alt="wrong" className="h-5 invert" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1 border-2 border-[#059669] rounded-lg cursor-pointer">
                        <span className="text-base text-[#059669]">Verdadero</span>
                        <img src={Icons.check} alt="wrong" className="h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}