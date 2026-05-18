import type { ProductInfo } from "../../types";
import { startEmailSection } from "./sections/start-email";
import { mailStructureExtraSection } from "./sections/mail-structure";

export const sendingMailSectionData = {
  id: "sending-mail-section",
  title: "Mail Structure and Extra's",
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
    sections: [startEmailSection, mailStructureExtraSection],
  },
} satisfies ProductInfo;
