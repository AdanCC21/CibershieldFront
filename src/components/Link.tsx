import { tailwindcssDuration } from "@/constants/animations"
import { NavLink } from "react-router-dom"

interface Prompts {
    href: string
    label: string
    labelSize?: string
}

export default function Link({ label, href, labelSize }: Prompts) {
    return (
        <NavLink to={href} className={({ isActive }) => [
            labelSize ?? 'text-base',
            "border-b border-b-black/0 w-fit, hover:border-b-(--primary-color)",
            tailwindcssDuration
        ].join(" ")}>
                {label}
        </NavLink>
    )
}
