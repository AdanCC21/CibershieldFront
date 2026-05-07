import type { UserEntity } from "@/entities/user"
import ExCard from "./components/ExCard"
import { Icons } from "@/constants/icons"

interface Prompts {
    user?: UserEntity
}


export default function Exercises({ user }: Prompts) {
    return (
        <div className='flex flex-col justify-between py-[2vh] gap-4 flex-1'>
            <h2 className='text-2xl font-bold'>Ejercicio #1</h2>

            <ExCard id={1} ex={{}} />

            <div className="flex gap-8 justify-center items-center ">
                <button className="flex items-center gap-2 px-2 py-1 bg-red-600 rounded-lg cursor-pointer">
                    <span className="text-base text-white">Plagio</span>
                    <img src={Icons.close} alt="wrong" className="h-6 invert" />
                </button>
                <button className="flex items-center gap-2 px-2 py-1 border border-green-600 rounded-lg cursor-pointer">
                    <span className="text-base">Verdadero</span>
                    <img src={Icons.check} alt="wrong" className="h-6" />
                </button>
            </div>
        </div>
    )
}