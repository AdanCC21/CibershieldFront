import InputLabel from '@/components/form/InputLabel'
import type { AuthForm } from '@/dto/authform.dto'

interface Prompts {
  form: AuthForm,
  handleForm: (e: any) => void
}

export default function Login({ form, handleForm }: Prompts) {

  return (
    <form className='flex flex-col gap-4'>
      <InputLabel label='Correo' value={form.email} atribute='email' handleForm={handleForm} placeHolder='adan@gmail.com'/>
      <InputLabel label='Contraseña' value={form.password} atribute='password' handleForm={handleForm} placeHolder='ContraSegu_1$8#' />
    </form>
  )
}
