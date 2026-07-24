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

  const [activeMalwareItem, setActiveMalwareItem] = useState<string | null>(null);

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
      <section className="flex flex-col-reverse lg:flex-row w-full min-h-[90vh] lg:min-h-[85vh] lg:h-[85vh] justify-center lg:justify-between items-center page-padding gap-4">
        <motion.div variants={showUpContainer} initial="hidden" animate="show" className="flex flex-col w-fit max-w-3/5 gap-4 items-center text-center lg:text-start lg:items-start">
          <motion.h3 variants={showDown} className="text-xl text-(--text-gray) uppercase tracking-wider font-semibold">Bienvenido a</motion.h3>
          <motion.h1 variants={showDown} className="text-4xl sm:text-6xl lg:text-8xl text-(--primary-color) font-bold border-b-4 border-b-(--primary-color)">Cibershield</motion.h1>

          <motion.p variants={showDown} className="text-base sm:text-xl text-(--text-gray)">Aquí aprenderás a como proteger tu privacidad en el mundo digital y a evitar exponerte a riesgos comunes que pueden costarte tu información personal</motion.p>
          {/* <motion.p variants={showDown} className="text-lg sm:text-xl lg:text-2xl text-(--text-gray)">Aprende a como proteger tu privacidad digital</motion.p> */}

          <motion.div variants={showDown} className='absolute flex bottom-1/10'>

            <Button title='Descubre Mas' icon={Icons.arrowRight} iconAlt='Arrow' iconInvert iconRight onClick={() => {
              if (malwareRef.current) {
                window.scrollTo({ top: malwareRef.current.offsetTop * .8, behavior: 'smooth' })
              }
            }} />
          </motion.div>
        </motion.div>

        <motion.img variants={showUpLarge} initial="hidden" animate="show" src='/armadillo.webp' className='h-[30vh] sm:h-[50vh] lg:h-7/10 w-fit drop-shadow-xl w-fit' alt="logo" />
      </section>

      <section className="flex flex-col min-h-[60vh] justify-center gap-8 page-padding bg-(--primary-color) text-white py-4" ref={malwareRef}>
        <div className="flex gap-2 items-center">
          <img src={Icons.error} alt='malware alert' className='h-8 invert' />
          <h3 className="text-3xl">Malware</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-4" >
          <div className='flex flex-col gap-4 flex-2'>
            <p className='text-base lg:text-lg'>El malware es cualquier software creado con fines maliciosos. Estas amenazas pueden afectar computadoras, teléfonos y otros dispositivos, poniendo en riesgo la información y la privacidad de los usuarios. En esta sección aprenderás a reconocer los tipos de malware más comunes, cómo se propagan y qué medidas puedes tomar para protegerte.</p>

            <span className='text-base lg:text-lg mt-auto'>Existen multiples <button className='underline cursor-pointer' onClick={() => {
              if (malwareTypes.current) {
                window.scrollTo({ top: malwareTypes.current.offsetTop * .8, behavior: 'smooth' })
              }
            }}>tipos de malwares</button></span>
          </div>

          <div className='flex-1 my-4'>
            <img src="/laptop_infected.webp" alt='laptop_infected' className='max-h-[60vh] w-fit object-cover' />
          </div>
        </div>
      </section>

      <section ref={malwareTypes} className='md:relative flex flex-col justify-center gap-4 min-h-[40vh] page-padding md:py-0 py-4'>
        <h2 className=" text-3xl font-bold text-center">Tipos de malware</h2>
        <ul className="flex flex-col md:flex-row gap-4 items-start">
          <MalwareItem title='Virus' img={Icons.skull} imgAlt='Virus' desc='Malware que se replica infectando archivos y programas.' active={activeMalwareItem === 'Virus'} onToggle={() => setActiveMalwareItem(prev => prev === 'Virus' ? null : 'Virus')} />
          <MalwareItem title='Troyano' img={Icons.troyan} imgAlt='troyano' desc='Malware que se disfraza de software legítimo para engañar al usuario y robar información o controlar el sistema.' active={activeMalwareItem === 'Troyano'} onToggle={() => setActiveMalwareItem(prev => prev === 'Troyano' ? null : 'Troyano')} />
          <MalwareItem title='Spyware' img={Icons.eye} imgAlt='Eye' desc='Malware que espía tus actividades, registra datos y los envía a terceros sin permiso.' active={activeMalwareItem === 'Spyware'} onToggle={() => setActiveMalwareItem(prev => prev === 'Spyware' ? null : 'Spyware')} />
        </ul>
        <span className='text-sm text-center'>Y muchos mas...</span>
      </section>

      <hr className='opacity-20 mx-auto w-[60vw]'/>

      <section className='flex flex-col gap-8 min-h-[60vh] justify-center page-padding'>
        <div className="flex gap-4 items-center ">
          <img src={Icons.phishing} alt='Phishing' className='h-16 w-fit' />
          <h2 className='text-5xl font-semibold'>Phishing</h2>
        </div>

        <article className='flex flex-col md:flex-row gap-8'>
          <div className='flex flex-col flex-2 gap-4'>
            <p className='text-lg mb-2'>El phsihign es un método de ataque o engaño que busca obtener información sensible haciéndose pasar por alguien o algo de confianza.</p>
            <div className="flex items-center gap-4">
              <p className='text-lg'>Existen varios tipos de phishing</p>
              <img src={Icons.arrowRight} alt='arrow right' className='h-4 rotate-90 md:rotate-0' />
            </div>
          </div>

          <ul className='flex-3 grid grid-cols-2 lg:grid-cols-3 gap-4 self-center'>
            {(typeof PhishingTypes.content !== 'string' && PhishingTypes.content.every(cur => typeof cur !== 'string')) && PhishingTypes.content.map((article) => <TypeCard article={article} onClick={() => { openModal(article) }} />)}
          </ul>
        </article>
      </section>

      <hr className='opacity-20 mx-auto w-[60vw]'/>

      <section className='flex flex-col text-center md:text-start md:flex-row page-padding py-[6vh] gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <h2 className='text-5xl font-semibold'>Ejercicios de Phishing</h2>
          <p className='text-lg'>Los ejercicios de phishing son correos electrónicos o SMS cotidianos, similares a los que cualquier persona podría recibir en su día a día. En este caso, presentamos mensajes que pueden pueden o no tratarse de un intento de phishing.
          </p>
          <br/>
          <p className='text-lg'>Tu trabajo aqui es leer cuidadosamente la información del correo o mensaje, y en base a los detalles deberas de decidir si el correo es veridico o un intento de phishing.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center flex-1'>
          <img src="remove.png" className='max-h-[50vh] w-fit rounded-lg' />
          <p className='text-lg font-medium my-4'>Tu trabajo es identificar cuáles son reales y cuáles son falsos</p>

          <div className="flex gap-8 justify-center items-center ">
            <button title="Es un mensaje legitimo" className={`group flex items-center gap-2 px-3 py-1 border-t-3 border-green-600 hover:border-green-300 bg-green-400 hover:bg-green-600 rounded-lg cursor-pointer shadow-md ${tailwindcssDuration}`}
              onClick={() => { toast.error("Ohh.. lo siento, es un caso de phishing. 😿. Mira bien la dirección de correo del remitente", { duration: 5000 }) }}>
              <span className="text-base font-medium ">No es phishing</span>
              <img src={Icons.check} alt="wrong" className="h-5" />
            </button>

            <button title="Es un mensaje falso" className={`flex items-center gap-2 px-3 py-1 border-t-3 border-red-600 hover:border-red-300 bg-red-500 hover:bg-red-700 rounded-lg cursor-pointer shadow-md ${tailwindcssDuration}`}
              onClick={() => { toast.success("Correcto, es un caso de phishing 😺. El remitente utiliza una doble T en su correo, la falta de ortografía es un patrón común entre los intentos de phishing.", { duration: 10000 }) }}>
              <span className="text-base font-medium text-white">Es phishing</span>
              <img src={Icons.warning} alt="check" className="invert h-5" />
            </button>
          </div>
        </div>
      </section>
      
      <hr className='opacity-20 mx-auto w-[60vw]'/>

      <section className='flex flex-col gap-8 page-padding py-[6vh]'>
        <article className='flex flex-col md:flex-row gap-8'>
          <div className='flex flex-2 flex-col gap-8'>
            <div className="flex gap-4 items-center">
              <img src="armadillo.webp" className='h-8' />
              <h2 className='text-4xl font-bold'>Comencemos</h2>
            </div>
            <p className='text-lg'>La web puede ser un lugar peligroso repleto de personas con intenciones malas. Lamentablemente, ninguno estamos exentos de ser hackeados o estafados. Cada día, millones de usuarios son víctimas de ciberataques, pérdida de datos personales y robo de identidad.</p>

            <p className='text-lg  '>Tu privacidad digital es muy importante. No esperes a ser hackeado para comenzar a tener mejores hábitos de seguridad dentro de la web. La mejor defensa es la educación y la prevención.</p>

            <p className='text-lg  '>Te enseñaremos a identificar los peligros más comunes como el phishing, malware y otros ataques. Aprenderás a reconocer señales de alerta, proteger tus datos y navegar de forma segura.</p>
          </div>

          <div className='flex flex-1'>
            <img src="/happyLap.webp" className=' max-h-[60vh] w-fit object-contain' />
          </div>
        </article>

        <div className="flex flex-col gap-2 text-center items-center md:mt-20">
          <Button  title="Comienza tus practicas" icon={Icons.arrowRight} iconAlt='arrow right' iconRight iconInvert onClick={() => { navigator('/training') }} btnClass='w-fit' />

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
  active?: boolean
  onToggle?: () => void
}
function MalwareItem({ title, desc, img, imgAlt, active = false, onToggle }: Prompts) {
  return (
    <li className={`flex flex-col flex-1 w-full justify-center items-center text-center rounded-xl border border-white/20 bg-white/10 md:bg-white/0 md:border-0 p-4 shadow-sm md:shadow-none ${tailwindcssDuration}`}>
      <button type='button' onClick={onToggle} className='flex flex-col items-center gap-3 w-full'>
        <img src={img} alt={imgAlt} className='h-20 w-fit mb-2' />
        <h3 className="text-lg font-semibold">{title}</h3>
      </button>
      <p className="hidden md:block max-h-40 text-sm">
        {desc}
      </p>
      <p className={`md:hidden text-sm transition-all duration-200 overflow-hidden ${active ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
        {desc}
      </p>
    </li>
  )
}
