interface Prompts {
    title: string
    owner: string
    active: boolean
}
export default function ExerciseItem({ title, owner, active }: Prompts) {
    return (
        <li className={`flex gap-2 items-center overflow-hidden ${active && 'bg-black/3 shadow-sm rounded-lg p-2'}`}>
            <div className={`flex flex-col w-full `}>
                <span className={`text-base truncate ${active && 'font-bold'}`}>
                    {active && '- '}
                    {title}
                </span>
                <span className={`text-xs text-(--text-gray) truncate`}>{owner}</span>
            </div>

        </li>
    )
}