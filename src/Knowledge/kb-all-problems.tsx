import { useState } from "react";
import type {
  ProblemCategoryGroup,
  ProblemIssue,
  ProblemSeverity,
  ProblemStep,
} from "../types";
import { ChevronDownIcon } from "./kb-icons";
import { EmptyState } from "./kb-shared";

const severityStyles: Record<ProblemSeverity, string> = {
  Low: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Medium: "bg-amber-50 text-amber-700 border-amber-200",
  High: "bg-orange-50 text-orange-700 border-orange-200",
  Critical: "bg-red-50 text-red-700 border-red-200",
};

function SeverityBadge({ severity }: { severity: ProblemSeverity }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[11px] font-semibold rounded-md border ${severityStyles[severity]}`}
    >
      {severity}
    </span>
  );
}

function StepRow({
  step,
  index,
  isCopied,
  onCopy,
}: {
  step: ProblemStep;
  index: number;
  isCopied: boolean;
  onCopy: (step: ProblemStep) => void;
}) {
  return (
    <div
      onClick={() => onCopy(step)}
      className={`flex items-start gap-4 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
        isCopied
          ? "border-emerald-200 bg-emerald-50"
          : "border-stone-200 bg-white hover:bg-stone-50"
      }`}
    >
      <span className="w-7 h-7 rounded-md bg-white border border-stone-300 text-zinc-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
        {index + 1}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-zinc-900">{step.title}</p>
          <span
            className={`text-[11px] font-semibold uppercase tracking-wider ${
              isCopied ? "text-emerald-600" : "text-zinc-400"
            }`}
          >
            {isCopied ? "Gekopieerd!" : "Klik om te kopieren"}
          </span>
        </div>
        {step.path && step.path.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            {step.path!.map((segment, pathIndex) => (
              <div key={`${step.id}-path-${segment}-${pathIndex}`}>
                <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-medium rounded-md bg-stone-100 text-zinc-600 border border-stone-200">
                  {segment}
                </span>
                {pathIndex < step.path!.length - 1 && (
                  <span className="mx-1 text-zinc-400 text-xs">&gt;</span>
                )}
              </div>
            ))}
          </div>
        )}
        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
          {step.description}
        </p>
        <p className="text-xs text-zinc-400 mt-2">Ref: {step.refCode}</p>
      </div>
    </div>
  );
}

function IssueRow({
  issue,
  index,
  isOpen,
  onToggle,
  copiedStepId,
  onCopyStep,
}: {
  issue: ProblemIssue;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  copiedStepId: string | null;
  onCopyStep: (step: ProblemStep) => void;
}) {
  return (
    <div className="border-t border-stone-200">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-start justify-between gap-4 text-left hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-start gap-3">
          <span className="text-xs font-semibold text-zinc-400">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="text-sm font-semibold text-zinc-900">{issue.title}</p>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              <span>{issue.caseId}</span>
              <span className="text-zinc-300">•</span>
              <span>Severity</span>
              <SeverityBadge severity={issue.severity} />
              <span className="text-zinc-300">•</span>
              <span>{issue.casesPer30d} cases / 30d</span>
            </div>
          </div>
        </div>
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1 space-y-3">
            {issue.steps.map((step, stepIndex) => (
              <StepRow
                key={step.id}
                step={step}
                index={stepIndex}
                isCopied={copiedStepId === step.id}
                onCopy={onCopyStep}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  isOpen,
  onToggle,
  openIssueId,
  onToggleIssue,
  copiedStepId,
  onCopyStep,
}: {
  category: ProblemCategoryGroup;
  isOpen: boolean;
  onToggle: () => void;
  openIssueId: string | null;
  onToggleIssue: (id: string) => void;
  copiedStepId: string | null;
  onCopyStep: (step: ProblemStep) => void;
}) {
  return (
    <div className="bg-white border border-orange-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
      >
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            {category.title}
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            {category.issues.length} issues
          </p>
        </div>
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-orange-100">
            {category.issues.map((issue, index) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                index={index}
                isOpen={openIssueId === issue.id}
                onToggle={() => onToggleIssue(issue.id)}
                copiedStepId={copiedStepId}
                onCopyStep={onCopyStep}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AllProblemsSection({
  categories,
}: {
  categories: ProblemCategoryGroup[];
}) {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(
    categories[0]?.id ?? null,
  );
  const [openIssueId, setOpenIssueId] = useState<string | null>(null);
  const [copiedStepId, setCopiedStepId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenIssueId(null);
    setOpenCategoryId((previous) => (previous === id ? null : id));
  };

  const toggleIssue = (id: string) => {
    setOpenIssueId((previous) => (previous === id ? null : id));
  };

  const handleCopyStep = async (step: ProblemStep) => {
    try {
      await navigator.clipboard.writeText(step.description);
      setCopiedStepId(step.id);
      window.setTimeout(() => setCopiedStepId(null), 1600);
    } catch {
      setCopiedStepId(null);
    }
  };

  if (categories.length === 0) {
    return <EmptyState label="problems" />;
  }

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          isOpen={openCategoryId === category.id}
          onToggle={() => toggleCategory(category.id)}
          openIssueId={openIssueId}
          onToggleIssue={toggleIssue}
          copiedStepId={copiedStepId}
          onCopyStep={handleCopyStep}
        />
      ))}
    </div>
  );
}
