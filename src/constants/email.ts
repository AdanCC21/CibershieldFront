import type { EmailExercises } from "@/entities/email"

export const emailExamplesEasy: EmailExercises[] = [
    // ─── FALSOS (fáciles de detectar) ─────────────────────────────────────

    {
        id: 0,
        title: "Tu cuenta de Facebook será eliminada",
        owner: {
            name: "Facebook Security",
            email: "alert-facebook@security-check-now.xyz"
        },
        date: new Date(),
        hour: "8:14pm",
        content:
            "Detectamos actividad sospechosa en tu cuenta. Si no verificas tu identidad en las próximas 2 horas, tu perfil será eliminado permanentemente.",
        whyIsAnError:
            "El dominio no pertenece a Facebook. Los dominios '.xyz' y mensajes con amenazas inmediatas son señales comunes de phishing.",
        isReal: false
    },
    {
        id: 1,
        title: "Ganaste una tarjeta regalo de Walmart",
        owner: {
            name: "Walmart Rewards",
            email: "premios@walmart-giftcards-free.net"
        },
        date: new Date(),
        hour: "1:02pm",
        content:
            "¡Felicidades! Fuiste seleccionado para recibir una tarjeta regalo de $10,000 MXN. Solo confirma tus datos y tu tarjeta bancaria.",
        whyIsAnError:
            "Walmart no regala tarjetas al azar por correo y jamás pediría información bancaria para entregar un premio.",
        isReal: false
    },
    {
        id: 2,
        title: "Tu cuenta de Steam fue suspendida",
        owner: {
            name: "Steam Support",
            email: "support@steam-account-alerts.ru"
        },
        date: new Date(),
        hour: "5:41pm",
        content:
            "Tu cuenta fue reportada por actividad ilegal. Para evitar el baneo permanente inicia sesión aquí inmediatamente.",
        whyIsAnError:
            "Steam utiliza dominios oficiales como steampowered.com. El dominio '.ru' y el tono alarmante son sospechosos.",
        isReal: false
    },
    {
        id: 3,
        title: "Pago pendiente de CFE",
        owner: {
            name: "CFE México",
            email: "facturacion@cfe-pagos-online.com"
        },
        date: new Date(),
        hour: "10:55am",
        content:
            "Tu servicio eléctrico será suspendido hoy por falta de pago. Realiza tu pago aquí para evitar el corte.",
        whyIsAnError:
            "La CFE no utiliza dominios externos ni amenaza con cortes inmediatos por correo electrónico.",
        isReal: false
    },
    {
        id: 4,
        title: "Código de acceso de Discord",
        owner: {
            name: "Discord",
            email: "noreply@discord.com"
        },
        date: new Date(),
        hour: "7:20pm",
        content:
            "Tu código de verificación es 552991. Si no intentaste iniciar sesión, puedes ignorar este mensaje.",
        isReal: true
    },
    {
        id: 5,
        title: "Confirmación de compra en Amazon",
        owner: {
            name: "Amazon México",
            email: "auto-confirm@amazon.com.mx"
        },
        date: new Date(),
        hour: "4:10pm",
        content:
            "Tu pedido de 'Logitech G305 Mouse Inalámbrico' fue enviado correctamente. Fecha estimada de entrega: mañana antes de las 9 PM.",
        isReal: true
    },
    {
        id: 6,
        title: "Reunión de proyecto mañana",
        owner: {
            name: "Carlos Hernández",
            email: "carlos.hernandez@empresa.com"
        },
        date: new Date(),
        hour: "9:40am",
        content:
            "Hola equipo, les recuerdo que mañana tendremos reunión a las 10 AM para revisar avances del proyecto final.",
        isReal: true
    },
    {
        id: 7,
        title: "Tu recibo de Uber",
        owner: {
            name: "Uber",
            email: "noreply@uber.com"
        },
        date: new Date(),
        hour: "11:15pm",
        content:
            "Gracias por viajar con Uber. Tu viaje del día de hoy tuvo un costo total de $132.50 MXN.",
        isReal: true
    }
]

export const emailExamplesMedium: EmailExercises[] = [
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

export const emailExamplesHard: EmailExercises[] = [
    // ─── FALSOS (difíciles de detectar) ───────────────────────────────────

    {
        id: 0,
        title: "Actividad sospechosa detectada en Microsoft 365",
        owner: {
            name: "Microsoft",
            email: "security@micr0soft-support.com"
        },
        date: new Date(),
        hour: "6:52am",
        content:
            "Detectamos múltiples intentos fallidos de inicio de sesión en tu cuenta corporativa. Por seguridad, recomendamos validar tu identidad desde el portal de recuperación.",
        whyIsAnError:
            "El dominio parece legítimo, pero usa un '0' en lugar de la letra 'o' en 'microsoft'. Este tipo de sustitución visual es común en phishing avanzado.",
        isReal: false
    },
    {
        id: 1,
        title: "Actualización de políticas – Banco Santander",
        owner: {
            name: "Santander México",
            email: "notificaciones@santander-clientes.com"
        },
        date: new Date(),
        hour: "2:48pm",
        content:
            "Estimado cliente, actualizamos nuestros términos de seguridad digital. Le recomendamos revisar los cambios y validar sus datos para mantener acceso completo a la banca en línea.",
        whyIsAnError:
            "El correo evita amenazas obvias y parece profesional, pero el dominio no pertenece a Santander. Los bancos reales usan dominios oficiales.",
        isReal: false
    },
    {
        id: 2,
        title: "Documento compartido contigo",
        owner: {
            name: "Google Drive",
            email: "drive@googledrive-share.com"
        },
        date: new Date(),
        hour: "9:11am",
        content:
            "Mariana Torres compartió contigo el archivo 'Nómina_Abril_2026.xlsx'. Puedes revisarlo iniciando sesión con tu cuenta de Google.",
        whyIsAnError:
            "El mensaje parece normal y sin urgencia, pero el dominio no es oficial de Google. Es un phishing diseñado para robar credenciales.",
        isReal: false
    },
    {
        id: 3,
        title: "Verificación de cuenta de LinkedIn",
        owner: {
            name: "LinkedIn",
            email: "security@linkedinverify.com"
        },
        date: new Date(),
        hour: "12:35pm",
        content:
            "Como parte de nuestras medidas de seguridad, solicitamos confirmar tu información profesional para evitar restricciones temporales en tu perfil.",
        whyIsAnError:
            "Aunque el mensaje parece corporativo y tranquilo, LinkedIn no usa dominios como 'linkedinverify.com'.",
        isReal: false
    },

    // ─── REALES (más ambiguos) ────────────────────────────────────────────

    {
        id: 4,
        title: "Nuevo inicio de sesión en tu cuenta",
        owner: {
            name: "Apple",
            email: "appleid@id.apple.com"
        },
        date: new Date(),
        hour: "3:04am",
        content:
            "Tu Apple ID fue utilizado para iniciar sesión en un iPhone 15 Pro en Guadalajara, Jalisco. Si reconoces esta actividad, no es necesario realizar ninguna acción.",
        isReal: true
    },
    {
        id: 5,
        title: "Acción requerida en tu cuenta de Netflix",
        owner: {
            name: "Netflix",
            email: "info@mailer.netflix.com"
        },
        date: new Date(),
        hour: "8:21pm",
        content:
            "Tuvimos problemas al procesar el último pago de tu membresía. Puedes actualizar tu método de pago desde la configuración de tu cuenta.",
        isReal: true
    },
    {
        id: 6,
        title: "Alerta de seguridad de Google",
        owner: {
            name: "Google",
            email: "no-reply@accounts.google.com"
        },
        date: new Date(),
        hour: "7:58am",
        content:
            "Detectamos un nuevo inicio de sesión desde un dispositivo Windows. Si fuiste tú, no necesitas hacer nada.",
        isReal: true
    },
    {
        id: 7,
        title: "Tu pedido fue retrasado",
        owner: {
            name: "Mercado Libre",
            email: "notificaciones@mercadolibre.com"
        },
        date: new Date(),
        hour: "6:30pm",
        content:
            "Tu paquete sufrió un retraso logístico y llegará 1 día después de la fecha estimada originalmente.",
        isReal: true
    }
]