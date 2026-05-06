import { tailwindcssDuration } from "@/constants/animations"
import { E_Pages } from "@/entities/enums"
import type { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"

interface Prompts {
  curPage: E_Pages
  setPage: Dispatch<SetStateAction<E_Pages>>
}

export default function Header({ curPage, setPage }: Prompts) {
  const navigator = useNavigate();

  const goTo = (href: string) => { navigator(href); }

  return (
    <header className="relative flex justify-between items-center gap-4 p-2 shadow-sm w-screen h-[6vh] px-[10vh] bg-white">
      <span className="text-lg text-(--primary-color) font-bold">Cibershield</span>

      <nav className="absolute bottom-1/2 right-1/2 translate-1/2 flex gap-4">
        <HeaderItem title="Inicio" active={curPage === E_Pages.HOME} page={E_Pages.HOME} setPage={setPage} href="/" goTo={goTo} />
        <HeaderItem title="Practicas" active={curPage === E_Pages.TESTING} page={E_Pages.TESTING} setPage={setPage} href="/testing" goTo={goTo} />
        <HeaderItem title="Info" active={curPage === E_Pages.INFO} page={E_Pages.INFO} setPage={setPage} href="/info" goTo={goTo} />
      </nav>

      <div className="flex gap-4">
        <button className="text-base">Registarse</button>
        <button className="text-base">Iniciar sesion</button>
      </div>
    </header>
  )
}

interface ItemPrompts {
  title: string
  active: boolean
  href: string
  page: E_Pages
  goTo: (route: string) => void
  setPage: Dispatch<SetStateAction<E_Pages>>
}
function HeaderItem({ title, goTo, href, active = false, page, setPage }: ItemPrompts) {
  return (
    <button className={`text-base border-b  hover:border-b-(--primary-color) hover:text-(--primary-color) ${active ? 'border-b-(--primary-color) text-(--primary-color)' : 'border-b-[#fff0]'} ${tailwindcssDuration} cursor-pointer`} onClick={() => { goTo(href); setPage(page) }}>
      {title}
    </button>
  )
}