import type { GeneralProblemCategory, GeneralProblemKind } from "../types";
import {
  BatteryIcon,
  ChevronDownIcon,
  DisplayIcon,
  HelpIcon,
  NetworkIcon,
  SoftwareIcon,
} from "./kb-icons";
import { EmptyState, SectionCard } from "./kb-shared";

function kindIcon(kind: GeneralProblemKind) {
  switch (kind) {
    case "battery":
      return <BatteryIcon />;
    case "network":
      return <NetworkIcon />;
    case "display":
      return <DisplayIcon />;
    case "software":
    case "system":
    default:
      return <SoftwareIcon />;
  }
}

function kindContainerClasses(kind: GeneralProblemKind, isOpen: boolean) {
  if (isOpen) {
    switch (kind) {
      case "battery":
        return "bg-emerald-50 border-emerald-200";
      case "network":
        return "bg-blue-50 border-blue-200";
      case "display":
        return "bg-violet-50 border-violet-200";
      case "software":
      case "system":
      default:
        return "bg-slate-50 border-slate-200";
    }
  }
  return "bg-slate-50/50 border-slate-200";
}

export function GeneralProblemCategoryAccordion({
  category,
  isOpen,
  onToggle,
}: {
  category: GeneralProblemCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl transition-colors ${kindContainerClasses(category.kind, isOpen)}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-3">
          {kindIcon(category.kind)}
          <span className="text-sm font-semibold text-gray-800">
            {category.title}
          </span>
        </div>
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 space-y-3">
            {category.checks.map((check, index) => (
              <div
                key={check.id}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3"
              >
                <div className="flex items-start">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">
                      {index + 1}. {check.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {check.prompt}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Ref: {check.refCode}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GeneralProblemsSection({
  categories,
  openCategoryId,
  onToggleCategory,
}: {
  categories: GeneralProblemCategory[];
  openCategoryId: string | null;
  onToggleCategory: (id: string) => void;
}) {
  return (
    <SectionCard
      title="General problems"
      icon={<HelpIcon />}
      subtitle="Standard diagnostic prompts grouped by topic. Expand a category to guide the first troubleshooting steps."
    >
      {categories.length === 0 ? (
        <EmptyState label="general problems" />
      ) : (
        <div className="p-4 space-y-3">
          {categories.map((category) => (
            <GeneralProblemCategoryAccordion
              key={category.id}
              category={category}
              isOpen={openCategoryId === category.id}
              onToggle={() => onToggleCategory(category.id)}
            />
          ))}
        </div>
      )}
    </SectionCard>
  );
}
