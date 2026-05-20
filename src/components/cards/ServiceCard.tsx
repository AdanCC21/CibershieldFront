
interface Prompts {
    title: string
    desc: string
    icon?: string
    navigateTo?: string

    cardClass?: string
    textClass?: string
}

export default function ServiceCard({ title, desc, icon, textClass }: Prompts) {
    return (
        <>
            <div className="flex flex-col md:flex-row w-full justify-between items-center">
                <h3 className={`${textClass} text-2xl`}>{title}</h3>
                {icon &&
                    <img src={icon} className="size-12" alt="icon" />
                }
            </div>
            <p className="text-sm">{desc}</p>
        </>
    )
}
