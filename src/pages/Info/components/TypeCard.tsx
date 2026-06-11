import { tailwindcssDuration } from '@/constants/animations'
import type { InfoArticle } from '@/entities/virus'

interface Prompts {
    article: InfoArticle
    onClick:()=>void
}

export default function TypeCard({ article, onClick }: Prompts) {
    return (
        <li className={`group bg-white hover:bg-(--secundary-color) hover:text-white hover:scale-102 card-shadow rounded-lg ${tailwindcssDuration}`}>
            <button className="flex flex-col h-full text-start w-full px-4 py-2 cursor-pointer" onClick={onClick}>
                <div className="flex gap-2 items-center">
                    {article.icon &&
                        <img src={article.icon} className={`group-hover:invert h-4 w-fit ${tailwindcssDuration}`} alt="icon" />
                    }
                    <h5 className="font-semibold text-lg">{article.title}</h5>
                </div>
                {article.summary && (
                    <p className={`text-sm text-(--text-gray) group-hover:text-white/60 ${tailwindcssDuration}`}>{article.summary}</p>
                )}
            </button>
        </li>
    )
}
