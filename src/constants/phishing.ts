import type { InfoArticle, VirusSection } from "@/entities/virus"

const WhatIs: InfoArticle = {
    id: 0,
    title: "¿Qué es el phishing?",
    content:
        "El phishing es una técnica de fraude utilizada por ciberdelincuentes para engañar a las personas y obtener información confidencial como contraseñas, números de tarjetas de crédito o credenciales bancarias. Este tipo de ataque se realiza haciéndose pasar por entidades legítimas a través de correos electrónicos, mensajes SMS o incluso llamadas telefónicas.\nEs uno de los métodos más comunes de ingeniería social, y su éxito depende en gran medida de la capacidad del atacante para ganarse la confianza de la víctima."
}


const HowItWorks: InfoArticle = {
    id: 1,
    title: "¿Cómo funciona?",
    content: [
        "El atacante se hace pasar por una entidad confiable (banco, red social, etc.).",
        "Envía un mensaje con un enlace o archivo malicioso.",
        "La víctima accede al enlace o descarga el archivo.",
        "Ingresa su información sin sospechar que es un sitio falso.",
        "El atacante roba los datos y puede usarlos o venderlos."
    ]
}

const HowToIdentify: InfoArticle = {
    id: 2,
    title: "¿Cómo identificarlo?",
    content: [
        "Correos con errores gramaticales o diseños poco profesionales.",
        "Solicitudes urgentes de información personal.",
        "Enlaces que llevan a sitios web sospechosos.",
        "Remitentes desconocidos o direcciones de correo extrañas.",
        "Archivos adjuntos inesperados o no solicitados."
    ]
}

const Protection: InfoArticle = {
    id: 3,
    title: "¿Cómo protegerse?",
    content: [
        "No hagas clic en enlaces sospechosos.",
        "Verifica siempre el remitente del mensaje.",
        "Usa autenticación de dos factores (2FA).",
        "Mantén actualizado tu antivirus y sistema operativo.",
        "No compartas información sensible sin verificar la fuente.",
        "Utiliza contraseñas fuertes y únicas."
    ]
}

const Prevention: InfoArticle = {
    id: 4,
    title: "Prevención",
    content:
        "La mejor defensa contra el phishing es la educación. Aprende a detectar estos ataques y mantente alerta ante cualquier intento sospechoso de obtener tus datos."
}

export const Phishing: VirusSection = {
    title: "Phishing",
    sections: [
        { navTitle: "¿Qué es?", content: WhatIs },
        { navTitle: "¿Cómo funciona?", content: HowItWorks },
        { navTitle: "¿Cómo identificarlo?", content: HowToIdentify },
        { navTitle: "¿Cómo protegerse?", content: Protection },
        { navTitle: "Prevención", content: Prevention }
    ]
}