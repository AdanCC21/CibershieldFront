import InputLabel from "@/components/form/InputLabel";
import type { AuthForm } from "@/dto/authform.dto";

interface Prompts {
  form: AuthForm,
  handleForm: (e: any) => void
}
export default function Register({ form, handleForm }: Prompts) {
  return (
    <form className='flex flex-col gap-4 '>
      <InputLabel label='Nombre' value={form.name} atribute='name' handleForm={handleForm} placeHolder="Antonio Ramos"/>
      
      <InputLabel label='Correo' value={form.email} atribute='email' inpType="email"  handleForm={handleForm}  placeHolder="antonio@gmail.com"/>
      
      <InputLabel label='Contraseña' value={form.password} atribute='password' inpType="password" handleForm={handleForm} placeHolder="PasSec#_2$"/>
      <InputLabel label='Confirmar contraseña' value={form.confirmPassword} inpType="password" atribute='confirmPassword' handleForm={handleForm} placeHolder="PasSec#_2$" />
    </form>
  )
}
