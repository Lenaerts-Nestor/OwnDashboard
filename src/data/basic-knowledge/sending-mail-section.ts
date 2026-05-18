import type { ProductInfo } from "../../types";
import { startEmailSection } from "./sections/start-email";

export const sendingMailSectionData = {
  id: "sending-mail-section",
  title: "Sending Mail Section",
  category: "Basic Knowledge",
  shortDescription: "Email templates and rules for customer communication",
  pageType: "mail",
  tagLabel: "BK",
  tagColor: "bg-sky-500",
  problems: [],
  problemCategories: [],
  generalProblems: [],
  docLinks: [],
  mailContent: {
    sections: [startEmailSection],
  },
} satisfies ProductInfo;
