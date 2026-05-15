import arrowRight from '@/assets/icons/arrow_right_prcol.svg'
import ServiceCard from '@/components/cards/ServiceCard'
import { showDown, showUpContainer, showUpLarge } from '@/constants/animations';
import { motion } from 'framer-motion';
import { useRef } from 'react'

export default function Home() {
  const servicesRef = useRef<HTMLElement>(null);
  return (
    <>
      <div className='flex flex-col w-full h-full gap-20 my-[2vh]'>
        <section className="flex w-full h-[85vh] justify-between items-center ">
          <motion.div variants={showUpContainer} initial="hidden" animate="show" className="flex flex-col w-fit gap-4">
            <motion.h1 variants={showDown} className="text-8xl text-(--primary-color) font-bold">Cibershield</motion.h1>

            <motion.p variants={showDown} className="text-2xl text-(--text-gray)">Tu escudo contra las amenazas digitales</motion.p>

            <motion.button variants={showDown} className="relative group flex gap-2 items-center justify-center w-fit border-(--primary-color) cursor-pointer"
              onClick={() => { console.log("desc") }}>
              <span className="text-base text-(--primary-color)" onClick={() => {
                if (servicesRef.current) {
                  window.scrollTo({ top: servicesRef.current.offsetTop * .8, behavior: 'smooth' })
                }
              }}>Descubre mas</span>
              <img src={arrowRight} alt='arrow' className='h-4' />
              <div className='absolute bottom-0 h-px bg-(--primary-color) w-3/4 group-hover:w-full transition-all ease-in-out duration-125'></div>
            </motion.button>
          </motion.div>

          <motion.img variants={showUpLarge} initial="hidden" animate="show"  src='/armadillo.webp' className='h-7/10' alt="logo" />
          <img src='/armadillo.webp' className='absolute right-0 top-0 translate-x-1/2 -translate-y-1/5 h-8/10 -z-1 opacity-20 -rotate-20' alt="logo fondo" />
        </section>

        <section ref={servicesRef} className='flex flex-col gap-4 h-[60vh]'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-4xl text-(--primary-color) font-medium'>Nuestros servicios</h2>
            <p className='text-base'>Tu escudo ante las amenazas digitales</p>
          </div>
          <ul className='flex gap-4 h-60'>
            <ServiceCard title='Malwares' desc='Descubre qué es el malware, cómo infecta tus dispositivos y cuáles son los tipos más peligrosos que existen hoy.' icon='/malware.webp' navigateTo='info/malware' />

            <ServiceCard title='Ingenieria Social' desc='Descubre cómo los atacantes manipulan emociones y confianza para obtener acceso a información confidencial. Aprende sus técnicas más usadas.' icon='/IngSocial.webp' navigateTo='info/phishing' />

            <ServiceCard title='Practicas' desc='Pon a prueba tus conocimientos con ejercicios interactivos que simulan situaciones reales. Aprende haciendo y fortalece tu defensa digital' icon='/phishing.webp' navigateTo='testing' />
          </ul>
        </section>

        <section className='flex flex-col gap-4 h-[60vh]'>
          <h2 className='text-4xl'>Sobre nosotros</h2>
          <section className='grid grid-cols-2 grid-rows-2 gap-4 h-8/10'>
            <ServiceCard cardClass=' justify-center' title='Nosotros somos' desc='Somos un grupo de desarrolladores a punto de egresar de la Universidad Autónoma de Baja California. Nos especializamos en desarrollo web con tecnologías modernas como React, Vue y Angular.' />

            <ServiceCard cardClass='row-span-2 justify-center' title='Propósito' desc='Esta página busca proporcionar información clara e importante sobre los posibles ataques que cualquier persona en internet puede sufrir, incluyendo ejercicios prácticos para reconocer phishing en correos y mensajes SMS.' />

            <ServiceCard cardClass='justify-center' title='¿Cómo hicimos esta página?' desc='Este proyecto es un rediseño completo, a cargo de Adán González, del proyecto original de Antonio Ramos. Antonio concibió la idea hace algunos años y para nuestro último proyecto escolar decidimos rediseñarlo como entregable final para dos materias.' />
          </section>
        </section>

      </div>
    </>
  )
}
