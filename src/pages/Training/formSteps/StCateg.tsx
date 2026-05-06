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
                <UserCard title="SMS" active={form.userType === 'guest'} icon={Icons.sms} setForm={setForm} value="guest" />
                <UserCard title="Email" active={form.userType === 'account'} icon={Icons.email} setForm={setForm} value="account" />
            </div>
        </>
    )
}
