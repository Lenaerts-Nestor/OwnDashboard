import type { ProductInfo } from "../types";

export const tsr310Data: ProductInfo = {
  id: "TSR-310",
  title: "TSR-310",
  category: "Afstandsbediening", // ← corrected from "Sensoren"
  shortDescription: "Crestron draadloze touchscreen afstandsbediening",
  tagLabel: "TS",
  tagColor: "bg-orange-500",

  problems: [
    {
      id: "tsr310-p1",
      title:
        "Slow Wi-Fi reconnection after sleep / Trage Wi-Fi herverbinding na slaapstand",
      description:
        "Unit neemt 20–30 seconden om opnieuw verbinding te maken met Wi-Fi na het ontwaken uit de slaapstand.",
      refCode: "#TSR-001",
    },
    {
      id: "tsr310-p2",
      title: "Touchscreen unresponsive / Touchscreen reageert niet",
      description:
        "Aanraakscherm reageert niet — intermittent of volledig — na inschakelen of gebruik.",
      refCode: "#TSR-002",
    },
    {
      id: "tsr310-p3",
      title:
        '"Unable to load the user interface" error / Fout bij laden gebruikersinterface',
      description:
        'Scherm toont "unable to load the user interface" direct na het inschakelen. Kan optreden na een mislukte firmware-update of factory reset.',
      refCode: "#TSR-003",
    },
    {
      id: "tsr310-p4",
      title:
        "Volume buttons only control active endpoint / Volume knoppen sturen niet alle schermen aan",
      description:
        "In Crestron Home is de volume rocker gekoppeld aan het actieve audio-eindpunt en kan niet meerdere schermen tegelijk aansturen.",
      refCode: "#TSR-004",
    },
  ],

  triageQuestions: {
    problemSpecific: [
      "Wat zijn de huidige Standby-instellingen? Hint: Web interface -> Settings -> System Setup -> Standby. Noteer 'Docked Standby Time' en 'Undocked Suspended Time'. (Ref: #TSR-001)",
      "Wordt de unit voornamelijk gedokt of ongedokt gebruikt? Hint: Docked = Standby Time relevant. Undocked = Suspended Time relevant. Stel Undocked Suspended Time in op 0 om deep sleep te vermijden. (Ref: #TSR-001)",
      "Is er zichtbare fysieke schade aan de unit? Hint: Controleer scherm op barsten, vochtschade of indruksporen. Fysieke schade bepaalt of RMA van toepassing is. (Ref: #TSR-002)",
      "Is het touchscreen intermittent of constant niet-reagerend? Hint: Intermittent = vaak software/firmware. Constant na inschakelen = mogelijke hardware defect richting RMA. (Ref: #TSR-002)",
      "Treedt dit ook op bij andere units? Hint: Meerdere units met hetzelfde probleem wijst op een configuratie- of firmware-issue eerder dan hardware. (Ref: #TSR-002)",
      "Verschijnt de fout direct na het inschakelen? Hint: Onmiddellijk na boot kan wijzen op een corrupte image of mislukte factory reset. (Ref: #TSR-003)",
      "Is de unit zichtbaar in Toolbox en reageert ping? Hint: Als ping werkt maar UI niet laadt is het meestal een software issue. (Ref: #TSR-003)",
      "Wat was het resultaat van de factory reset? Hint: Zie de officiële TSR-310 Recovery Procedure. Als unit na reset niet meer opstart, richting RMA. (Ref: #TSR-003)",
    ],
    generalQuestions: [
      "Draait het systeem Crestron Home of een custom SIMPL/Smart Graphics programma? Hint: In Crestron Home is de volume rocker vast gekoppeld aan het actieve eindpunt. (Ref: #TSR-004)",
    ],
  },

  deviceManagement: {
    factoryReset: {
      status: "supported",
      instructions: [
        "Stap 1: Open de service-interface en navigeer naar Device Settings > Recovery.",
        "Stap 2: Kies 'Factory Reset', bevestig de waarschuwing en wacht op de herstart.",
        "Stap 3: Doorloop de basisconfiguratie opnieuw en controleer netwerkverbinding.",
      ],
    },
    firmwareUpdate: {
      status: "not_supported",
      instructions: [],
    },
  },

  docLinks: [
    {
      id: "tsr310-d1",
      title: "TSR-310 Product Page & Resources",
      subtitle: "Handleiding",
      type: "manual",
    },
    {
      id: "tsr310-d2",
      title: "TSR-310 Recovery Procedure",
      subtitle: "Handleiding",
      type: "manual",
    },
    {
      id: "tsr310-d3",
      title: "TSR-310 Supplemental Guide (Standby Settings)",
      subtitle: "Handleiding",
      type: "manual",
    },
    {
      id: "tsr310-d4",
      title: "Latest Firmware Download",
      subtitle: "Firmware",
      type: "firmware",
    },
    {
      id: "tsr310-d5",
      title: "Datasheet TSR-310",
      subtitle: "Datasheet",
      type: "datasheet",
    },
  ],
};
