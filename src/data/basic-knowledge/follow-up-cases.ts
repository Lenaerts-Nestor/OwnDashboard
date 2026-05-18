import type { ProductInfo } from "../../types";
import {
  firstFollowUpSection,
  secondFollowUpSection,
  thirdFollowUpSection,
} from "./sections/follow-ups";

export const followUpCasesData = {
  id: "follow-up-cases",
  title: "Follow Up Cases",
  category: "Basic Knowledge",
  shortDescription: "Follow-up templates for open support cases",
  pageType: "mail",
  tagLabel: "BK",
  tagColor: "bg-sky-500",
  problems: [],
  problemCategories: [],
  generalProblems: [],
  docLinks: [],
  mailContent: {
    sections: [
      firstFollowUpSection,
      secondFollowUpSection,
      thirdFollowUpSection,
    ],
  },
} satisfies ProductInfo;
