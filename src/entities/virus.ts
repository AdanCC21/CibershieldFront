export interface VirusSection {
    title: string
    sections: { navTitle: string, content: InfoArticle }[]
}

export interface InfoArticle {
    id: number
    title: string
    content: string | string[]
    img?:string
}