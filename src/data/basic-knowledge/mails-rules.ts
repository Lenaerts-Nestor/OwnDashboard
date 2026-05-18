import type { ProductInfo } from "../../types";
import {
  afterChatFollowUpSection,
  clientStillWorkingSection,
  closeSuccessfulCaseSection,
  directRmaRequestSection,
  missingSerialNumberSection,
  technicianOnLeaveSection,
  troubleshootingBeforeRmaSection,
} from "./sections/rules";

export const mailsRulesData = {
  id: "mails-rules",
  title: "Daily Mails Response",
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
      technicianOnLeaveSection,
      troubleshootingBeforeRmaSection,
      directRmaRequestSection,
      closeSuccessfulCaseSection,
      missingSerialNumberSection,
      clientStillWorkingSection,

      afterChatFollowUpSection,
    ],
  },
} satisfies ProductInfo;
