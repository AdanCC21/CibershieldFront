import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { E_Pages } from '@/entities/enums'
import { useState, type ReactNode } from 'react'

interface Prompts {
    header?: boolean
    children: ReactNode
    footer?: boolean
    padding?: boolean
}
export default function Layout({ children, header, footer, padding = true }: Prompts) {
    const [curPage, setPage] = useState<E_Pages>(E_Pages.HOME);

    return (
        <div className='flex flex-col min-h-screen min-w-screen'>
            {header && <Header curPage={curPage} setPage={setPage} />}
            <div className={`flex flex-col flex-1 size-full ${padding && 'page-margin'} `}>
                {children}
            </div>
            {footer && <Footer />}
        </div>
    )
}
