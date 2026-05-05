interface Prompts {
    title: string
    titleSize?: string
    titleClass?: string

    icon?: string
    iconRight?: boolean
    iconAlt?: string
    iconInvert?: boolean
    iconClass?: string

    onClick: () => void
    btnStyle: BtnStyle
    btnClass?: string
}

export type BtnStyle = 'fill' | 'outline';

export default function Button({ title, titleClass, titleSize, icon, iconAlt, iconClass, iconInvert, iconRight, onClick, btnStyle = 'fill', btnClass }: Prompts) {
    const btnFill = btnStyle === 'fill' ? 'bg-(--primary-color) text-white' : 'border border-(--primary-color)';
    return (
        <button className={`flex items-center justify-center ${btnFill} ${iconRight && 'flex-row-reverse'} ${btnClass} px-4 py-1 gap-2 cursor-pointer rounded-lg`} onClick={onClick}>
            {icon &&
                <img src={icon} alt={iconAlt ?? 'icono'} className={`${iconInvert && 'invert'} ${iconClass} h-4`} />
            }
            <span className={`${titleSize ?? 'text-base'} ${titleClass ?? ''}`}>{title}</span>
        </button>
    )
}
