import type { MailSection } from "../../../types";

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
      id: "first-follow-up-nl",
      title: "Nederlands",
      text: `Beste {!Contact.FirstName},

Ik wilde even opvolgen en controleren of alles nog steeds correct werkt. Heeft u nog hulp nodig met iets?
Als u vragen heeft of verdere ondersteuning nodig heeft, neem dan gerust contact op. Ik help u graag.`,
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
      id: "second-follow-up-nl",
      title: "Nederlands",
      text: `Beste {!Contact.FirstName},

Dit is ons tweede follow-up bericht over uw case met betrekking tot {!Case.Subject}.
Kunt u bevestigen of u nog verdere ondersteuning nodig heeft?
We zouden een update over de status van deze case op prijs stellen.`,
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
      id: "third-follow-up-nl",
      title: "Nederlands",
      text: `Beste {!Contact.FirstName},

Dit is ons derde en laatste poging om opvolging te geven over uw case.
Als we binnen enkele dagen niets van u horen, zullen we overgaan tot het sluiten van deze case.
Voel u vrij om het op elk moment te heropenen als u meer ondersteuning nodig heeft.`,
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
