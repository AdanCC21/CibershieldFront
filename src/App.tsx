import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { useState } from 'react'
import { E_Pages } from './entities/enums'

export default function App() {
  const [curPage, setPage] = useState<E_Pages>(E_Pages.HOME);

  return (
    <div>
      <Header curPage={curPage} setPage={setPage} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/testing' element={<Home />} />
        <Route path='/us' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}
