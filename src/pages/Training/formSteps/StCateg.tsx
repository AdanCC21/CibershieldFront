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
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">Categoria</h1>
                <span className="text-lg">Selecciona una categoria para llevar a cabo las pruebas</span>
            </div>

            <div className="flex gap-4">
                <UserCard title="SMS" active={form.category === 'sms'} icon={Icons.sms} setForm={setForm} atribute='category' value="sms" />
                <UserCard title="Email" active={form.category === 'email'} icon={Icons.email} setForm={setForm} atribute='category' value="email" />
            </div>
        </>
    )
}
