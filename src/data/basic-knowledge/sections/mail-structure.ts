import type { MailSection } from "../../../types";

export const mailStructureExtraSection = {
  id: "mail-structure-extra",
  title: "Mail Structure: Account Identification",
  subtitle:
    "Inform the customer to register their email and link a customer number",
  blocks: [
    {
      id: "mail-structure-extra-en",
      title: "English",
      text: `Hi {!Contact.FirstName},

We noticed that currently your email address ##### is not associated with a valid account number on our website.
To gain access to support and RMA resources identification is required.

Please register the email address and connect your customer number, this will only have to be done once.
Instructions to set up the account and have your customer number approved by your company admin can be found here:
https://community.crestron.com/s/article/id-1000579
`,
    },
    {
      id: "mail-structure-extra-nl",
      title: "Nederlands",
      text: `Beste {!Contact.FirstName},

Wij merken dat er geen geldig Crestron klanten nummer aan email address ##### is gekoppeld
Om RMA en technishe ondersteuning  te krijgen is identificatie vereist.

Daarvoor adviseren wij jou om jou email adres te koppelen aan jou klanten nummer, dit hoef je maar 1 keer te doen
Instructies voor het instellen van de account en het laten goedkeuren van je klantnummer door je bedrijfsadministratie vind je hier:
https://community.crestron.com/s/article/id-1000579
`,
    },
    {
      id: "mail-structure-extra-es",
      title: "Español",
      text: `Hola {!Contact.FirstName},

Hemos observado que actualmente su dirección de correo electrónico ##### no está asociada con un número de cuenta válido en nuestro sitio web.
Para acceder a los recursos de soporte y RMA se requiere identificación.

Por favor registre la dirección de correo electrónico y vincule su número de cliente; esto solo deberá hacerse una vez.
Las instrucciones para configurar la cuenta y que su número de cliente sea aprobado por el administrador de su empresa están aquí:
https://community.crestron.com/s/article/id-1000579
`,
    },
  ],
} satisfies MailSection;
