import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Training from './pages/Training/Training'
import Info from './pages/Info/Info'
import { Toaster } from 'react-hot-toast'
import Exercises from './pages/Training/Exercises'
import Layout from './pages/Layout'
import Auth from './pages/Auth/Auth'
import { E_Pages } from './entities/enums'

export default function App() {

  return (
    <>
      <Toaster position='top-right' toastOptions={{ style: { background: 'var(--primary-color)', color: "white" } }} />
      <Routes>
        <Route path='/auth' element={
          <Layout padding={false}>
            <Auth />
          </Layout>
        } />
        <Route path='/' element={
          <Layout header footer>
            <Home />
          </Layout>
        } />
        <Route path='/testing' element={
          <Layout header footer headerPage={E_Pages.TESTING}>
            <Training />
          </Layout>
        } />
        <Route path='/info/:vir' element={
          <Layout header footer headerPage={E_Pages.INFO}>
            <Info />
          </Layout>
        } />
        <Route path='/testing/exercises' element={
          <Layout header footer padding={false} headerPage={E_Pages.TESTING}>
            <Exercises />
          </Layout>
        } />
      </Routes>
    </>
  )
}
