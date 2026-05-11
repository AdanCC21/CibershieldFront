import type { TipEntity } from "@/entities/tip";

export const TipsList: TipEntity[] = [
    {
        "id": 1,
        "title": "Verifica el remitente con cuidado",
        "desc": "Revisa la dirección de correo completa, no solo el nombre visible. Los atacantes usan dominios similares como 'paypa1.com' en lugar de 'paypal.com'.",
        "tipType": "email"
    },
    {
        "id": 2,
        "title": "No hagas clic en enlaces sospechosos",
        "desc": "Pasa el cursor sobre el enlace antes de hacer clic para ver la URL real en la barra de estado. Si no coincide con el sitio esperado, no entres.",
        "tipType": "email"
    },
    {
        "id": 3,
        "title": "Desconfía de la urgencia extrema",
        "desc": "Mensajes como 'tu cuenta será suspendida en 24h' buscan que actúes sin pensar. Las empresas legítimas no suelen presionar así.",
        "tipType": "email"
    },
    {
        "id": 4,
        "title": "Revisa errores ortográficos y gramaticales",
        "desc": "Los correos de phishing frecuentemente contienen faltas de ortografía, frases extrañas o traducciones mal hechas que delatan su origen fraudulento.",
        "tipType": "email"
    },
    {
        "id": 5,
        "title": "No descargues archivos adjuntos inesperados",
        "desc": "Los archivos .exe, .zip, .docm o .pdf pueden contener malware. Si no esperabas el archivo, confirma con el remitente por otro canal antes de abrirlo.",
        "tipType": "email"
    },
    {
        "id": 6,
        "title": "Activa la autenticación en dos pasos",
        "desc": "Aunque te roben la contraseña, el 2FA bloquea el acceso no autorizado. Úsalo en todas las cuentas importantes como correo, banco y redes sociales.",
        "tipType": "email"
    },
    {
        "id": 7,
        "title": "Verifica solicitudes de datos sensibles",
        "desc": "Ningún banco o servicio legítimo te pedirá contraseñas, números de tarjeta o datos personales por correo electrónico.",
        "tipType": "email"
    },
    {
        "id": 8,
        "title": "Usa un filtro anti-spam actualizado",
        "desc": "Configura o activa el filtro de spam de tu proveedor de correo y mantén actualizado tu cliente de correo para bloquear mensajes maliciosos.",
        "tipType": "email"
    },
    {
        "id": 9,
        "title": "Confirma solicitudes fuera de lo normal",
        "desc": "Si un correo de un colega o jefe te pide algo inusual (transferencias, datos de acceso), llámale directamente para verificar antes de actuar.",
        "tipType": "email"
    },
    {
        "id": 10,
        "title": "Accede directo a los sitios web",
        "desc": "En lugar de clicar enlaces del correo, escribe la URL del banco o servicio directamente en el navegador o usa tus marcadores guardados.",
        "tipType": "email"
    },
    {
        "id": 11,
        "title": "Revisa que el sitio use HTTPS",
        "desc": "Antes de introducir cualquier dato, asegúrate de que la URL empiece por 'https://' y que el certificado corresponda al dominio correcto.",
        "tipType": "email"
    },
    {
        "id": 12,
        "title": "Mantén actualizados tus programas",
        "desc": "Las vulnerabilidades de software son explotadas para ejecutar código malicioso. Actualiza tu sistema operativo, navegador y antivirus regularmente.",
        "tipType": "email"
    },
    {
        "id": 13,
        "title": "Aprende a identificar el phishing visual",
        "desc": "Los atacantes copian logos e interfaces de marcas conocidas. Desconfía si el diseño del correo se ve distorsionado, pixelado o diferente al habitual.",
        "tipType": "email"
    },
    {
        "id": 14,
        "title": "No respondas a correos sospechosos",
        "desc": "Responder confirma que tu dirección está activa, lo que puede generar más ataques. Si dudas, ignora y reporta el correo como phishing.",
        "tipType": "email"
    },
    {
        "id": 15,
        "title": "Usa un gestor de contraseñas",
        "desc": "Un buen gestor de contraseñas solo autocompleta en el dominio correcto, lo que te protege automáticamente si accidentalmente abres un sitio falso.",
        "tipType": "email"
    },
    {
        "id": 16,
        "title": "No hagas clic en enlaces de SMS no solicitados",
        "desc": "Si recibes un SMS con un enlace que no esperabas, nunca lo abras. Visita el sitio oficial directamente desde el navegador para verificar cualquier alerta.",
        "tipType": "sms"
    },
    {
        "id": 17,
        "title": "Verifica el número del remitente",
        "desc": "Los estafadores usan números similares al de empresas reales o suplantan el ID del remitente. Confirma siempre por otro canal si el mensaje te pide actuar.",
        "tipType": "sms"
    },
    {
        "id": 18,
        "title": "Desconfía de premios o recompensas inesperadas",
        "desc": "'Has ganado un iPhone, haz clic aquí' es una señal clásica de smishing. Si no participaste en ningún sorteo, es una trampa.",
        "tipType": "sms"
    },
    {
        "id": 19,
        "title": "No compartas códigos OTP por SMS",
        "desc": "Ninguna empresa te pedirá que compartas un código de verificación que acabas de recibir. Si alguien lo solicita, es un intento de tomar el control de tu cuenta.",
        "tipType": "sms"
    },
    {
        "id": 20,
        "title": "Confirma alertas de tu banco directamente",
        "desc": "Si recibes un SMS diciendo que tu tarjeta fue bloqueada, llama al número oficial del banco (el del reverso de tu tarjeta), no al que aparece en el mensaje.",
        "tipType": "sms"
    },
    {
        "id": 21,
        "title": "Desconfía de mensajes de paquetes no esperados",
        "desc": "Los SMS falsos de mensajería ('tu paquete está retenido, paga aquí') son muy comunes. Verifica el estado de tus envíos directamente en el sitio del transportista.",
        "tipType": "sms"
    },
    {
        "id": 22,
        "title": "No descargues apps desde enlaces de SMS",
        "desc": "Los enlaces en SMS pueden llevar a aplicaciones maliciosas que no están en tiendas oficiales. Descarga siempre desde Google Play o App Store directamente.",
        "tipType": "sms"
    },
    {
        "id": 23,
        "title": "Activa el filtro de spam en tu teléfono",
        "desc": "Tanto iOS como Android ofrecen opciones para silenciar y filtrar SMS de remitentes desconocidos. Actívalas en la configuración de mensajes.",
        "tipType": "sms"
    },
    {
        "id": 24,
        "title": "No llames a números desconocidos del SMS",
        "desc": "Si el SMS te pide llamar a un número, búscalo primero en internet. Los estafadores usan números falsos con agentes preparados para robar tus datos.",
        "tipType": "sms"
    },
    {
        "id": 25,
        "title": "Reporta mensajes de smishing",
        "desc": "En México puedes reportar SMS fraudulentos a la CONDUSEF o al número de atención de tu operador. Ayudas a proteger a otros usuarios.",
        "tipType": "sms"
    },
    {
        "id": 26,
        "title": "Protege tu número de teléfono",
        "desc": "No publiques tu número en redes sociales ni lo compartas innecesariamente. Cuanto menos expuesto esté, menos ataques recibirás.",
        "tipType": "sms"
    },
    {
        "id": 27,
        "title": "Revisa bien las URLs cortas",
        "desc": "Los SMS de phishing suelen usar acortadores de URL para ocultar el destino real. Usa servicios como 'unshorten.it' para ver a dónde lleva el enlace.",
        "tipType": "sms"
    },
    {
        "id": 28,
        "title": "Mantén el sistema de tu móvil actualizado",
        "desc": "Las actualizaciones de iOS y Android corrigen vulnerabilidades de seguridad que podrían ser explotadas si haces clic en un enlace malicioso.",
        "tipType": "sms"
    },
    {
        "id": 29,
        "title": "Desconfía del lenguaje alarmista",
        "desc": "Frases como 'tu línea será cortada hoy' o 'deuda urgente' están diseñadas para provocar pánico. Tómate un momento para pensar antes de reaccionar.",
        "tipType": "sms"
    },
    {
        "id": 30,
        "title": "Educa a personas mayores de tu entorno",
        "desc": "Los adultos mayores son el principal objetivo del smishing. Enséñales a no responder ni clicar en SMS sospechosos y a consultarte antes de actuar.",
        "tipType": "sms"
    }
]