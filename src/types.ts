export type ProductCategory =
  | "Sensors"
  | "Network"
  | "Controllers"
  | "Drives"
  | "Visualization"
  | "Remote Control"
  | "Basic Knowledge";

export type DocLinkType = "manual" | "video" | "firmware" | "datasheet";

export interface Problem {
  id: string;
  title: string;
  description: string;
  refCode: string;
}

export type ProblemSeverity = "Low" | "Medium" | "High" | "Critical";

export interface ProblemStep {
  id: string;
  title: string;
  description: string;
  refCode: string;
  path?: string[];
}

export interface ProblemIssue {
  id: string;
  title: string;
  caseId: string;
  severity: ProblemSeverity;
  casesPer30d: number;
  steps: ProblemStep[];
}

export interface ProblemCategoryGroup {
  id: string;
  title: string;
  issues: ProblemIssue[];
}

export interface DocLink {
  id: string;
  title: string;
  subtitle: string;
  type: DocLinkType;
  url: string;
}

export type GeneralProblemKind =
  | "battery"
  | "network"
  | "display"
  | "software"
  | "system";

export interface GeneralProblemCheck {
  id: string;
  title: string;
  prompt: string;
  refCode: string;
  path?: string[];
}

export interface GeneralProblemCategory {
  id: string;
  title: string;
  kind: GeneralProblemKind;
  checks: GeneralProblemCheck[];
}

export type DeviceManagementStatus = "supported" | "not_supported";

export interface ManagementMethod {
  methodTitle?: string; // Optional: e.g., "Via Toolbox (PUF)" or "Via Web Interface"
  steps: string[]; // The actual step-by-step instructions
}

export interface DeviceManagementOption {
  status: DeviceManagementStatus;
  methods: ManagementMethod[]; // Replaces instructions: string[]
}

export interface DeviceManagement {
  factoryReset: DeviceManagementOption;
  firmwareUpdate: DeviceManagementOption;
}

export interface MailBlock {
  id: string;
  title: string;
  text: string;
}

export interface MailSection {
  id: string;
  title: string;
  subtitle?: string;
  blocks: MailBlock[];
}

export interface MailPageContent {
  sections: MailSection[];
}

// The single "shape" every product file must conform to
export interface ProductInfo {
  // Sidebar
  id: string;
  title: string;
  category: ProductCategory;
  shortDescription: string;
  pageType?: "product" | "mail";
  // Header
  tagLabel: string;
  tagColor: string;
  // Content
  problems: Problem[];
  problemCategories: ProblemCategoryGroup[];
  generalProblems: GeneralProblemCategory[];
  deviceManagement?: DeviceManagement;
  docLinks: DocLink[];
  mailContent?: MailPageContent;
}
