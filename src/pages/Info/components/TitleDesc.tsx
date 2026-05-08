interface Prompts {
    title: string
    desc: string | string[]
    img?: string
}
export default function TitleDescription({ title, desc, img }: Prompts) {
    return (
        <div className='flex flex-col gap-2 h-fit'>
            <h3 className='text-xl'>{title}</h3>
            {typeof desc === 'string' ?
                <p className='text-base whitespace-pre-line'>{desc}</p>
                :
                <ul className="flex flex-col gap-2 w-full">
                    {desc.map(cur =>
                        <li className="list-disc list-inside text-sm">
                            {cur}
                        </li>
                    )}
                </ul>
            }
            {img &&
                <div className='flex max-w-1/2 overflow-hidden'>
                    <img src={img} alt='img' className='m-auto max-h-100' />
                </div>
            }
            <div className="h-px bg-[#0002] my-2 mx-4"></div>
        </div>
    )
}