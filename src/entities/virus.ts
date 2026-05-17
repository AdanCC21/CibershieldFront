import type { ReactNode } from "react"

export interface VirusSection {
    title: string
    sections: { navTitle: string, content: InfoArticle }[]
}

export interface InfoArticle {
    id: number
    icon?: string,
    title: string
    content: string | string[] | InfoArticle[]
    summary?: string

    img?: string
    child?: ReactNode
}