import type { InfoArticle, VirusSection } from "@/entities/virus"
import { Icons } from "./icons"

const WhatIs: InfoArticle = {
    id: 0,
    title: "¿Qué es el phishing?",
    content:
        "El phishing es una técnica de fraude utilizada por ciberdelincuentes para engañar a las personas y obtener información confidencial como contraseñas, números de tarjetas de crédito o credenciales bancarias. Este tipo de ataque se realiza haciéndose pasar por entidades legítimas a través de correos electrónicos, mensajes SMS o incluso llamadas telefónicas.\nEs uno de los métodos más comunes de ingeniería social, y su éxito depende en gran medida de la capacidad del atacante para ganarse la confianza de la víctima.",
    img: '/phishing/intr.webp'
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
    content: "La mejor defensa contra el phishing es la educación. Aprende a detectar estos ataques y mantente alerta ante cualquier intento sospechoso de obtener tus datos."
}


const PhishingTypes: InfoArticle = {
    id: 5,
    title: "Phishing types",
    content: [
        {
            id: 0,
            icon: Icons.email,
            title: "Phishing por correo",
            content: "El phishing es una técnica de fraude en línea que utiliza correos electrónicos, mensajes de texto o sitios web falsos para engañar a los usuarios y hacer que revelen información personal, como contraseñas, números de tarjetas de crédito o datos bancarios. Los atacantes suelen disfrazarse como entidades legítimas, como bancos o servicios en línea, para ganar la confianza del usuario. El objetivo principal del phishing es robar información sensible para realizar fraudes financieros o comprometer la seguridad de las cuentas del usuario.",
            summary: "Engaña al usuario para que revele información personal.",
            child: <h1></h1>
        },
        {
            id: 1,
            title: "Smishing (SMS)",
            content: "El smishing es una variante del phishing que utiliza mensajes de texto (SMS) para engañar a los usuarios y hacer que revelen información personal o realicen acciones perjudiciales. Los atacantes envían mensajes que parecen provenir de fuentes legítimas, como bancos o servicios de mensajería, solicitando que el usuario haga clic en un enlace o proporcione información sensible. Al igual que el phishing tradicional, el objetivo del smishing es robar datos personales o financieros.",
            summary: "Ataques mediante mensajes de texto falsos.",
            child: <h1></h1>
        },
        {
            id: 2,
            title: "Vishing (SMS)",
            content: "El vishing, o phishing por voz, es una técnica de fraude que utiliza llamadas telefónicas para engañar a los usuarios y hacer que revelen información personal o financiera. Los atacantes suelen hacerse pasar por representantes de empresas legítimas, como bancos o servicios gubernamentales, y solicitan información sensible bajo pretextos falsos. El vishing puede ser muy convincente, ya que los atacantes pueden utilizar técnicas de ingeniería social para ganar la confianza del usuario.",
            summary: "Fraudes a través de llamadas telefónicas.",
            child: <h1></h1>
        },
        {
            id: 3,
            title: "Spear phishing",
            content: "El spear phishing es una forma más sofisticada de phishing que se dirige a individuos o grupos específicos, a menudo utilizando información personal para hacer que el ataque sea más convincente. A diferencia del phishing masivo, que envía correos electrónicos genéricos a muchas personas, el spear phishing investiga al objetivo para personalizar el mensaje y aumentar las posibilidades de éxito. Los atacantes pueden utilizar redes sociales y otras fuentes de información para recopilar datos sobre la víctima antes de lanzar el ataque.",
            summary: "Ataques dirigidos a una persona específica o grupo reducido.",
            child: <h1></h1>
        },
        {
            id: 4,
            title: "Pharming",
            content: "El pharming es una técnica de ataque que redirige a los usuarios de un sitio web legítimo a un sitio web falso sin su conocimiento. Esto se logra manipulando el sistema de nombres de dominio (DNS) o mediante malware que modifica la configuración del navegador. Una vez en el sitio falso, los usuarios pueden ser engañados para que ingresen información personal o financiera, creyendo que están interactuando con un sitio legítimo. El pharming es particularmente peligroso porque puede afectar a muchos usuarios al mismo tiempo y no requiere que el usuario haga clic en un enlace malicioso.",
            summary: "Redirige a usuarios a sitios web falsos.",
            child: <h1></h1>
        },
        {
            id: 5,
            title: "Phishing en redes sociales",
            content: "El phishing en redes sociales es una técnica que utiliza plataformas de redes sociales para engañar a los usuarios y hacer que revelen información personal o hagan clic en enlaces maliciosos. Los atacantes pueden crear perfiles falsos o enviar mensajes directos que parecen provenir de amigos o contactos legítimos. Estos mensajes a menudo contienen enlaces a sitios web falsos o solicitudes de información personal. Dado que las redes sociales son ampliamente utilizadas, el phishing en estas plataformas puede alcanzar a un gran número de personas rápidamente.",
            summary: "Utiliza perfiles o mensajes engañosos en redes sociales.",
            child: <h1></h1>
        }
    ]
}

export const Phishing: VirusSection = {
    title: "Phishing",
    sections: [
        { navTitle: "¿Qué es?", content: WhatIs },
        { navTitle: "¿Cómo funciona?", content: HowItWorks },
        { navTitle: "Tipos", content: PhishingTypes },
        { navTitle: "¿Cómo identificarlo?", content: HowToIdentify },
        { navTitle: "¿Cómo protegerse?", content: Protection },
        { navTitle: "Prevención", content: Prevention }
    ]
}