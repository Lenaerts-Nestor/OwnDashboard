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

export const technicianOnLeaveSection = {
  id: "technician-on-leave",
  title: "Technician On Leave",
  subtitle: "Use this when the customer cannot continue the investigation",
  blocks: [
    {
      id: "technician-on-leave-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

Since you do not need any follow-up from us at this time, it would be best to temporarily close this case until you can continue the investigation.

If you need further assistance with this case, you can easily reopen it by replying to this email.`,
    },
    {
      id: "technician-on-leave-nl",
      title: "Dutch",
      text: `Beste {!Contact.FirstName},

Aangezien u op dit moment geen verdere opvolging van ons nodig heeft, is het het beste om deze case tijdelijk af te sluiten totdat u het onderzoek kunt voortzetten.

Als u later nog hulp nodig heeft met deze case, kunt u deze eenvoudig heropenen door op deze e-mail te antwoorden.`,
    },
    {
      id: "technician-on-leave-es",
      title: "Spanish",
      text: `Hola {!Contact.FirstName},

Dado que por el momento no necesita más seguimiento por nuestra parte, lo mejor sería cerrar este caso temporalmente hasta que pueda continuar con la investigación.

Si necesita más ayuda con este caso, puede reabrirlo fácilmente respondiendo a este correo.`,
    },
  ],
} satisfies MailSection;

export const troubleshootingBeforeRmaSection = {
  id: "troubleshooting-before-rma",
  title: "Troubleshooting Before RMA",
  subtitle: "Use this when customer asks for direct replacement too early",
  blocks: [
    {
      id: "troubleshooting-before-rma-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

We want to avoid an NPF (No Problem Found) on this unit and thereby reduce costs for you. That's why we ask so many troubleshooting questions before proceeding with an RMA.`,
    },
    {
      id: "troubleshooting-before-rma-nl",
      title: "Dutch",
      text: `Beste {!Contact.FirstName},

We willen een NPF (No Problem Found) op deze unit vermijden en zo de kosten aan uw kant beperken. Daarom stellen we zoveel vragen tijdens de troubleshooting voordat we een RMA opstarten.`,
    },
    {
      id: "troubleshooting-before-rma-es",
      title: "Spanish",
      text: `Hola {!Contact.FirstName},

Queremos evitar un NPF (No Problem Found) en esta unidad y así reducir sus costos. Por esta razón hacemos tantas preguntas de troubleshooting antes de proceder con un RMA.`,
    },
  ],
} satisfies MailSection;

export const directRmaRequestSection = {
  id: "direct-rma-request",
  title: "Client Ignores Troubleshooting",
  subtitle: "Use this when the customer still wants immediate RMA",
  blocks: [
    {
      id: "direct-rma-request-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

Could you please provide two pictures of the damaged HDMI ports on the units?

I understand that you would prefer to proceed directly with an RMA for the units. Please be aware that if you choose to go forward with the RMA without finishing troubleshooting, additional costs may apply.

Please advise how you wish to proceed.

Should you have any other query, please do not hesitate to contact us. Thank you.`,
    },
    {
      id: "direct-rma-request-nl",
      title: "Dutch",
      text: `Beste {!Contact.FirstName},

Kunt u alstublieft twee foto's bezorgen van de beschadigde HDMI-poorten van de units?

Ik begrijp dat u liever rechtstreeks doorgaat met een RMA voor de units. Houd er rekening mee dat er extra kosten kunnen gelden als u verdergaat met de RMA zonder de troubleshooting af te ronden.

Laat ons alstublieft weten hoe u wilt doorgaan.

Mocht u nog andere vragen hebben, aarzel dan niet om contact met ons op te nemen. Dank u wel.`,
    },
    {
      id: "direct-rma-request-es",
      title: "Spanish",
      text: `Hola {!Contact.FirstName},

¿Podría enviarnos dos fotos de los puertos HDMI dañados de las unidades?

Entiendo que prefiere proceder directamente con un RMA para las unidades. Tenga en cuenta que, si decide continuar con el RMA sin completar el troubleshooting, pueden aplicarse costos adicionales.

Por favor, indíquenos cómo desea proceder.

Si tiene alguna otra consulta, no dude en contactarnos. Gracias.`,
    },
  ],
} satisfies MailSection;

export const closeSuccessfulCaseSection = {
  id: "close-successful-case",
  title: "Closing A Successful Case",
  subtitle: "Use this when the issue is solved and no more support is needed",
  blocks: [
    {
      id: "close-successful-case-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

Thanks for the update. I will go ahead and mark the case as solved.

If you require further assistance, please do not hesitate to contact us again. Hope you have a great day!`,
    },
    {
      id: "close-successful-case-nl",
      title: "Dutch",
      text: `Beste {!Contact.FirstName},

Bedankt voor de update. Ik zal de case nu als opgelost markeren.

Als u verdere hulp nodig heeft, aarzel dan niet om opnieuw contact met ons op te nemen. Ik wens u nog een fijne dag!`,
    },
    {
      id: "close-successful-case-es",
      title: "Spanish",
      text: `Hola {!Contact.FirstName},

Gracias por la actualización. Procederé a marcar el caso como resuelto.

Si necesita asistencia adicional, no dude en ponerse en contacto con nosotros nuevamente. ¡Le deseo que tenga un excelente día!`,
    },
  ],
} satisfies MailSection;

export const missingSerialNumberSection = {
  id: "missing-serial-number",
  title: "Missing Serial Number",
  subtitle: "Use this when RMA information is shared without SN",
  blocks: [
    {
      id: "missing-serial-number-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

Thank you for the RMA delivery information.

Do you have the serial number for this device so we can perform the warranty check?

If we do not have the serial number, we can still proceed with issuing an RMA, but it would be handled as a repair RMA. With the serial number, and if the device is within warranty, this may be an advanced replacement RMA (the RMA team can confirm this once we have the serial number).`,
    },
    {
      id: "missing-serial-number-nl",
      title: "Dutch",
      text: `Beste {!Contact.FirstName},

Bedankt voor de RMA-leveringsinformatie.

Heeft u het serienummer van dit toestel, zodat we de garantiecheck kunnen uitvoeren?

Als we het serienummer niet hebben, kunnen we nog steeds een RMA opstarten, maar dan wordt het een repair RMA. Met het serienummer, en als het toestel binnen garantie valt, kan dit mogelijk een advanced replacement RMA worden (het RMA-team kan dit bevestigen zodra we het serienummer hebben).`,
    },
    {
      id: "missing-serial-number-es",
      title: "Spanish",
      text: `Hola {!Contact.FirstName},

Gracias por la información de entrega del RMA.

¿Tiene el número de serie de este dispositivo para que podamos realizar la verificación de garantía?

Si no contamos con el número de serie, aún podemos emitir un RMA, pero sería un RMA de reparación. Con el número de serie, y si el equipo está en garantía, podría ser un RMA con reemplazo avanzado (el equipo de RMA podrá confirmarlo una vez recibamos el número de serie).`,
    },
  ],
} satisfies MailSection;

export const clientStillWorkingSection = {
  id: "client-still-working",
  title: "Client Still Working On Task",
  subtitle: "Use this when the customer asks for more time",
  blocks: [
    {
      id: "client-still-working-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

Understood. We will wait for your responses.

Thank you for keeping us informed. If you have any further questions, please do not hesitate to contact us.`,
    },
    {
      id: "client-still-working-nl",
      title: "Dutch",
      text: `Beste {!Contact.FirstName},

Begrepen. We wachten op uw terugkoppeling.

Bedankt om ons op de hoogte te houden. Als u nog vragen heeft, aarzel dan niet om contact met ons op te nemen.`,
    },
    {
      id: "client-still-working-es",
      title: "Spanish",
      text: `Hola {!Contact.FirstName},

Entendido. Quedamos atentos a sus respuestas.

Gracias por mantenernos informados. Si tiene alguna otra pregunta, no dude en contactarnos.`,
    },
  ],
} satisfies MailSection;

export const masterInstallerLoginSection = {
  id: "master-installer-login",
  title: "Master Installer Login Reminder",
  subtitle:
    "Use this when customer reports Master Installer access or install issues",
  blocks: [
    {
      id: "master-installer-login-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

Could you please confirm that you are logged in with a valid registered Crestron account in Master Installer?

You can also visit the link, go to "Resources", then "Software & Firmware", and install the required components individually.`,
    },
    {
      id: "master-installer-login-nl",
      title: "Dutch",
      text: `Beste {!Contact.FirstName},

Kunt u bevestigen dat u in Master Installer bent aangemeld met een geldige geregistreerde Crestron-account?

U kunt ook naar de link gaan, vervolgens naar "Resources" en daarna "Software & Firmware", en de nodige componenten afzonderlijk installeren.`,
    },
    {
      id: "master-installer-login-es",
      title: "Spanish",
      text: `Hola {!Contact.FirstName},

¿Podría confirmar que está conectado en Master Installer con una cuenta de Crestron válida y registrada?

También puede visitar el enlace, ir a "Resources", luego a "Software & Firmware", e instalar los componentes necesarios de forma individual.`,
    },
  ],
} satisfies MailSection;

export const afterChatFollowUpSection = {
  id: "after-chat-follow-up",
  title: "After Chat Follow Up",
  subtitle: "Use this after a chat session to confirm status",
  blocks: [
    {
      id: "after-chat-follow-up-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

I just wanted to follow up and check if everything is still working correctly on your Crestron system.

If you have any questions or need further assistance, please feel free to reach out. I'll be happy to help.`,
    },
    {
      id: "after-chat-follow-up-nl",
      title: "Dutch",
      text: `Beste {!Contact.FirstName},

Ik wilde even opvolgen en nagaan of alles nog correct werkt op uw Crestron-systeem.

Als u nog vragen heeft of verdere hulp nodig heeft, mag u ons altijd contacteren. We helpen u graag verder.`,
    },
    {
      id: "after-chat-follow-up-es",
      title: "Spanish",
      text: `Hola {!Contact.FirstName},

Quería hacer seguimiento y confirmar si todo sigue funcionando correctamente en su sistema Crestron.

Si tiene alguna pregunta o necesita más ayuda, no dude en contactarnos. Estaré encantado de ayudarle.`,
    },
  ],
} satisfies MailSection;
