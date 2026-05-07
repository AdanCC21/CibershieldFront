import type { UserEntity } from "@/entities/user"

interface EmailExercises {
    id: number

    title: string
    owner: UserEntity

    date: Date | string
    hour: string

    content: string
    isReal: boolean
}

export const emailExamples: EmailExercises[] = [
    {
        id: 0,
        title: "⚠️ Suspensión inmediata de cuenta bancaria",
        owner: {
            name: "BBVA Seguridad",
            email: "soporte-bbva@secure-alerts-login.com"
        },
        date: new Date(),
        hour: "9:00pm",
        content: "Estimado cliente, detectamos actividad sospechosa en su cuenta. Para evitar el bloqueo permanente, verifique su identidad inmediatamente ingresando al siguiente enlace.",
        isReal: false
    },
    {
        id: 1,
        title: "🎁 Has ganado un iPhone 17 Pro",
        owner: {
            name: "Amazon Rewards",
            email: "promociones@amazon-bonus-gifts.net"
        },
        date: new Date(),
        hour: "9:00pm",
        content: "Felicidades, su correo fue seleccionado como ganador de un iPhone 17 Pro completamente gratis. Confirme sus datos personales y método de envío antes de 24 horas.",
        isReal: false
    },
    {
        id: 2,
        title: "Reunión de avance de proyecto",
        owner: {
            name: "María Torres",
            email: "maria.torres@empresa.com"
        },
        date: new Date(),
        hour: "9:00pm",
        content: "Hola Diego, te comparto el recordatorio de la reunión de mañana a las 10:00 AM para revisar el avance del proyecto y pendientes del sprint actual.",
        isReal: true
    }
]