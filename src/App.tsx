import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { E_Pages } from './entities/enums'
import Home from './pages/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Training from './pages/Training'
import Info from './pages/Info'

export default function App() {
  const [curPage, setPage] = useState<E_Pages>(E_Pages.HOME);

  return (
    <div>
      <Header curPage={curPage} setPage={setPage} />
      <div className='page-margin'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/testing' element={<Training />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
