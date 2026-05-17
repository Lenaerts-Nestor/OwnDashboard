import type { ProductInfo } from "../types";
import { tsr310Data } from "./tsr-310";
import { tsw1070Data } from "./tsw-1070";
// Later toevoegen: import { pmc500Data } from "./pmc-500";

export const knowledgebaseData: ProductInfo[] = [
  tsr310Data,
  tsw1070Data,
  // pmc500Data,
];

// Lookup map voor O(1) toegang op ID — handig voor de detail view
export const knowledgebaseMap: Record<string, ProductInfo> = Object.fromEntries(
  knowledgebaseData.map((product) => [product.id, product]),
);
