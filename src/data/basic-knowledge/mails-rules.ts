import type { ProductInfo } from "../../types";
import { askingRmaSection, generalGuidelinesSection } from "./content";

export const mailsRulesData = {
  id: "mails-rules",
  title: "Mails Rules",
  category: "Basic Knowledge",
  shortDescription: "Rules and phrasing for customer emails",
  pageType: "mail",
  tagLabel: "BK",
  tagColor: "bg-sky-500",
  problems: [],
  problemCategories: [],
  generalProblems: [],
  docLinks: [],
  mailContent: {
    sections: [generalGuidelinesSection, askingRmaSection],
  },
} satisfies ProductInfo;
