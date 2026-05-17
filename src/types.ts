export type ProductCategory =
  | "Sensoren"
  | "Netwerk"
  | "Controllers"
  | "Aandrijvingen"
  | "Visualisatie"
  | "Afstandsbediening";

export type DocLinkType = "manual" | "video" | "firmware" | "datasheet";

export interface Problem {
  id: string;
  title: string;
  description: string;
  refCode: string;
}

export interface DocLink {
  id: string;
  title: string;
  subtitle: string;
  type: DocLinkType;
}

export interface TriageQuestions {
  problemSpecific?: string[];
  generalQuestions?: string[];
}

export type DeviceManagementStatus = "supported" | "not_supported";

export interface DeviceManagementOption {
  status: DeviceManagementStatus;
  instructions: string[];
}

export interface DeviceManagement {
  factoryReset: DeviceManagementOption;
  firmwareUpdate: DeviceManagementOption;
}

// The single "shape" every product file must conform to
export interface ProductInfo {
  // Sidebar
  id: string;
  title: string;
  category: ProductCategory;
  shortDescription: string;
  // Header
  tagLabel: string;
  tagColor: string;
  // Content
  problems: Problem[];
  triageQuestions: TriageQuestions;
  deviceManagement?: DeviceManagement;
  docLinks: DocLink[];
}
