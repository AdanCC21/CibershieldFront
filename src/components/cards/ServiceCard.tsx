import { tailwindcssDuration } from "@/constants/animations"

interface Prompts {
    title: string
    desc: string
    icon?: string
    navigateTo?: string

    cardClass?: string
    textClass?: string
}

export default function ServiceCard({ title, desc, icon, cardClass, textClass, navigateTo }: Prompts) {
    return (
        <div className={`${cardClass} flex flex-col justify-between p-4 gap-4 bg-[#fdfdfd] rounded-lg card-shadow w-full h-full`}>
            <div className="flex flex-col gap-4">
                <div className="flex w-full justify-between items-center">
                    <h3 className={`${textClass} text-2xl`}>{title}</h3>
                    {icon &&
                        <img src={icon} className="size-12" alt="icon" />
                    }
                </div>
                <p className="text-sm">{desc}</p>
            </div>
            {navigateTo &&
                <div className="flex justify-end">
                    <a href={navigateTo} className={`text-base border-b border-b-[#fff0] w-fit hover:text-(--primary-color) hover:border-b-(--primary-color) cursor-pointer ${tailwindcssDuration}`}>Leer mas</a>
                </div>
            }
        </div>
    )
}
