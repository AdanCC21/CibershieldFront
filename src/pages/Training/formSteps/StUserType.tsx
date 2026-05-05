import UserCard from '../components/UserCard'
import Button from '@/components/Button'
import { Icons } from '@/constants/icons'
import type { TrainingForm } from '@/entities/form.entity'
import invitado from '@/assets/icons/person.svg';
import type { Dispatch, SetStateAction } from 'react';

interface Prompts {
    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}

export default function StUserType({ form, setForm }: Prompts) {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-6xl">Tipo de usuario</h1>
                <span className="text-lg">Selecciona la forma en la cual vas a simular una practica de pishing</span>
            </div>

            <div className="flex gap-4">
                <UserCard title="Entrar como invitado" active={form.userType === 'guest'} icon={invitado} setForm={setForm} value="guest" />
                <UserCard title="Entrar con cuenta" active={form.userType === 'account'} icon={invitado} setForm={setForm} value="account" />
            </div>
        </>
    )
}
