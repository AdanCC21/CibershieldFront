import { easeInOut, type Variants } from "framer-motion"

export const tailwindcssDuration = "transition-all ease-in-out duration-125"

const showDefalt = {
    opacity: 1,
    translateY: 0,
    translateX: 0,
    transition: {
        duration: .4,
        ease: easeInOut
    }
}

const showShort = {
    opacity: 1,
    translateY: 0,
    translateX: 0,
    transition: {
        duration: .2,
        ease: easeInOut
    }
}
export const showUpContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: .4,
            ease: easeInOut
        }
    },
    showShort: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            duration: .15,
            ease: easeInOut
        }
    },
    exit: { opacity: 0, translate: -10 }
}

export const showUp: Variants = {
    hidden: { opacity: 0, translateY: 10 },
    show: showDefalt,
    showShort: showShort,
    exit: { opacity: 0, translate: -10 }
}

export const showDown: Variants = {
    hidden: { opacity: 0, translateY: -10 },
    show: showDefalt,
    showShort: showShort,
    exit: { opacity: 0, translate: -10 }
}

export const showUpLarge: Variants = {
    hidden: { opacity: 0, translateY: 10 },
    show: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 0.6,
            ease: easeInOut
        }
    },
    exit: { opacity: 0, translate: -10 }
}