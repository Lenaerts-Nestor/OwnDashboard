import type { ProductInfo } from "../types";

export const tsw1070Data: ProductInfo = {
  id: "TSW-1070",
  title: "TSW-1070",
  category: "Netwerk",
  shortDescription: "Managed industrial ethernet switch met 10 poorten",
  tagLabel: "TW",
  tagColor: "bg-sky-600",

  problems: [
    {
      id: "tsw1070-p1",
      title: "Port flapping detectie",
      description: "Switch poort wisselt continu tussen up en down staat",
      refCode: "#150301",
    },
    {
      id: "tsw1070-p2",
      title: "VLAN configuratie verlies na reboot",
      description: "Alle VLAN instellingen gaan verloren na stroomuitval",
      refCode: "#150422",
    },
    {
      id: "tsw1070-p3",
      title: "Web interface niet bereikbaar",
      description: "Management UI geeft timeout op poort 443",
      refCode: "#150589",
    },
  ],

  triageQuestions: {
    problemSpecific: [
      "Is de NVRAM backup ingeschakeld in de instellingen? Hint: System > Storage > Persistent Config moet op Enabled staan. (Ref: #150422)",
      "Is het management VLAN correct geconfigureerd? Hint: VLAN 1 mag niet verwijderd zijn, anders blokkeert de web interface. (Ref: #150589)",
    ],
    generalQuestions: [
      "Welke firmware versie draait de switch? Hint: Controleer via CLI met 'show version'; minimum vereiste is v3.4.1. (Ref: #150301)",
    ],
  },

  deviceManagement: {
    factoryReset: {
      status: "not_supported",
      instructions: [],
    },
    firmwareUpdate: {
      status: "not_supported",
      instructions: [],
    },
  },

  docLinks: [
    {
      id: "tsw1070-d1",
      title: "TSW-1070 Beheerhandleiding",
      subtitle: "Handleiding",
      type: "manual",
    },
    {
      id: "tsw1070-d2",
      title: "VLAN Configuratie Masterclass",
      subtitle: "Video",
      type: "video",
    },
    {
      id: "tsw1070-d3",
      title: "Firmware v3.5.2 Download",
      subtitle: "Firmware",
      type: "firmware",
    },
    {
      id: "tsw1070-d4",
      title: "Datasheet TSW-1070",
      subtitle: "Datasheet",
      type: "datasheet",
    },
  ],
};
