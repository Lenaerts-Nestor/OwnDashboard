import type { MailSection } from "../../../types";

export const technicianOnLeaveSection = {
  id: "technician-on-leave",
  title: "Technician On Leave",
  subtitle: "When the assigned technician is unavailable",
  blocks: [
    {
      id: "technician-on-leave-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

Thank you for your update.
Our assigned technician is currently out of office. We can keep your case open and continue as soon as the technician is back, or we can transfer this case to another engineer.

Please let us know your preferred option.`,
    },
    {
      id: "technician-on-leave-nl",
      title: "Nederlands",
      text: `Beste {!Contact.FirstName},

Bedankt voor uw update.
Onze toegewezen technicus is momenteel afwezig. We kunnen uw case openhouden en verdergaan zodra de technicus terug is, of we kunnen de case overdragen aan een andere engineer.

Laat ons weten welke optie uw voorkeur heeft.`,
    },
    {
      id: "technician-on-leave-es",
      title: "Español",
      text: `Hola {!Contact.FirstName},

Gracias por su actualización.
Nuestro técnico asignado está actualmente fuera de la oficina. Podemos mantener su caso abierto y continuar en cuanto regrese, o podemos transferirlo a otro ingeniero.

Por favor, indíquenos su opción preferida.`,
    },
  ],
} satisfies MailSection;

export const troubleshootingBeforeRmaSection = {
  id: "troubleshooting-before-rma",
  title: "Troubleshooting Before RMA",
  subtitle: "Confirm checks before replacement request",
  blocks: [
    {
      id: "troubleshooting-before-rma-en",
      title: "English",
      text: `Before we proceed with replacement, please help us confirm:

- Current firmware/software version
- Power and network status
- Exact issue behavior and frequency
- Steps already tested

This helps us avoid unnecessary RMA and speed up resolution.`,
    },
    {
      id: "troubleshooting-before-rma-nl",
      title: "Nederlands",
      text: `Voor we doorgaan met vervanging, willen we graag het volgende bevestigen:

- Huidige firmware/softwareversie
- Stroom- en netwerkstatus
- Exact gedrag van het probleem en frequentie
- Reeds uitgevoerde stappen

Dit helpt ons onnodige RMA's te vermijden en de oplossing te versnellen.`,
    },
    {
      id: "troubleshooting-before-rma-es",
      title: "Español",
      text: `Antes de proceder con el reemplazo, por favor ayúdenos a confirmar:

- Versión actual de firmware/software
- Estado de alimentación y red
- Comportamiento exacto de la incidencia y frecuencia
- Pasos ya realizados

Esto nos ayuda a evitar un RMA innecesario y acelerar la resolución.`,
    },
  ],
} satisfies MailSection;

export const directRmaRequestSection = {
  id: "direct-rma-request",
  title: "Direct RMA Request",
  subtitle: "Use when customer directly asks for replacement",
  blocks: [
    {
      id: "direct-rma-request-en",
      title: "English",
      text: `Thank you for your request.

We understand you would like to proceed directly with an RMA.
Before approval, we may need a minimal verification checklist and unit details.
Once received, we will review and continue immediately.`,
    },
    {
      id: "direct-rma-request-nl",
      title: "Nederlands",
      text: `Bedankt voor uw aanvraag.

We begrijpen dat u direct wilt doorgaan met een RMA.
Voor goedkeuring hebben we mogelijk een minimale verificatiechecklist en de gegevens van het toestel nodig.
Zodra we die ontvangen, bekijken we dit meteen en gaan we verder.`,
    },
    {
      id: "direct-rma-request-es",
      title: "Español",
      text: `Gracias por su solicitud.

Entendemos que desea proceder directamente con un RMA.
Antes de la aprobación, es posible que necesitemos una lista mínima de verificación y los datos de la unidad.
Una vez recibidos, lo revisaremos y continuaremos de inmediato.`,
    },
  ],
} satisfies MailSection;

export const closeSuccessfulCaseSection = {
  id: "close-successful-case",
  title: "Close Successful Case",
  subtitle: "When customer confirms issue is solved",
  blocks: [
    {
      id: "close-successful-case-en",
      title: "English",
      text: `Great to hear everything is working correctly now.

With your confirmation, we will close this case.
If the issue returns, feel free to reply to this email and we will gladly assist you further.`,
    },
    {
      id: "close-successful-case-nl",
      title: "Nederlands",
      text: `Fijn om te horen dat alles nu correct werkt.

Met uw bevestiging zullen we deze case afsluiten.
Als het probleem terugkomt, mag u gerust op deze e-mail antwoorden en helpen we u graag verder.`,
    },
    {
      id: "close-successful-case-es",
      title: "Español",
      text: `Nos alegra saber que todo funciona correctamente ahora.

Con su confirmación, procederemos a cerrar este caso.
Si el problema vuelve, no dude en responder a este correo y con gusto le ayudaremos nuevamente.`,
    },
  ],
} satisfies MailSection;

export const missingSerialNumberSection = {
  id: "missing-serial-number",
  title: "Missing Serial Number",
  subtitle: "Request required unit identification",
  blocks: [
    {
      id: "missing-serial-number-en",
      title: "English",
      text: `To continue, we still need the unit serial number.

Could you please share the serial number and product name of the affected device?
Once received, we will proceed with the next step.`,
    },
    {
      id: "missing-serial-number-nl",
      title: "Nederlands",
      text: `Om verder te gaan hebben we nog steeds het serienummer van het toestel nodig.

Kunt u alstublieft het serienummer en de productnaam van het getroffen toestel doorgeven?
Zodra we die ontvangen, gaan we verder met de volgende stap.`,
    },
    {
      id: "missing-serial-number-es",
      title: "Español",
      text: `Para continuar, todavía necesitamos el número de serie de la unidad.

¿Podría compartirnos el número de serie y el nombre del producto del dispositivo afectado?
Una vez recibido, procederemos con el siguiente paso.`,
    },
  ],
} satisfies MailSection;

export const clientStillWorkingSection = {
  id: "client-still-working",
  title: "Client Still Working",
  subtitle: "Issue present but operations can continue",
  blocks: [
    {
      id: "client-still-working-en",
      title: "English",
      text: `Thanks for confirming the system is still operational.

Since this is not blocking current operations, we can continue in standard priority.
Please share convenient time slots if a live session is needed for deeper checks.`,
    },
    {
      id: "client-still-working-nl",
      title: "Nederlands",
      text: `Bedankt om te bevestigen dat het systeem nog operationeel is.

Omdat dit de huidige werking niet blokkeert, kunnen we verdergaan met standaardprioriteit.
Deel gerust enkele geschikte tijdstippen als een live sessie nodig is voor diepere controles.`,
    },
    {
      id: "client-still-working-es",
      title: "Español",
      text: `Gracias por confirmar que el sistema sigue operativo.

Como esto no bloquea las operaciones actuales, podemos continuar con prioridad estándar.
Comparta horarios convenientes si se necesita una sesión en vivo para revisiones más profundas.`,
    },
  ],
} satisfies MailSection;

export const afterChatFollowUpSection = {
  id: "after-chat-follow-up",
  title: "After Chat Follow Up",
  subtitle: "Summary email after live troubleshooting",
  blocks: [
    {
      id: "after-chat-follow-up-en",
      title: "English",
      text: `Thank you for your time during the troubleshooting session.

As discussed, we completed the checks and agreed on the next actions.
Please reply if anything changes, and we will continue from there.`,
    },
    {
      id: "after-chat-follow-up-nl",
      title: "Nederlands",
      text: `Bedankt voor uw tijd tijdens de troubleshooting sessie.

Zoals besproken hebben we de controles uitgevoerd en de volgende stappen afgestemd.
Laat ons gerust weten als er iets verandert, dan gaan we van daaruit verder.`,
    },
    {
      id: "after-chat-follow-up-es",
      title: "Español",
      text: `Gracias por su tiempo durante la sesión de diagnóstico.

Tal como se comentó, completamos las verificaciones y acordamos los siguientes pasos.
Por favor, responda si hay algún cambio y continuaremos desde allí.`,
    },
  ],
} satisfies MailSection;
