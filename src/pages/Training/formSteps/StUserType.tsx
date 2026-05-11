import UserCard from '../components/UserCard'
import type { TrainingForm } from '@/entities/form.entity'
import invitado from '@/assets/icons/person.svg';
import type { Dispatch, SetStateAction } from 'react';


interface Prompts {
    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}
const guestExplain = "El entrar como invitado debera de ingresar datos ficticios en el proximo paso. Es decir, un nombre y correo inventado para las practicas.";
const accountExplain = "Al entrar con cuenta entraras con el nombre y correo con el que iniciaste sesion.";

export default function StUserType({ form, setForm }: Prompts) {
    
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">Tipo de usuario</h1>
                <span className="text-lg">Selecciona la forma en la cual vas a simular una practica de pishing</span>
            </div>

            <div className="flex gap-4">
                <UserCard title="Entrar como invitado" active={form.userType === 'guest'} icon={invitado} atribute='userType' setForm={setForm} value="guest" />
                <UserCard title="Entrar con cuenta" active={form.userType === 'account'} icon={invitado} atribute='userType' setForm={setForm} value="account" />
            </div>

            {form.userType &&
                <span className='text-base'>{form.userType === 'guest' ? guestExplain : accountExplain}</span>
            }
        </>
    )
}
