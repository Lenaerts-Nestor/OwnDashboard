import type { ProductInfo } from "../../types";
import {
  afterChatFollowUpSection,
  askingRmaSection,
  clientStillWorkingSection,
  closeSuccessfulCaseSection,
  directRmaRequestSection,
  generalGuidelinesSection,
  masterInstallerLoginSection,
  missingSerialNumberSection,
  technicianOnLeaveSection,
  troubleshootingBeforeRmaSection,
} from "./content";

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
    sections: [
      generalGuidelinesSection,
      askingRmaSection,
      technicianOnLeaveSection,
      troubleshootingBeforeRmaSection,
      directRmaRequestSection,
      closeSuccessfulCaseSection,
      missingSerialNumberSection,
      clientStillWorkingSection,
      masterInstallerLoginSection,
      afterChatFollowUpSection,
    ],
  },
} satisfies ProductInfo;
