import UserCard from '../components/UserCard'
import type { TrainingForm } from '@/entities/form.entity'
import invitado from '@/assets/icons/person.svg';
import type { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { showUp, showUpContainer } from '@/constants/animations';


interface Prompts {
    form: TrainingForm
    setForm: Dispatch<SetStateAction<TrainingForm>>
}
const guestExplain =
    "Al entrar como invitado, deberá ingresar datos ficticios en el próximo paso. Es decir, un nombre y correo inventados para las prácticas."

const accountExplain =
    "Al entrar con una cuenta, utilizará el nombre y correo con los que inició sesión."

export default function StUserType({ form, setForm }: Prompts) {

    return (
        <motion.div variants={showUpContainer} initial='hidden' animate='showShort'>
            <motion.div variants={showUp} className="flex flex-col gap-4">
                <h1 className="text-4xl">Tipo de usuario</h1>

                <span className="text-base">
                    Selecciona la forma en la cual vas a simular una práctica de phishing.
                </span>
            </motion.div>

            <motion.div variants={showUp} className="flex gap-4 my-4">
                <UserCard
                    title="Entrar como invitado"
                    active={form.userType === 'guest'}
                    icon={invitado}
                    atribute='userType'
                    setForm={setForm}
                    value="guest"
                />

                <UserCard
                    title="Entrar con cuenta"
                    active={form.userType === 'account'}
                    icon={invitado}
                    atribute='userType'
                    setForm={setForm}
                    value="account"
                />
            </motion.div>

            {form.userType &&
                <motion.span variants={showUp} className='text-base'>
                    {form.userType === 'guest' ? guestExplain : accountExplain}
                </motion.span>
            }
        </motion.div>
    )
}
