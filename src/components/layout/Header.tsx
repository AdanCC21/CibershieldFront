import { tailwindcssDuration } from "@/constants/animations"
import { Icons } from "@/constants/icons"
// import type { AuthForm } from "@/dto/authform.dto"
import { E_Pages } from "@/entities/enums"
import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
// import Button from "../Button"

interface Prompts {
  curPage: E_Pages
  setPage: Dispatch<SetStateAction<E_Pages>>
}

export default function Header({ curPage, setPage }: Prompts) {
  const navigator = useNavigate();

  // const [user, setUser] = useState<AuthForm | null>(null);
  // const [userModal, showUser] = useState(false);

  const [viewMenu, showMenu] = useState<boolean>(false)

  useEffect(() => {
    const loadUser = async () => {
      const usRaw = sessionStorage.getItem('user');
      if (!usRaw) return;

      const us = JSON.parse(usRaw);
      if (!us) return;

      // setUser(us);
    }
    loadUser();
  }, [])

  useEffect(() => {
    if (viewMenu) {
      document.documentElement.style.overflowY = "hidden"
    } else {
      document.documentElement.style.overflowY = ""
    }

    return () => { document.documentElement.style.overflowY = "" }
  }, [viewMenu])

  const goTo = (href: string) => { navigator(href); showMenu(false); }

  // const logOut = () => {
  //   sessionStorage.removeItem('user');
  //   navigator('/auth');
  // }

  const headerItems = () => (
    <>
      <HeaderItem title={E_Pages.HOME} active={curPage === E_Pages.HOME} page={E_Pages.HOME} setPage={setPage} href="/" goTo={goTo} />
      <HeaderItem title={E_Pages.INFO} active={curPage === E_Pages.INFO} page={E_Pages.INFO} setPage={setPage} href="/info/phishing" goTo={goTo} />
      <HeaderItem title={E_Pages.TESTING} active={curPage === E_Pages.TESTING} page={E_Pages.TESTING} setPage={setPage} href="/training" goTo={goTo} />
    </>
  )

  return (
    <>
      {viewMenu &&
        <div className="fixed inset-0 bg-black/60 z-20" onClick={() => { showMenu(false) }}>
        </div>
      }
      
      <header className="sticky top-0 left-0 flex justify-between items-center gap-4 p-2 shadow-sm w-screen h-[6vh] page-padding bg-white z-100">

        <button className="block lg:hidden" onClick={() => { showMenu(prev => !prev); }}>
          <img src={!viewMenu ? Icons.menu : Icons.close} alt="menu" className="h-6" />
        </button>

        {viewMenu &&
          <>
            <nav className="absolute left-0 bottom-0 translate-y-[102%] flex flex-col gap-4 w-[80vw] max-h-[40vh] page-margin px-10 py-4 bg-white border-b-4 border-(--primary-color) shadow-sm rounded-xl z-102">
              <button className="w-fit cursor-pointer" onClick={() => { navigator('/') }}>
                <span className="text-(--primary-color) text-4xl font-bold">Cibershield</span>
              </button>

              <ul className="flex flex-col gap-4 list-none text-start justify-start w-fit">
                {headerItems()}
              </ul>
            </nav>
          </>
        }

        <button className="hidden lg:block text-2xl text-(--primary-color) font-bold cursor-pointer" onClick={() => { navigator('/') }}>Cibershield</button>

        <nav className="hidden lg:flex absolute bottom-1/2 right-1/2 translate-1/2 gap-4">
          {headerItems()}
        </nav>

        {/* <div className="hidden lg:flex gap-4 items-center">
          {!user ?
            <>
              <Button title="Iniciar sesión" onClick={() => { navigator('/auth') }} btnStyle="outline" icon={Icons.person} iconAlt="person" iconRight />
            </>
            :
            <div className="relative">
              <button className=" cursor-pointer flex gap-2 items-center" onClick={() => { showUser(prev => !prev) }}>
                <img src={Icons.person} className="h-4" alt="person" />
                <span className="text-sm">{user.name}</span>
              </button>
              {user &&
                <UserDropDown user={user} active={userModal} setActive={showUser} logOut={logOut} />
              }
            </div>
          }
        </div> */}
      </header>
    </>
  )
}

// interface UsPrompts {
//   user: AuthForm
//   logOut: () => void
//   active: boolean
//   setActive: Dispatch<SetStateAction<boolean>>
// }
// function UserDropDown({ user, active, setActive, logOut }: UsPrompts) {
//   if (!active) return

//   return (
//     <div className="absolute bottom-0 left-0 -translate-x-full translate-y-full flex flex-col text-start min-w-100 bg-white text-sm card-shadow rounded-lg z-10">

//       <main className="flex flex-col gap-2 p-4">
//         <span>Nombre : {user.name}</span>
//         <div className="h-px bg-[#0002] mx-4"></div>
//         <span>Correo :  {user.email}</span>
//       </main>

//       <footer className="flex justify-end items-center bg-(--secundary-color) px-2 py-1 rounded-b-lg">
//         <button className="flex gap-2 items-center cursor-pointer w-fit h-fit" onClick={() => { logOut(); setActive(false) }}>
//           <span className="text-white text-sm">Cerrar sesión</span>
//           <img src={Icons.logOut} className="h-4 invert" alt="logout" />
//         </button>
//       </footer>
//     </div>
//   )
// }

interface ItemPrompts {
  title: E_Pages
  active: boolean
  href: string
  page: E_Pages
  goTo: (route: string) => void
  setPage: Dispatch<SetStateAction<E_Pages>>
}
function HeaderItem({ title, goTo, href, active = false, page, setPage }: ItemPrompts) {
  return (
    <button className={`w-fit text-start text-lg lg:text-base border-b  hover:border-b-(--primary-color) hover:text-(--primary-color) ${active ? 'border-b-(--primary-color) text-(--primary-color) font-semibold text-xl' : 'border-b-0'} ${tailwindcssDuration} cursor-pointer`} onClick={() => { goTo(href); setPage(page) }}>
      {title}
    </button>
  )
}