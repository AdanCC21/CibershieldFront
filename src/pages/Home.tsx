import arrowRight from '@/assets/icons/arrow_right_prcol.svg'
import { showDown, showUpContainer, showUpLarge, tailwindcssDuration } from '@/constants/animations';
import { Icons } from '@/constants/icons';
import { motion } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react'
import TypeCard from './Info/components/TypeCard';
import type { InfoArticle } from '@/entities/virus';
import { PhishingTypes } from '@/constants/phishing';
import type { ModalData } from '@/components/modal/GenModal';
import GenModal from '@/components/modal/GenModal';
import toast from 'react-hot-toast';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const malwareRef = useRef<HTMLElement>(null);
  const malwareTypes = useRef<HTMLElement>(null);
  const navigator = useNavigate()
  const [modalActive, showModal] = useState(false);
  const [curModalChild, setModChild] = useState<{ children: ReactNode } & ModalData | null>(null);

  const openModal = (data: InfoArticle) => {
    showModal(true);
    if (typeof data.content === 'string') {
      setModChild({
        id: data.id,
        icon: data.icon,
        title: data.title,
        children: data.content
      })
    }
  }

  return (
    <div className='flex flex-col w-full h-full gap-20 my-[2vh]'>
      <section className="flex w-full h-[85vh] justify-between items-center page-padding">
        <motion.div variants={showUpContainer} initial="hidden" animate="show" className="flex flex-col w-fit gap-4">
          <motion.h1 variants={showDown} className="text-8xl text-(--primary-color) font-bold">Cibershield</motion.h1>

          <motion.p variants={showDown} className="text-2xl text-(--text-gray)">Aprende a como proteger tu privacidad digital</motion.p>

          <motion.button variants={showDown} className="relative group flex gap-2 items-center justify-center w-fit border-(--primary-color) cursor-pointer"
            onClick={() => {
              if (malwareRef.current) {
                window.scrollTo({ top: malwareRef.current.offsetTop * .8, behavior: 'smooth' })
              }
            }}>
            <span className="text-base text-(--primary-color)" >Descubre más</span>
            <img src={arrowRight} alt='arrow' className='h-4' />
            <div className='absolute bottom-0 h-px bg-(--primary-color) w-3/4 group-hover:w-full transition-all ease-in-out duration-125'></div>
          </motion.button>
        </motion.div>

        <motion.img variants={showUpLarge} initial="hidden" animate="show" src='/armadillo.webp' className='h-7/10 drop-shadow-xl' alt="logo" />
        <img src='/armadillo.webp' className='absolute right-0 top-0 translate-x-1/2 -translate-y-1/5 h-4/10 -z-1 opacity-20 -rotate-20' alt="logo fondo" />
      </section>

      <section className="flex flex-col h-[60vh] justify-center gap-8 page-padding" ref={malwareRef}>
        <div className="flex gap-2 items-center">
          <img src={Icons.error} alt='malware alert' className='h-8' />
          <h3 className="text-3xl">Malware</h3>
        </div>

        <div className="flex gap-4" >
          <div className='flex flex-col gap-4 flex-2'>
            <p className='text-base'>El malware es cualquier software creado con fines maliciosos. Estas amenazas pueden afectar computadoras, teléfonos y otros dispositivos, poniendo en riesgo la información y la privacidad de los usuarios. En esta sección aprenderás a reconocer los tipos de malware más comunes, cómo se propagan y qué medidas puedes tomar para protegerte.</p>

            <span>Existen multiples <button className='underline cursor-pointer' onClick={() => {
              if (malwareTypes.current) {
                window.scrollTo({ top: malwareTypes.current.offsetTop * .8, behavior: 'smooth' })
              }
            }}>tipos de malwares</button></span>
          </div>

          <div className='flex-1'>
            <img src="/laptop_infected.webp" alt='laptop_infected' className='max-h-[60vh] w-fit object-cover' />
          </div>
        </div>
      </section>

      <section ref={malwareTypes} className='relative flex flex-col justify-center gap-4 h-[60vh] bg-(--primary-color) page-padding text-white'>
        <h2 className="absolute top-1/10 right-1/2 translate-x-1/2 text-3xl font-bold text-center">Tipos de malware</h2>
        <ul className="flex gap-8 items-start">
          <MalwareItem title='Virus' img={Icons.skull} imgAlt='Virus' desc='Malware que se replica infectando archivos y programas.' />
          <MalwareItem title='Troyano' img={Icons.troyan} imgAlt='troyano' desc='Malware que se disfraza de software legítimo para engañar al usuario y robar información o controlar el sistema.' />
          <MalwareItem title='Spyware' img={Icons.eye} imgAlt='Eye' desc='Malware que espía tus actividades, registra datos y los envía a terceros sin permiso.' />
        </ul>
        <span className='absolute bottom-1/10 right-1/2 translate-x-1/2 text-sm'>Y muchos mas...</span>
      </section>

      <section className='flex flex-col gap-8 h-[60vh] justify-center page-padding my-[6vh]'>
        <div className="flex gap-4 items-center ">
          <img src={Icons.phishing} alt='Phishing' className='h-16 w-fit' />
          <h2 className='text-5xl font-semibold'>Phishing</h2>
        </div>

        <article className='flex gap-8'>
          <div className='flex flex-col flex-2 gap-4'>
            <p className='text-lg mb-2'>El phsihign es un método de ataque o engaño que busca obtener información sensible haciéndose pasar por alguien o algo de confianza.</p>
            <div className="flex items-center gap-4">
              <p className='text-lg'>Existen varios tipos de phishing</p>
              <img src={Icons.arrowRight} alt='arrow right' className='h-4' />
            </div>
          </div>

          <ul className='flex-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 self-center'>
            {(typeof PhishingTypes.content !== 'string' && PhishingTypes.content.every(cur => typeof cur !== 'string')) && PhishingTypes.content.map((article) => <TypeCard article={article} onClick={() => { openModal(article) }} />)}
          </ul>
        </article>
      </section>

      <section className='flex flex-col items-center bg-(--primary-color) text-white page-padding py-[6vh] gap-4 text-center'>
        <h2 className='text-3xl font-semibold'>Ejercicios de Phishing</h2>
        <p className='text-base max-w-3/4'>Los ejercicios de phishing son correos electrónicos o SMS cotidianos, similares a los que cualquier persona podría recibir en su día a día. En este caso, presentamos mensajes que pueden pueden o no tratarse de un intento de phishing.
        </p>

        <img src="remove.png" className='max-h-[50vh] w-fit rounded-lg' />

        <p className='text-lg font-medium'>Tu trabajo es identificar cuáles son reales y cuáles son falsos</p>

        <div className="flex gap-8 justify-center items-center">
          <button title="Es un mensaje legitimo" className={`group flex items-center gap-2 px-3 py-1 border-t-3 border-green-600 hover:border-green-300 bg-green-400 hover:bg-green-600 rounded-lg cursor-pointer shadow-md ${tailwindcssDuration}`}
            onClick={() => { toast.error("Ohh.. lo siento, es un caso de phishing. 😿. Mira bien la dirección de correo del remitente", { duration: 5000 }) }}>
            <span className="text-base font-medium">No es phishing</span>
            <img src={Icons.check} alt="wrong" className="h-5 invert" />
          </button>

          <button title="Es un mensaje falso" className={`flex items-center gap-2 px-3 py-1 border-t-3 border-red-600 hover:border-red-300 bg-red-500 hover:bg-red-700 rounded-lg cursor-pointer shadow-md ${tailwindcssDuration}`}
            onClick={() => { toast.success("Correcto, es un caso de phishing 😺. El remitente utiliza una doble T en su correo, la falta de ortografía es un patrón común entre los intentos de phishing.", { duration: 10000 }) }}>
            <span className="text-base font-medium">Es phishing</span>
            <img src={Icons.warning} alt="check" className="invert h-5" />
          </button>
        </div>
      </section>

      <section className='flex flex-col gap-8 page-padding py-[6vh]'>
        <article className='flex gap-8'>
          <div className='flex flex-2 flex-col gap-8'>
            <div className="flex gap-4 items-center">
              <img src="armadillo.webp" className='h-8' />
              <h2 className='text-4xl font-bold'>Comencemos</h2>
            </div>
            <p className='text-lg'>La web puede ser un lugar peligroso repleto de personas con intenciones malas. Lamentablemente, ninguno estamos exentos de ser hackeados o estafados. Cada día, millones de usuarios son víctimas de ciberataques, pérdida de datos personales y robo de identidad.</p>

            <p className='text-lg  '>Tu privacidad digital es muy importante. No esperes a ser hackeado para comenzar a tener mejores hábitos de seguridad dentro de la web. La mejor defensa es la educación y la prevención.</p>

            <p className='text-lg  '>Te enseñaremos a identificar los peligros más comunes como el phishing, malware y otros ataques. Aprenderás a reconocer señales de alerta, proteger tus datos y navegar de forma segura.</p>

            <p className='text-base   italic'>Recuerda: tu seguridad digital no es algo que pueda esperar. Hoy es el día perfecto para aprender y protegerte.</p>
          </div>

          <div className='flex flex-1'>
            <img src="/happyLap.webp" className=' max-h-[60vh] w-fit object-contain' />
          </div>
        </article>

        <div className="flex flex-col gap-2 text-end items-end mt-4 ml-auto">
          <Button title="Comienza tus practicas" icon={Icons.arrowRight} iconAlt='arrow right' iconRight iconInvert onClick={() => { navigator('/training') }} btnClass='w-fit' />

          <p className='text-sm text-(--text-gray)'>O continúa explorando la <a className={`underline hover:text-(--primary-color) ${tailwindcssDuration}`} href='/info'>información sobre malware y phishing</a></p>
        </div>
      </section>

      {curModalChild && curModalChild.children &&
        <GenModal key={curModalChild.id} active={modalActive} setActive={showModal} item={curModalChild} headerStyle="primary">
          <main>
            {curModalChild.children}
          </main>
        </GenModal>
      }
    </div>
  )
}

interface Prompts {
  title: string,
  desc: string

  img: string
  imgAlt: string
}
function MalwareItem({ title, desc, img, imgAlt }: Prompts) {
  return (
    <li className='flex flex-col flex-1 justify-center items-center text-center '>
      <img src={img} alt={imgAlt} className='h-20 w-fit invert mb-4' />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{desc}</p>
    </li>
  )
}
