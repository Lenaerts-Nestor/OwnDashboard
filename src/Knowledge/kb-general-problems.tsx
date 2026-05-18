import { useState } from "react";
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
        return "bg-emerald-950/40 border-emerald-800";
      case "network":
        return "bg-sky-950/40 border-sky-800";
      case "display":
        return "bg-violet-950/40 border-violet-800";
      case "software":
      case "system":
      default:
        return "bg-slate-900/60 border-slate-700";
    }
  }
  return "bg-slate-900/40 border-slate-800";
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
  const [copiedCheckId, setCopiedCheckId] = useState<string | null>(null);

  const handleCopy = async (title: string, prompt: string, id: string) => {
    const textToCopy = [title, prompt].filter(Boolean).join(" - ");
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedCheckId(id);
      window.setTimeout(() => setCopiedCheckId(null), 1600);
    } catch {
      setCopiedCheckId(null);
    }
  };

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
          <span className="text-sm font-semibold text-white">
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
                onClick={() => handleCopy(check.title, check.prompt, check.id)}
                className={`rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                  copiedCheckId === check.id
                    ? "border-emerald-600/70 bg-emerald-950/40"
                    : "border-slate-800 bg-slate-900/80 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {index + 1}. {check.title}
                    </p>
                    {check.path && check.path.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        {check.path!.map((segment, pathIndex) => (
                          <div key={`${check.id}-path-${segment}-${pathIndex}`}>
                            <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                              {segment}
                            </span>
                            {pathIndex < check.path!.length - 1 && (
                              <span className="mx-1 text-slate-600 text-xs">
                                &gt;
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      {check.prompt}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Ref: {check.refCode}
                    </p>
                  </div>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      copiedCheckId === check.id
                        ? "text-emerald-300"
                        : "text-slate-600"
                    }`}
                  >
                    {copiedCheckId === check.id
                      ? "Gekopieerd!"
                      : "Klik om te kopieren"}
                  </span>
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
      title="Triage Vragen"
      icon={<HelpIcon />}
      subtitle="Standaard triagevragen per categorie. Klik op een vraag om deze te kopieren."
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
