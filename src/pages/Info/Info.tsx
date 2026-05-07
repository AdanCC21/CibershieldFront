export default function Info() {
    return (
        <div className='flex'>
            <nav className='flex-1 flex flex-col border-r border-[#fff2]'>
                <h3 className="text-lg">Pishing</h3>
                
                <div className="h-px bg-[#0002] my-2 mx-4"></div>
                
                <ul className="flex flex-col gap-2 list-disc list-inside">
                    <li className="text-sm">
                        <a className="hover:underline cursor-pointer">¿Que es pishing?</a>
                    </li>
                    <li className="text-sm">
                        <a>Como nos afecta</a>
                    </li>
                    <li className="text-sm">
                        <a>Como evitarlo</a>
                    </li>
                    <li className="text-sm">
                        <a>Estadisticas</a>
                    </li>
                </ul>
            </nav>
            <main className='flex-3 flex flex-col p-2 gap-2'>
                <h1 className='text-2xl'>Pishing</h1>
                                <div className="h-px bg-[#0002] my-2 mx-4"></div>

                <TitleDescription title='¿Que es pishing?' desc='El phishing es una técnica de fraude utilizada por ciberdelincuentes para engañar a las personas y obtener información confidencial como contraseñas, números de tarjetas de crédito o credenciales bancarias. \n Este tipo de ataque se realiza haciéndose pasar por entidades legítimas a través de correos electrónicos, mensajes SMS o incluso llamadas telefónicas. Es uno de los métodos más comunes de ingeniería social, y su éxito depende en gran medida de la capacidad del atacante para ganarse la confianza de la víctima.' />
            </main>
        </div>
    )
}

interface Prompts {
    title: string
    desc: string
    img?: string
}
function TitleDescription({ title, desc, img }: Prompts) {
    return (
        <div className='flex flex-col gap-2 h-fit'>
            <h3 className='text-xl'>{title}</h3>
            <p className='text-base whitespace-pre-line'>{desc}</p>
            {img &&
                <div className='flex max-w-1/2 overflow-hidden'>
                    <img src={img} alt='img' className='m-auto max-h-100' />
                </div>
            }
        </div>
    )
}