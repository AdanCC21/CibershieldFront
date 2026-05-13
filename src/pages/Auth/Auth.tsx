import { useState, type Dispatch, type SetStateAction } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Button from "@/components/Button";
import { showUp, tailwindcssDuration } from "@/constants/animations";
import type { AuthAction, AuthForm } from "@/dto/authform.dto";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

export default function Auth() {
    const navigator = useNavigate();
    const [curAction, setAction] = useState<AuthAction>('login');
    const [form, setForm] = useState<AuthForm>({ typeAuth: 'login', email: "", password: "" })

    const handleForm = (e: any) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const start = () => {
        if (!form.email.trim()) return toast.error("Es necesario especificar el correo.");
        if (!form.password.trim()) return toast.error("Contraseña invalida.");

        if (form.typeAuth === 'register') {
            if (!form.name?.trim()) return toast.error("Nombre invalido.");
            if (form.confirmPassword !== form.password) return toast.error("La contraseña no coincide con la confirmacion de contraseña");
        }
        sessionStorage.setItem('user', JSON.stringify(form));

        toast.success("Bienvenido");
        navigator('/')
    }

    return (
        <div className='flex flex-col flex-1 bg-[#fafafa] items-center justify-center z-0'>
            <img src='/armadillo.webp' className='absolute right-0 top-0 translate-x-1/2 -translate-y-1/5 h-8/10 z-1 opacity-20 -rotate-20' alt="logo" />

            <AnimatePresence mode="wait">
                <motion.section key={curAction} variants={showUp} initial='hidden' animate="show" exit="exit" className='flex flex-col w-[30vw] min-h-[70vh] justify-between p-4 bg-white card-shadow rounded-lg'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-semibold'>Cibershield</h1>
                        <span className='text-lg'>{curAction === 'login' ? 'Iniciar Sesion' : 'Registro'}</span>
                    </div>

                    <div className="flex flex-col gap-4 my-12">
                        {curAction === 'login' ?
                            <Login form={form} handleForm={handleForm} />
                            :
                            <Register form={form} handleForm={handleForm} />
                        }
                        <ToggleAction authAction={curAction} setAction={setAction} />
                    </div>
                    <div className="flex gap-2 justify-end">
                        <Button title={'Continuar sin cuenta'} onClick={() => {
                            navigator('/');
                        }} btnStyle="outline" />

                        <Button title={curAction === 'login' ? 'Iniciar Sesion' : 'Registrarse'} onClick={() => {
                            start();
                        }} btnStyle="fill" />
                    </div>
                </motion.section>
            </AnimatePresence>
        </div>
    )
}

interface TogPrompts {
    authAction: AuthAction
    setAction: Dispatch<SetStateAction<AuthAction>>
}
function ToggleAction({ authAction, setAction }: TogPrompts) {
    const spMsg = authAction !== 'login' ? '¿Ya tienes cuenta con nosotros?' : '¿No tienes cuenta?';
    const btnMsg = authAction !== 'login' ? 'Inicia Sesion' : 'Registrate';

    return (
        <div className="flex gap-2 items-center justify-center text-sm">
            <span>{spMsg}</span>
            <button
                className={`border-b border-b-[#0000] hover:text-(--secundary-color) hover:border-b-(--secundary-color) ${tailwindcssDuration} cursor-pointer`}
                onClick={() => { setAction(prev => prev === 'login' ? 'register' : 'login') }}>{btnMsg}
            </button>
        </div>
    )
}