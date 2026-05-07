import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { E_Pages } from './entities/enums'
import Home from './pages/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Training from './pages/Training/Training'
import Info from './pages/Info/Info'
import { Toaster } from 'react-hot-toast'
import Exercises from './pages/Training/Exercises'

export default function App() {
  const [curPage, setPage] = useState<E_Pages>(E_Pages.HOME);

  return (
    <div className='flex flex-col w-screen min-h-screen'>
      <Toaster position='top-right' toastOptions={{ style: { background: 'var(--primary-color)', color:"white" } }} />
      <Header curPage={curPage} setPage={setPage} />
      <div className='flex flex-col flex-1 h-full page-margin '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/testing' element={<Training />} />
          <Route path='/info' element={<Info />} />
          <Route path='/testing/exercises' element={<Exercises/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
