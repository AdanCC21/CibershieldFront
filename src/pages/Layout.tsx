import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { E_Pages } from '@/entities/enums'
import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface Prompts {
    header?: boolean
    headerPage?: E_Pages

    children: ReactNode

    footer?: boolean
    padding?: boolean
}
export default function Layout({ children, header, footer, padding = true, headerPage = E_Pages.HOME }: Prompts) {
    const [curPage, setPage] = useState<E_Pages>(headerPage);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('testing')) {
            setPage(E_Pages.TESTING)
            return
        }
        if (location.pathname.includes('info')) {
            setPage(E_Pages.INFO)
            return
        }
        setPage(E_Pages.HOME);
    }, [children])

    return (
        <div className='flex flex-col min-h-screen min-w-screen'>
            {header && <Header curPage={curPage} setPage={setPage} />}
            <div className={`flex flex-col flex-1 ${padding && 'page-margin'} `}>
                {children}
            </div>
            {footer && <Footer />}
        </div>
    )
}
