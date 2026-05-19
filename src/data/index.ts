import type { ProductInfo } from "../types";
import {
  followUpCasesData,
  mailsRulesData,
  sendingMailSectionData,
} from "./basic-knowledge";
import { tsr310Data } from "./product-knowledge/tsr-310";
import { tsw1070Data } from "./product-knowledge/tsw-1070";
// Add later: import { pmc500Data } from "./pmc-500";

export const knowledgebaseData: ProductInfo[] = [
  tsr310Data,
  tsw1070Data,
  sendingMailSectionData,
  mailsRulesData,
  followUpCasesData,
  // pmc500Data,
];

// O(1) lookup map by product ID for quick detail rendering
export const knowledgebaseMap: Record<string, ProductInfo> = Object.fromEntries(
  knowledgebaseData.map((product) => [product.id, product]),
);
