import type { UserEntity } from "@/entities/user"

export interface EmailExercises {
    id: number
    title: string
    owner: UserEntity
    date: Date | string
    hour: string
    content: string
    whyIsAnError?: string
    isReal: boolean
}

export const emailExamples: EmailExercises[] = [
    // ─── FALSOS (phishing) ───────────────────────────────────────────────────

    {
        id: 0,
        title: "Suspensión inmediata de cuenta bancaria",
        owner: {
            name: "BBVA Seguridad",
            email: "soporte-bbva@secure-alerts-login.com"
        },
        date: new Date(),
        hour: "9:00pm",
        content:
            "Estimado cliente, detectamos actividad sospechosa en su cuenta. Para evitar el bloqueo permanente, verifique su identidad inmediatamente ingresando al siguiente enlace.",
        whyIsAnError:
            "El dominio del remitente no pertenece a BBVA. El banco real usa @bbva.com. Además los bancos nunca piden verificación por correo con enlaces urgentes.",
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
        hour: "11:23am",
        content:
            "Felicidades, su correo fue seleccionado como ganador de un iPhone 17 Pro completamente gratis. Confirme sus datos personales y método de envío antes de 24 horas.",
        whyIsAnError:
            "Amazon no realiza sorteos aleatorios por correo. El dominio es falso (@amazon-bonus-gifts.net). Es una táctica clásica de urgencia para robar datos.",
        isReal: false
    },
    {
        id: 2,
        title: "Alerta: tu contraseña de Google expira hoy",
        owner: {
            name: "Google Account Team",
            email: "noreply@google-account-security.info"
        },
        date: new Date(),
        hour: "8:47am",
        content:
            "Tu contraseña de Google expirará en menos de 2 horas. Para mantener el acceso a tu cuenta, haz clic aquí y renuévala antes de que sea desactivada permanentemente.",
        whyIsAnError:
            "Google nunca expira contraseñas de esta forma ni manda correos desde dominios con guiones como 'google-account-security.info'. El dominio real es @google.com o @accounts.google.com.",
        isReal: false
    },
    {
        id: 3,
        title: "Tu pago de PayPal fue retenido",
        owner: {
            name: "PayPal Soporte",
            email: "servicio@paypal-secure-mx.com"
        },
        date: new Date(),
        hour: "3:15pm",
        content:
            "Hemos retenido un pago de $3,200 MXN en tu cuenta debido a actividad inusual. Para liberarlo, confirma tu información bancaria en el siguiente enlace en las próximas 12 horas.",
        whyIsAnError:
            "PayPal solo envía correos desde @paypal.com. El dominio 'paypal-secure-mx.com' es falso. PayPal nunca pide datos bancarios por correo.",
        isReal: false
    },
    {
        id: 4,
        title: "Verificación requerida – Netflix",
        owner: {
            name: "Netflix",
            email: "billing@netflix-account-update.net"
        },
        date: new Date(),
        hour: "10:02pm",
        content:
            "Tu método de pago fue rechazado. Para continuar viendo sin interrupciones, actualiza tu información de tarjeta en las próximas 24 horas o tu cuenta será suspendida.",
        whyIsAnError:
            "Netflix envía correos desde @netflix.com, no desde dominios inventados. La presión de '24 horas' y el enlace externo son señales claras de phishing.",
        isReal: false
    },
    {
        id: 5,
        title: "Tu cuenta de Instagram fue reportada",
        owner: {
            name: "Instagram Support",
            email: "support@instagram-help-center.co"
        },
        date: new Date(),
        hour: "6:33pm",
        content:
            "Tu cuenta ha recibido múltiples reportes por violación de derechos de autor. Para evitar su eliminación permanente, apela esta decisión haciendo clic aquí antes de 48 horas.",
        whyIsAnError:
            "Instagram nunca usa dominios externos como '@instagram-help-center.co'. Sus correos reales vienen de @mail.instagram.com. La urgencia falsa es una táctica de manipulación.",
        isReal: false
    },
    {
        id: 6,
        title: "Factura pendiente de pago – SAT",
        owner: {
            name: "SAT México",
            email: "notificaciones@sat-gov-mx.org"
        },
        date: new Date(),
        hour: "12:10pm",
        content:
            "Contribuyente, tiene una deuda fiscal de $14,780 MXN. De no regularizar su situación en 72 horas, se procederá al embargo de sus cuentas bancarias. Ingrese aquí para aclarar.",
        whyIsAnError:
            "El SAT usa el dominio @sat.gob.mx, no '.org'. Las notificaciones oficiales llegan al buzón tributario del portal del SAT, no por correo con amenazas de embargo inmediato.",
        isReal: false
    },
    {
        id: 7,
        title: "Recibiste $500 USD – Verifica tu cuenta",
        owner: {
            name: "Western Union",
            email: "transferencias@westernunion-global.co"
        },
        date: new Date(),
        hour: "9:41am",
        content:
            "Un familiar te ha enviado $500 USD. Para recibir tu dinero, verifica tu identidad con una foto de tu INE y número de tarjeta en el siguiente formulario.",
        whyIsAnError:
            "Western Union nunca solicita fotos de identificación ni datos de tarjeta por correo. El dominio es falso. Esta es una estafa para robar identidad y datos bancarios.",
        isReal: false
    },
    {
        id: 8,
        title: "Tu Spotify Premium fue cancelado",
        owner: {
            name: "Spotify",
            email: "premium@spotify-billing-support.com"
        },
        date: new Date(),
        hour: "4:55pm",
        content:
            "Detectamos un error al procesar tu pago mensual. Tu cuenta premium será degradada a gratuita en 24 horas. Actualiza tu método de pago aquí para evitar la interrupción.",
        whyIsAnError:
            "Spotify solo envía correos desde @spotify.com. El dominio 'spotify-billing-support.com' no existe oficialmente. Puedes verificar tu estado de pago directamente en la app.",
        isReal: false
    },
    {
        id: 9,
        title: "Entrega de paquete fallida – DHL Express",
        owner: {
            name: "DHL México",
            email: "rastreo@dhl-entrega-express.net"
        },
        date: new Date(),
        hour: "1:17pm",
        content:
            "Su paquete no pudo ser entregado. Para reprogramar la entrega, pague $49 MXN de gastos de almacenaje haciendo clic aquí. El paquete será devuelto si no paga en 24 horas.",
        whyIsAnError:
            "DHL no cobra gastos de almacenaje por correo con pagos de pequeñas cantidades. Sus correos reales vienen de @dhl.com. Pedir pagos urgentes por correo es una señal de fraude.",
        isReal: false
    },
    {
        id: 10,
        title: "Acceso no autorizado a tu cuenta de Microsoft",
        owner: {
            name: "Microsoft Security",
            email: "security@microsoft-account-alerts.com"
        },
        date: new Date(),
        hour: "7:29am",
        content:
            "Detectamos un inicio de sesión desde Rusia en tu cuenta de Microsoft. Si no fuiste tú, haz clic aquí para bloquear el acceso y cambiar tu contraseña de inmediato.",
        whyIsAnError:
            "Microsoft envía alertas desde @microsoft.com o @account.microsoft.com. El dominio 'microsoft-account-alerts.com' es falso. El miedo a hackers desde otros países es una táctica común de phishing.",
        isReal: false
    },

    // ─── REALES ─────────────────────────────────────────────────────────────

    {
        id: 11,
        title: "Recibo de tu pago en PayPal",
        owner: {
            name: "PayPal",
            email: "service@paypal.com"
        },
        date: new Date(),
        hour: "2:30pm",
        content:
            "Hola, confirmamos que realizaste un pago de $850.00 MXN a Mercado Libre. Si no reconoces esta transacción, puedes reportarla directamente desde tu cuenta en paypal.com.",
        isReal: true
    },
    {
        id: 12,
        title: "Recordatorio: Cena familiar del sábado",
        owner: {
            name: "cliente",
            email: "cliente@gmail.com"
        },
        date: new Date(),
        hour: "5:00pm",
        content:
            "Hola a todos, les recuerdo que la cena del sábado es a las 8pm en casa de los abuelos. Por favor confirmen si van para avisarle a mamá cuántos somos. ¡Nos vemos!",
        isReal: true
    },
    {
        id: 13,
        title: "Tu código de verificación de Google",
        owner: {
            name: "Google",
            email: "no-reply@accounts.google.com"
        },
        date: new Date(),
        hour: "11:05am",
        content:
            "Tu código de verificación de Google es: 847 293. Este código expira en 10 minutos. Si no intentaste iniciar sesión, ignora este mensaje.",
        isReal: true
    },
    {
        id: 14,
        title: "Comprobante de transferencia bancaria",
        owner: {
            name: "BBVA México",
            email: "notificaciones@bbva.com"
        },
        date: new Date(),
        hour: "9:15am",
        content:
            "Transferencia realizada con éxito. Monto: $2,500.00 MXN. Destinatario: Juan C. Fecha: hoy a las 9:14 AM. Si no realizaste esta operación, llama al 55 5226 2663.",
        isReal: true
    },
    {
        id: 15,
        title: "Tu resumen mensual de Spotify",
        owner: {
            name: "Spotify",
            email: "noreply@spotify.com"
        },
        date: new Date(),
        hour: "8:00am",
        content:
            "Este mes escuchaste 3,421 minutos de música. Tu artista más escuchado fue Natanael Cano y tu género favorito fue corridos tumbados. ¡Sigue descubriendo música nueva!",
        isReal: true
    },
    {
        id: 16,
        title: "Invitación a reunión de trabajo – Google Meet",
        owner: {
            name: "cliente",
            email: "cliente@empresa.com"
        },
        date: new Date(),
        hour: "10:00am",
        content:
            "Te invitamos a la reunión de revisión trimestral del equipo el próximo jueves a las 11:00 AM vía Google Meet. El enlace de la reunión es meet.google.com/xyz-abc-def. ¡Esperamos verte!",
        isReal: true
    },
    {
        id: 17,
        title: "Confirmación de pedido – Mercado Libre",
        owner: {
            name: "Mercado Libre",
            email: "noreply@mercadolibre.com"
        },
        date: new Date(),
        hour: "3:42pm",
        content:
            "¡Tu compra fue confirmada! Audífonos Bluetooth Sony WH-1000XM5 – $3,199 MXN. Entrega estimada: 2 a 4 días hábiles. Puedes rastrear tu pedido en la app de Mercado Libre.",
        isReal: true
    },
    {
        id: 18,
        title: "Alguien compartió un archivo contigo en Google Drive",
        owner: {
            name: "Google Drive",
            email: "drive-shares-noreply@google.com"
        },
        date: new Date(),
        hour: "4:20pm",
        content:
            "cliente compartió el archivo 'Presupuesto Q3 2025.xlsx' contigo. Puedes verlo directamente en Google Drive con tu cuenta de Google.",
        isReal: true
    },
    {
        id: 19,
        title: "Tu suscripción a Netflix se renovó",
        owner: {
            name: "Netflix",
            email: "info@mailer.netflix.com"
        },
        date: new Date(),
        hour: "12:00am",
        content:
            "Tu plan Estándar con anuncios fue renovado por $99 MXN. El cargo fue aplicado a tu tarjeta terminación 4242. Tu próxima fecha de cobro es el 10 del próximo mes.",
        isReal: true
    }
]

export const smsExamples: EmailExercises[] = [
    // ─── FALSOS (smishing) ───────────────────────────────────────────────────

    {
        id: 0,
        title: "Tu paquete está retenido en aduana",
        owner: {
            name: "CORREOS DE MEXICO",
            email: "+52 55 1234 5678"
        },
        date: new Date(),
        hour: "10:14am",
        content:
            "Tu paquete #MX49281 fue retenido en aduana. Paga $85 MXN de liberación antes de 24hrs o será devuelto: bit.ly/correos-libera",
        whyIsAnError:
            "Correos de México no cobra liberaciones por SMS ni manda links acortados. Es una estafa para robar datos de tarjeta.",
        isReal: false
    },
    {
        id: 1,
        title: "BBVA: Cargo no reconocido",
        owner: {
            name: "BBVA",
            email: "+52 800 000 1234"
        },
        date: new Date(),
        hour: "3:02pm",
        content:
            "BBVA: Detectamos un cargo de $4,200 en tu cuenta. Si no lo reconoces, cancélalo aquí: bbva-cancel-cargo.com/mx",
        whyIsAnError:
            "BBVA nunca manda links externos por SMS para cancelar cargos. El dominio no pertenece a BBVA. Para disputas reales, llama al número en tu tarjeta.",
        isReal: false
    },
    {
        id: 2,
        title: "Premio OXXO: $5,000 en efectivo",
        owner: {
            name: "OXXO Premios",
            email: "+52 55 9876 5432"
        },
        date: new Date(),
        hour: "6:45pm",
        content:
            "¡Felicidades! Tu número fue seleccionado para ganar $5,000 MXN en efectivo. Reclama tu premio antes de que expire: oxxo-premios.net/reclamar",
        whyIsAnError:
            "OXXO no realiza sorteos por SMS. El link lleva a un sitio falso que roba datos personales. Los números ganadores se publican en tienda, no se notifican por mensaje.",
        isReal: false
    },
    {
        id: 3,
        title: "Alerta SAT: Devolución disponible",
        owner: {
            name: "SAT",
            email: "+52 55 6274 3000"
        },
        date: new Date(),
        hour: "9:30am",
        content:
            "SAT: Tienes una devolución de $2,340 MXN pendiente. Ingresa tu CLABE para recibirla hoy: sat-devolucion.org/cobrar",
        whyIsAnError:
            "El SAT nunca solicita CLABE por SMS. Las devoluciones fiscales se gestionan exclusivamente en el portal sat.gob.mx. El dominio '.org' no pertenece al gobierno.",
        isReal: false
    },
    {
        id: 4,
        title: "Telcel: Tu línea será suspendida",
        owner: {
            name: "Telcel",
            email: "+52 55 5050 1234"
        },
        date: new Date(),
        hour: "12:58pm",
        content:
            "TELCEL: Tu línea será suspendida por falta de pago. Realiza tu pago ahora en: telcel-pago-linea.com/urgente o perderás tu número.",
        whyIsAnError:
            "Telcel notifica suspensiones desde números oficiales y su app, nunca con links externos de terceros. El dominio es falso; el sitio real es telcel.com.",
        isReal: false
    },
    {
        id: 5,
        title: "Transferencia recibida – requiere confirmación",
        owner: {
            name: "SPEI Banamex",
            email: "+52 55 1111 2222"
        },
        date: new Date(),
        hour: "4:17pm",
        content:
            "Banamex: Recibiste una transferencia SPEI de $12,000. Para acreditarla confirma tu NIP en: banamex-spei-confirma.com",
        whyIsAnError:
            "Las transferencias SPEI se acreditan automáticamente, no requieren confirmación de NIP. Ningún banco pide tu NIP por SMS. El dominio es falso.",
        isReal: false
    },
    {
        id: 6,
        title: "WhatsApp: Tu cuenta expira hoy",
        owner: {
            name: "WhatsApp",
            email: "+1 650 543 4800"
        },
        date: new Date(),
        hour: "7:00pm",
        content:
            "Tu cuenta de WhatsApp expirará hoy. Para renovarla gratis por un año, reenvía este mensaje a 10 contactos o paga $29 aquí: whatsapp-renovar.com",
        whyIsAnError:
            "WhatsApp es gratuito y no expira. Nunca pide reenviar mensajes ni pagar por SMS. Esta es una de las cadenas de smishing más antiguas y comunes.",
        isReal: false
    },
    {
        id: 7,
        title: "CFE: Corte de luz programado",
        owner: {
            name: "CFE",
            email: "+52 55 0708 0000"
        },
        date: new Date(),
        hour: "11:20am",
        content:
            "CFE: Tiene un adeudo de $1,780. Si no realiza su pago hoy se procederá al corte de su servicio. Pague aquí: cfe-pagos-mx.com/urgente",
        whyIsAnError:
            "La CFE notifica adeudos en tu recibo mensual y en su app oficial. Nunca manda links de pago por SMS. El sitio real es cfe.mx.",
        isReal: false
    },
    {
        id: 8,
        title: "Ganaste un viaje a Cancún",
        owner: {
            name: "Aeromexico Rewards",
            email: "+52 800 021 4010"
        },
        date: new Date(),
        hour: "2:33pm",
        content:
            "¡Tu número fue el ganador del sorteo Aeromexico! Ganaste 2 vuelos a Cancún. Reclama antes de 48hrs: aeromexico-sorteo.net/premio",
        whyIsAnError:
            "Aeromexico no realiza sorteos por SMS. El dominio no es oficial. Este tipo de mensajes buscan que ingreses datos personales o de tarjeta en sitios falsos.",
        isReal: false
    },
    {
        id: 9,
        title: "Verificación de cuenta – Banco Azteca",
        owner: {
            name: "Banco Azteca",
            email: "+52 55 3000 0000"
        },
        date: new Date(),
        hour: "8:50am",
        content:
            "Banco Azteca: Tu cuenta fue bloqueada por seguridad. Desbloquéala ingresando tu número de tarjeta y NIP en: azteca-desbloqueo.com/verificar",
        whyIsAnError:
            "Ningún banco desbloquea cuentas por SMS con links externos. Nunca compartas NIP o número de tarjeta por ningún canal que no sea físicamente en sucursal.",
        isReal: false
    },
    {
        id: 10,
        title: "DiDi: Problema con tu pago",
        owner: {
            name: "DiDi",
            email: "+52 55 4444 5555"
        },
        date: new Date(),
        hour: "9:05pm",
        content:
            "DiDi: Detectamos un problema con tu método de pago. Actualiza tu tarjeta en: didi-pago-update.com o no podrás solicitar viajes.",
        whyIsAnError:
            "DiDi gestiona métodos de pago exclusivamente dentro de su app oficial. Nunca manda links externos por SMS. El dominio es falso.",
        isReal: false
    },

    // ─── REALES ──────────────────────────────────────────────────────────────

    {
        id: 11,
        title: "Código de verificación de WhatsApp",
        owner: {
            name: "WhatsApp",
            email: "+1 (631) 253-0036"
        },
        date: new Date(),
        hour: "10:01am",
        content:
            "Tu código de WhatsApp es 847-293. No lo compartas con nadie.",
        isReal: true
    },
    {
        id: 12,
        title: "Confirmación de retiro en cajero",
        owner: {
            name: "BBVA",
            email: "+52 55 5226 2663"
        },
        date: new Date(),
        hour: "1:45pm",
        content:
            "BBVA: Retiro en cajero por $500.00 MXN el día de hoy. Saldo disponible: $8,240.50. Si no lo realizaste llama al 800 111 0134.",
        isReal: true
    },
    {
        id: 13,
        title: "Tu pedido va en camino",
        owner: {
            name: "Mercado Libre",
            email: "+52 55 5169 6009"
        },
        date: new Date(),
        hour: "11:30am",
        content:
            "Tu pedido salió para entrega hoy. Rastréalo en la app de Mercado Libre o en mercadolibre.com.mx/envios con tu número de orden #98472610.",
        isReal: true
    },
    {
        id: 14,
        title: "Código de acceso – Google",
        owner: {
            name: "Google",
            email: "+1 (650) 253-0000"
        },
        date: new Date(),
        hour: "3:10pm",
        content:
            "G-591847 es tu código de verificación de Google. No lo compartas con nadie.",
        isReal: true
    },
    {
        id: 15,
        title: "Recordatorio de cita médica",
        owner: {
            name: "cliente",
            email: "+52 55 1234 0000"
        },
        date: new Date(),
        hour: "8:00am",
        content:
            "Recordatorio: tienes cita con el Dr. Ramírez mañana a las 10:00 AM en Consultorio 3. Si no puedes asistir, avisa con anticipación al 55 1234 0000.",
        isReal: true
    },
    {
        id: 16,
        title: "Pago de Telmex confirmado",
        owner: {
            name: "Telmex",
            email: "+52 55 1111 8888"
        },
        date: new Date(),
        hour: "5:20pm",
        content:
            "Telmex: Recibimos tu pago de $429.00 MXN. Gracias por pagar a tiempo. Tu próxima fecha límite es el 10 del siguiente mes.",
        isReal: true
    },
    {
        id: 17,
        title: "Tu Uber ya llegó",
        owner: {
            name: "Uber",
            email: "+52 55 9000 0000"
        },
        date: new Date(),
        hour: "7:48pm",
        content:
            "Tu conductor Carlos en un Nissan Versa gris (placas ABC-123) ha llegado a tu ubicación. Tienes 5 minutos antes de que se aplique cargo por espera.",
        isReal: true
    },
    {
        id: 18,
        title: "Alerta de inicio de sesión – Mercado Pago",
        owner: {
            name: "Mercado Pago",
            email: "+52 55 5169 6009"
        },
        date: new Date(),
        hour: "6:02pm",
        content:
            "Mercado Pago: Nuevo inicio de sesión desde iPhone en Ciudad de México. Si fuiste tú, ignora este mensaje. Si no, cambia tu contraseña en la app.",
        isReal: true
    },
    {
        id: 19,
        title: "Confirmación de reserva – hotel",
        owner: {
            name: "cliente",
            email: "+52 664 123 4567"
        },
        date: new Date(),
        hour: "2:00pm",
        content:
            "Reserva confirmada para 2 noches del 15 al 17 de junio. Check-in a las 3:00 PM. Para cualquier cambio comunícate al 664 123 4567. ¡Te esperamos!",
        isReal: true
    }
]