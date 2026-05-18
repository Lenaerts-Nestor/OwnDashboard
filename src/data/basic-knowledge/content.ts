import type { MailSection } from "../../types";

export const startEmailSection = {
  id: "start-email",
  title: "Start Email",
  subtitle: "Use these templates to open a new case",
  blocks: [
    {
      id: "start-email-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

Thank you for contacting Crestron's True Blue Support Team!
Case {!Case.CaseNumber} has been created for this issue.

As discussed during our call,

For further reference, could you please provide us with a Project name or reference.

Should you have any other query, please do not hesitate to contact us. Thank you.`,
    },
    {
      id: "start-email-nl",
      title: "Nederlands",
      text: `Beste {!Contact.FirstName},

Bedankt om contact op te nemen met Crestron's True Blue Support Team!
Case {!Case.CaseNumber} werd aangemaakt voor dit probleem.

Zoals besproken aan de telefoon/Zoals telefonisch besproken,

Voor verdere referentie, zou u ons een projectnaam of referentie kunnen bezorgen

Twijfel zeker niet om ons te contacteren indien u verdere vragen heeft. Alvast bedankt.`,
    },
    {
      id: "start-email-es",
      title: "Español",
      text: `Estimado/a {!Contact.FirstName},

Gracias por ponerse en contacto con el equipo de soporte True Blue de Crestron.
El caso {!Case.CaseNumber} ha sido creado para este problema.

Tal como se habló por teléfono,

Para futuras referencias, ¿podría facilitarnos un nombre o referencia de proyecto?

No dude en contactarnos si tiene más preguntas. Muchas gracias.`,
    },
  ],
} satisfies MailSection;

export const firstFollowUpSection = {
  id: "first-follow-up",
  title: "First Follow Up",
  subtitle: "Use this after the first reminder",
  blocks: [
    {
      id: "first-follow-up-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

I just wanted to follow up and check if everything is still working correctly. Do you need help with anything else?
If you have any questions or need further assistance, please feel free to reach out. I'll be happy to help.`,
    },
    {
      id: "first-follow-up-es",
      title: "Español",
      text: `Buenas {!Contact.FirstName},

Solo quería hacer un seguimiento y confirmar si todo sigue funcionando correctamente. ¿Necesita ayuda con algo más?

Si tiene alguna pregunta o necesita más asistencia, no dude en contactarnos. Con gusto le ayudaré.`,
    },
  ],
} satisfies MailSection;

export const secondFollowUpSection = {
  id: "second-follow-up",
  title: "Second Follow Up",
  subtitle: "Use this when the first follow-up is still unanswered",
  blocks: [
    {
      id: "second-follow-up-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

This is our second attempt to follow up on your case regarding the {!Case.Subject}.
Could you kindly confirm if you still require any further assistance?
We'd appreciate an update on the status of this case.`,
    },
    {
      id: "second-follow-up-es",
      title: "Español",
      text: `Buenas {!Contact.FirstName},

¿Podría confirmar amablemente si aún necesita asistencia adicional?
Agradeceríamos una actualización sobre el estado de este caso.`,
    },
  ],
} satisfies MailSection;

export const thirdFollowUpSection = {
  id: "third-follow-up",
  title: "Third Follow Up",
  subtitle: "Final reminder before closing the case",
  blocks: [
    {
      id: "third-follow-up-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

This is our third and final attempt to follow up on your case.
If we do not hear back from you within the next few days, we will proceed to close this case.
Please feel free to reopen it at any time if you need further assistance.`,
    },
    {
      id: "third-follow-up-es",
      title: "Español",
      text: `Buenas {!Contact.FirstName},

Este es nuestro tercer y último intento de seguimiento de su caso.
Si no recibimos respuesta en los próximos días, procederemos a cerrar este caso.
No dude en reabrirlo en cualquier momento si necesita más asistencia.`,
    },
  ],
} satisfies MailSection;

export const generalGuidelinesSection = {
  id: "general-guidelines",
  title: "General Guidelines",
  subtitle: "Keep the question focused and easy to answer",
  blocks: [
    {
      id: "general-guidelines-body",
      title: "Guidelines",
      text: `- Keep the question simple and specifiek
- Around 3-5 question max, to avoid the client to only focus on our question and deviate from the issue.`,
    },
  ],
} satisfies MailSection;

export const askingRmaSection = {
  id: "asking-rma",
  title: "ASKING RMA",
  subtitle: "Use this when the case needs return authorization details",
  blocks: [
    {
      id: "asking-rma-body",
      title: "Based on the email situation",
      text: `In case we proceed with an RMA, would you be able to provide us with the following RMA information:
To proceed with an RMA, could you please provide the following information for the unit:

Serial Number:
Product name:
Issue description:
Project name/reference:
Delivery/return address confirmation
  • Company name:
  • Delivery contact:
  • Address:
  • City:
  • Postal Code:
  • Country:`,
    },
  ],
} satisfies MailSection;
