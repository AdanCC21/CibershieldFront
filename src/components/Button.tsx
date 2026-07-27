import { tailwindcssDuration } from "@/constants/animations"

interface Prompts {
    title?: string
    titleSize?: string
    titleClass?: string

    icon?: string
    iconRight?: boolean
    iconAlt?: string
    iconInvert?: boolean
    iconClass?: string

    onClick: () => void
    btnStyle?: BtnStyle
    btnClass?: string
}

export type BtnStyle = 'fill' | 'outline' | 'default';

export default function Button({ title, titleClass, titleSize, icon, iconAlt, iconClass, iconInvert, iconRight, onClick, btnStyle = 'default', btnClass }: Prompts) {
    
    const switchStyles = () => {
        switch(btnStyle){
            case "fill":
                return `bg-(--primary-color) text-white hover:shadow-md hover:scale-105 ${tailwindcssDuration}`;
            case "outline":
                return `border border-(--primary-color) hover:bg-(--primary-color)/10 hover:scale-105 ${tailwindcssDuration}`;
            case "default":
                return `border border-black/40 hover:scale-105 ${tailwindcssDuration}`;
            default:
                return `border border-black/40 hover:scale-105 ${tailwindcssDuration}`;
        }
    }

    return (
        <button className={`flex items-center justify-center ${switchStyles()} ${iconRight && 'flex-row-reverse'} ${btnClass} px-4 py-1 gap-2 cursor-pointer rounded-lg`} onClick={onClick}>
            {icon &&
                <img src={icon} alt={iconAlt ?? 'icono'} className={`${iconInvert && 'invert'} ${iconClass} h-4`} />
            }
            {title &&
                <span className={`${titleSize ?? 'text-base'} ${titleClass ?? ''}`}>{title}</span>
            }
        </button>
    )
}
