import { tailwindcssDuration } from "@/constants/animations"
import { NavLink } from "react-router-dom"

interface Prompts {
    href: string
    label: string

    labelSize?: string
    icon?: string,
    iconSize?: string
    iconAlt?: string
    iconClass?: string
}

export default function Link({ label, href, labelSize, icon, iconSize, iconAlt, iconClass }: Prompts) {
    return (
        <NavLink to={href} className={`flex items-center gap-2 ${labelSize ?? 'text-base'} border-b border-b-black/0 w-fit, hover:border-b-(--primary-color) ${tailwindcssDuration}`}>
            {label}
            {icon &&
                <img src={icon} className={`${iconSize ?? 'h-4'} ${iconClass}`} alt={iconAlt} />
            }
        </NavLink>
    )
}
