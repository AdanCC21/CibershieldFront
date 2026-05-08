import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Training from './pages/Training/Training'
import Info from './pages/Info/Info'
import { Toaster } from 'react-hot-toast'
import Exercises from './pages/Training/Exercises'
import Layout from './pages/Layout'

export default function App() {

  return (
    <div className='flex flex-col w-screen min-h-screen'>
      <Toaster position='top-right' toastOptions={{ style: { background: 'var(--primary-color)', color: "white" } }} />
      <Routes>
        <Route path='/' element={
          <Layout header footer>
            <Home />
          </Layout>
        } />
        <Route path='/testing' element={
          <Layout header footer>
            <Training />
          </Layout>
        } />
        <Route path='/info' element={
          <Layout header footer>
            <Info />
          </Layout>
        } />
        <Route path='/testing/exercises' element={
          <Layout>
            <Exercises />
          </Layout>
        } />
      </Routes>
    </div>
  )
}
