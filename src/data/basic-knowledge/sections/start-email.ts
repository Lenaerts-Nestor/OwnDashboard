import type { MailSection } from "../../../types";

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
