import type { Problem } from "../types";
import { NetworkIcon, WarningIcon } from "./kb-icons";
import { EmptyState, RefBadge, SectionCard } from "./kb-shared";

function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <div className="px-5 py-4 hover:bg-stone-50 transition-colors duration-100">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-zinc-900">
            {problem.title}
          </p>
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
            {problem.description}
          </p>
        </div>
        <RefBadge code={problem.refCode} />
      </div>
    </div>
  );
}

export function CommonProblemsSection({ problems }: { problems: Problem[] }) {
  return (
    <SectionCard
      title="Tech Tips & Known Issues"
      icon={<NetworkIcon />}
      subtitle="Frequently reported issues with quick context for triage and escalation."
    >
      {problems.length === 0 ? (
        <EmptyState label="common problems" />
      ) : (
        problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))
      )}
    </SectionCard>
  );
}
