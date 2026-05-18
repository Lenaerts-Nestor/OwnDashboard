# Project Context: Crestron Support Knowledgebase Dashboard

## 1. Mijn Rol & Jobinhoud

- **Functie:** Eerstelijns Technical Support Engineer bij Crestron.
- **Kerntaak:** Het diagnosticeren, classificeren en oplossen van complexe technische incidenten met betrekking tot netwerk-, hardware- en software-interfaces van Crestron-apparatuur (zoals touchscreens, remotes en controllers).
- **Workflow-prioriteit:** Tijdens drukke of lange shifts moet ik snel patronen herkennen, de juiste kwalificatie- en triagevragen aan klanten stellen, en efficiënt documentatie kunnen raadplegen om de "Mean Time to Resolution" (MTTR) te verlagen.

## 2. Wat ik probeer te bereiken met dit Project

Het doel van dit project is het bouwen van een lokaal, supersnel en efficiënt **Command Center Dashboard** dat mijn dagelijkse professionele workflow maximaal stroomlijnt.

Het dashboard fungeert als een interactieve, geavanceerde kennisbank.

### Belangrijkste Functionaliteiten & UI Eisen:

- **Master-Detail Lay-out:** Een gecategoriseerde sidebar aan de linkerkant om bliksemsnel tussen Crestron-producten (bijv. TSR-310, TSW-1070) te schakelen.
- **Warm Minimalistisch Thema:** Een rustig, oogvriendelijk kleurenpalet gebaseerd op 'warm stone' en subtiele koraal/rode accenten om oogvermoeidheid tijdens lange shifts te voorkomen.
- **Gecategoriseerde Triage & Click-to-Copy:** Troubleshooting-vragen zijn opgesplitst in "Probleemspecifiek" en "Algemeen". Elke vraag of instructie kan met één klik direct naar het klembord worden gekopieerd (`navigator.clipboard`) om snel in klantsystemen of tickets te plakken.
- **Slim Apparaat Beheer (Accordions):** Een sectie voor Factory Resets en Firmware Updates. Als een apparaat slechts één methode heeft, toont de UI direct de stappen zonder onnodige titels. Als er meerdere methoden zijn (bijv. via USB én via Web UI), splitst de UI dit automatisch netjes op.
- **100% Statische Architectuur:** Geen backend, geen databases. De applicatie draait volledig client-side (React, TypeScript, Tailwind CSS). Alle data wordt modulair ingeladen vanuit individuele productbestanden in de map `src/data/`.

## 3. Instructies voor AI Agents

- **Architectuur:** Respecteer altijd de scheiding tussen data (`src/data/`) en UI-logica. Wijzig nooit de UI-componenten als er alleen data toegevoegd moet worden.
- **Styling:** Gebruik uitsluitend Tailwind CSS utility-klassen. Genereer geen custom of inline CSS. Maintain de 'warm stone' esthetiek.
- **Type-Safety:** Alle data-modellen moeten strikt voldoen aan de interfaces gedefinieerd in `src/types/index.ts`.
