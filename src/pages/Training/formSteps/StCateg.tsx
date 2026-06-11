import { type Dispatch, type SetStateAction } from 'react'
import UserCard from '../components/UserCard'
import { Icons } from '@/constants/icons'
import type { TrainingForm } from '@/entities/form.entity'

interface Prompts {
    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}
export default function StCateg({ form, setForm }: Prompts) {
    return (
        <>
            <div className="flex flex-col gap-4 mb-4">
                <h1 className="text-2xl lg:text-4xl">Categoría</h1>

                <span className="text-sm lg:text-lg">
                    Selecciona que tipo de mensajes quieres probar
                </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <UserCard
                    title="SMS"
                    active={form.category === 'sms'}
                    icon={Icons.sms}
                    setForm={setForm}
                    atribute='category'
                    value="sms"
                />

                <UserCard
                    title="Email"
                    active={form.category === 'email'}
                    icon={Icons.email}
                    setForm={setForm}
                    atribute='category'
                    value="email"
                />
            </div>
        </>
    )
}
