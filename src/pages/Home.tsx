import arrowRight from '@/assets/icons/arrow_right_prcol.svg'
import ServiceCard from '@/components/cards/ServiceCard'

export default function Home() {
  return (
    <div className='flex flex-col gap-20 my-[2vh]'>
      <section className="flex w-full h-[85vh] justify-between items-center ">
        <div className="flex flex-col w-fit gap-4">
          <h1 className="text-8xl text-(--primary-color) font-bold">Cibershield</h1>

          <p className="text-2xl text-(--text-gray)">Tu escudo contra las amenazas digitales</p>

          <button className="relative group flex gap-2 items-center justify-center w-fit border-(--primary-color) cursor-pointer"
            onClick={() => { console.log("desc") }}>
            <span className="text-base text-(--primary-color)">Descubre mas</span>
            <img src={arrowRight} alt='arrow' className='h-4' />
            <div className='absolute bottom-0 h-px bg-(--primary-color) w-3/4 group-hover:w-full transition-all ease-in-out duration-125'></div>
          </button>
        </div>

        <img src='/armadillo.webp' className='h-7/10' alt="logo" />
        <img src='/armadillo.webp' className='absolute right-0 top-0 translate-x-1/2 -translate-y-1/5 h-8/10 -z-1 opacity-20 -rotate-20' alt="logo" />
      </section>

      <section className='flex flex-col gap-4 h-[60vh]'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl text-(--primary-color) font-medium'>Nuestros servicios</h2>
          <p className='text-base'>Tu escudo ante las amenazas digitales</p>
        </div>
        <ul className='flex gap-4 h-60'>
          <ServiceCard title='Malware' desc='Descubre qué es el malware, cómo infecta tus dispositivos y cuáles son los tipos más peligrosos que existen hoy.' icon='/mg.webp' navigateTo='malware' />

          <ServiceCard title='Ingenieria Social' desc='Descubre cómo los atacantes manipulan emociones y confianza para obtener acceso a información confidencial. Aprende sus técnicas más usadas.' icon='/mg.webp' navigateTo='malware' />

          <ServiceCard title='Practicas' desc='Pon a prueba tus conocimientos con ejercicios interactivos que simulan situaciones reales. Aprende haciendo y fortalece tu defensa digital' icon='/mg.webp' navigateTo='malware' />
        </ul>
      </section>

      <section className='flex flex-col gap-4 h-[60vh]'>
        <h2 className='text-4xl'>Sobre nosotros</h2>
        <section className='grid grid-cols-2 grid-rows-2 gap-4 h-8/10'>
          <ServiceCard cardClass='row-span-2 justify-center' title='Nosotros somos' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' />
          <ServiceCard cardClass='justify-center' title='Nosotros somos' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' />
          <ServiceCard cardClass='justify-center' title='Nosotros somos' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' />
        </section>
      </section>
    </div>
  )
}
