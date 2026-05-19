import type { EmailExercises } from "@/entities/email"

export const smsExamplesEasy: EmailExercises[] = [
    {
        id: 0,
        title: "Paquete retenido",
        owner: {
            name: "DHL",
            email: "+52 81 4421 8890"
        },
        date: new Date(),
        hour: "10:14am",
        content:
            "Tu paquete fue retenido por falta de pago. Liquida $35 MXN aquí para evitar devolución inmediata.",
        whyIsAnError:
            "Los mensajes usan urgencia y pagos pequeños para presionar. DHL normalmente dirige al usuario desde su app o sitio oficial.",
        isReal: false
    },
    {
        id: 1,
        title: "Cuenta bancaria bloqueada",
        owner: {
            name: "BBVA",
            email: "+52 55 7731 2298"
        },
        date: new Date(),
        hour: "8:43pm",
        content:
            "BBVA: Detectamos actividad sospechosa. Verifica tu identidad ahora o tu cuenta será suspendida.",
        whyIsAnError:
            "Los bancos no suelen pedir verificaciones inmediatas por SMS con amenazas de suspensión.",
        isReal: false
    },
    {
        id: 2,
        title: "Premio gratis",
        owner: {
            name: "Amazon",
            email: "+52 81 9942 1103"
        },
        date: new Date(),
        hour: "2:05pm",
        content:
            "Felicidades, ganaste una tarjeta regalo de Amazon por $5,000 MXN. Reclámala hoy.",
        whyIsAnError:
            "Los premios inesperados y demasiado buenos para ser verdad son una señal clásica de phishing.",
        isReal: false
    },
    {
        id: 3,
        title: "Código de Uber",
        owner: {
            name: "Uber",
            email: "+1 415 237 0400"
        },
        date: new Date(),
        hour: "11:09am",
        content:
            "Tu código de verificación de Uber es 483921. No compartas este código con nadie.",
        isReal: true
    },
    {
        id: 4,
        title: "Recordatorio de cita",
        owner: {
            name: "Clínica Dental",
            email: "+52 646 210 8821"
        },
        date: new Date(),
        hour: "5:30pm",
        content:
            "Te recordamos tu cita dental mañana a las 4:00 PM. Responde SI para confirmar.",
        isReal: true
    },
    {
        id: 5,
        title: "Transferencia recibida",
        owner: {
            name: "Santander",
            email: "+52 55 5226 2663"
        },
        date: new Date(),
        hour: "9:01am",
        content:
            "Has recibido una transferencia SPEI por $1,250.00 MXN. Consulta los detalles en tu app bancaria.",
        isReal: true
    },
    {
        id: 6,
        title: "Tarjeta bloqueada",
        owner: {
            name: "Banamex",
            email: "+1 305 842 7761"
        },
        date: new Date(),
        hour: "3:47am",
        content:
            "BANAMEX: Tu tarjeta fue BLOQUEADA por uso inusual. Llama AHORA al 800-555-0192 para reactivarla.",
        whyIsAnError:
            "El horario (madrugada), las mayúsculas para alarmar y el número de EE.UU. son señales muy claras de fraude.",
        isReal: false
    },
    {
        id: 7,
        title: "Ganador del sorteo",
        owner: {
            name: "Telcel",
            email: "+52 33 1027 4489"
        },
        date: new Date(),
        hour: "12:30pm",
        content:
            "Telcel: ¡Eres el ganador de nuestro sorteo! Reclama tu iPhone 15 enviando tus datos completos a este número.",
        whyIsAnError:
            "Pedir datos personales por SMS es una táctica de phishing básica. Telcel anuncia sorteos oficiales por sus canales verificados.",
        isReal: false
    },
    {
        id: 8,
        title: "Cobro no reconocido",
        owner: {
            name: "Netflix",
            email: "+44 7911 023456"
        },
        date: new Date(),
        hour: "6:55pm",
        content:
            "Netflix: Se realizó un cobro de $349 MXN. Si no lo reconoces, cancela aquí de inmediato para obtener reembolso.",
        whyIsAnError:
            "Netflix nunca envía SMS con enlaces de reembolso. El número es de Reino Unido, lo que no corresponde a una empresa con operaciones en México.",
        isReal: false
    },
    {
        id: 9,
        title: "Entrega en camino",
        owner: {
            name: "Amazon",
            email: "AMAZON"
        },
        date: new Date(),
        hour: "8:15am",
        content:
            "Tu pedido llegará hoy entre 2:00 PM y 6:00 PM. Sigue tu envío en la app de Amazon.",
        isReal: true
    },
    {
        id: 10,
        title: "Código de acceso",
        owner: {
            name: "BBVA",
            email: "BBVA"
        },
        date: new Date(),
        hour: "10:22am",
        content:
            "Tu token de acceso BBVA es 827364. Válido por 5 minutos. No lo compartas con nadie.",
        isReal: true
    },
    {
        id: 11,
        title: "Confirmación de pedido",
        owner: {
            name: "Rappi",
            email: "Rappi"
        },
        date: new Date(),
        hour: "7:48pm",
        content:
            "¡Pedido confirmado! Tu orden de Domino's Pizza está siendo preparada. Tiempo estimado: 35 min.",
        isReal: true
    },
]

export const smsExamples: EmailExercises[] = [
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

export const smsExamplesHard: EmailExercises[] = [
    {
        id: 0,
        title: "Inicio de sesión sospechoso",
        owner: {
            name: "Microsoft",
            email: "+1 332 201 7719"
        },
        date: new Date(),
        hour: "3:11am",
        content:
            "Microsoft: Detectamos un acceso desde un nuevo dispositivo. Si no fuiste tú, protege tu cuenta ahora.",
        whyIsAnError:
            "El mensaje parece legítimo y breve, pero busca generar miedo para que el usuario acceda a un enlace falso.",
        isReal: false
    },
    {
        id: 1,
        title: "Problema con tu entrega",
        owner: {
            name: "FedEx",
            email: "+52 55 1148 9902"
        },
        date: new Date(),
        hour: "1:42pm",
        content:
            "FedEx: Tu entrega requiere confirmación de dirección. Evita retrasos completando la validación.",
        whyIsAnError:
            "No menciona detalles específicos del paquete y usa presión sutil para dirigir al usuario a un enlace externo.",
        isReal: false
    },
    {
        id: 2,
        title: "Actividad detectada en tu cuenta",
        owner: {
            name: "Netflix",
            email: "+44 7482 992144"
        },
        date: new Date(),
        hour: "7:28pm",
        content:
            "Netflix: Detectamos un problema con tu método de pago. Actualízalo para evitar interrupciones en tu servicio.",
        whyIsAnError:
            "Aunque parece profesional y común, el número extranjero y la falta de detalles son sospechosos.",
        isReal: false
    },
    {
        id: 3,
        title: "Código de autenticación",
        owner: {
            name: "Google",
            email: "22000"
        },
        date: new Date(),
        hour: "8:00am",
        content:
            "Código de verificación de Google: 742881. No compartas este código con nadie.",
        isReal: true
    },
    {
        id: 4,
        title: "Movimiento bancario",
        owner: {
            name: "BBVA",
            email: "BBVA"
        },
        date: new Date(),
        hour: "6:15pm",
        content:
            "Compra aprobada por $329.00 MXN en OXXO GAS. Si no reconoces este movimiento comunícate desde la app.",
        isReal: true
    },
    {
        id: 5,
        title: "Intento de acceso",
        owner: {
            name: "Apple",
            email: "APPLE"
        },
        date: new Date(),
        hour: "12:49am",
        content:
            "Tu Apple ID fue usado para iniciar sesión en un nuevo dispositivo. Si no reconoces esta actividad, revisa tu cuenta.",
        isReal: true
    },
    {
        id: 6,
        title: "Premio pendiente de reclamar",
        owner: {
            name: "Mercado Libre",
            email: "+1 809 542 3317"
        },
        date: new Date(),
        hour: "10:03am",
        content:
            "Mercado Libre: Tienes un premio pendiente de $1,500 MXN. Reclamalo antes de que expire hoy.",
        whyIsAnError:
            "Usa urgencia artificial ('expira hoy') y un número de República Dominicana. Mercado Libre nunca notifica premios por SMS.",
        isReal: false
    },
    {
        id: 7,
        title: "Paquete retenido en aduana",
        owner: {
            name: "DHL Express",
            email: "+34 612 885 041"
        },
        date: new Date(),
        hour: "2:17pm",
        content:
            "DHL: Tu paquete está retenido. Paga $89 MXN de arancel para liberar tu envío hoy.",
        whyIsAnError:
            "Los aranceles reales se cobran en oficina o con el repartidor, nunca por enlace SMS. El número es de España.",
        isReal: false
    },
    {
        id: 8,
        title: "Acceso no autorizado a tu cuenta",
        owner: {
            name: "Banco Santander",
            email: "+52 55 9182 7704"
        },
        date: new Date(),
        hour: "11:58pm",
        content:
            "Santander: Se detectó un acceso no autorizado. Bloquea tu cuenta ahora para evitar pérdidas.",
        whyIsAnError:
            "El horario inusual (casi medianoche) y la presión para actuar de inmediato son señales clásicas de smishing. Los bancos reales usan códigos cortos.",
        isReal: false
    },
    {
        id: 9,
        title: "Confirmación de cita",
        owner: {
            name: "Clínica del IMSS",
            email: "IMSS"
        },
        date: new Date(),
        hour: "9:00am",
        content:
            "IMSS: Tu cita médica está confirmada para el 22/05 a las 10:30 en UMF 28. Presentate 10 min antes con tu CURP.",
        isReal: true
    },
    {
        id: 10,
        title: "Código de verificación",
        owner: {
            name: "WhatsApp",
            email: "WhatsApp"
        },
        date: new Date(),
        hour: "4:32pm",
        content:
            "Tu código de WhatsApp es 394-712. No lo compartas con nadie. 4sgLq1p5sV6",
        isReal: true
    },
    {
        id: 11,
        title: "Pago recibido",
        owner: {
            name: "Mercado Pago",
            email: "MercadoPago"
        },
        date: new Date(),
        hour: "1:05pm",
        content:
            "Mercado Pago: Recibiste un pago de $450.00 MXN de Carlos R. Ya está disponible en tu cuenta.",
        isReal: true
    }
]