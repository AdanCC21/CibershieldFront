import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { E_Pages } from '@/entities/enums'
import { useState, type ReactNode } from 'react'

interface Prompts {
    header?: boolean
    children: ReactNode
    footer?: boolean
}
export default function Layout({ children, header, footer }: Prompts) {
    const [curPage, setPage] = useState<E_Pages>(E_Pages.HOME);

    return (
        <>
            {header && <Header curPage={curPage} setPage={setPage} />}
            <div className='flex flex-col flex-1 h-full page-margin '>
                {children}
            </div>
            {footer && <Footer />}
        </>
    )
}
