import { useState } from "react";
import { knowledgebaseData, knowledgebaseMap } from "./data/index";
import type { ProductInfo, Problem, DocLink, DocLinkType } from "./types";

// ─── Icons ────────────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      className="w-4 h-4 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function DeviceManagementIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317a1 1 0 011.35-.936l.877.382a1 1 0 001.157-.25l.62-.746a1 1 0 011.56 0l1.06 1.273a1 1 0 001.157.25l.877-.382a1 1 0 011.35.936l.093.95a1 1 0 00.758.878l.922.23a1 1 0 01.62 1.52l-.5.813a1 1 0 000 1.048l.5.813a1 1 0 01-.62 1.52l-.922.23a1 1 0 00-.758.878l-.093.95a1 1 0 01-1.35.936l-.877-.382a1 1 0 00-1.157.25l-1.06 1.273a1 1 0 01-1.56 0l-.62-.746a1 1 0 00-1.157-.25l-.877.382a1 1 0 01-1.35-.936l-.093-.95a1 1 0 00-.758-.878l-.922-.23a1 1 0 01-.62-1.52l.5-.813a1 1 0 000-1.048l-.5-.813a1 1 0 01.62-1.52l.922-.23a1 1 0 00.758-.878l.093-.95z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function DocIcon({ type }: { type: DocLinkType }) {
  const base =
    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0";
  switch (type) {
    case "manual":
      return (
        <div className={`${base} bg-blue-50`}>
          <svg
            className="w-4 h-4 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      );
    case "video":
      return (
        <div className={`${base} bg-purple-50`}>
          <svg
            className="w-4 h-4 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      );
    case "firmware":
      return (
        <div className={`${base} bg-green-50`}>
          <svg
            className="w-4 h-4 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </div>
      );
    case "datasheet":
    default:
      return (
        <div className={`${base} bg-slate-100`}>
          <svg
            className="w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
      );
  }
}

// ─── Category badge colors ────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  Sensoren: "bg-orange-100 text-orange-700",
  Netwerk: "bg-sky-100 text-sky-700",
  Controllers: "bg-blue-100 text-blue-700",
  Aandrijvingen: "bg-purple-100 text-purple-700",
  Visualisatie: "bg-green-100 text-green-700",
  Afstandsbediening: "bg-amber-100 text-amber-700",
};

// ─── Shared small components ──────────────────────────────────────────────────

function RefBadge({ code }: { code: string }) {
  return (
    <span
      className="ml-auto flex-shrink-0 text-xs font-mono text-gray-400 bg-gray-100
      border border-gray-200 px-2 py-0.5 rounded-md whitespace-nowrap"
    >
      Ref: {code}
    </span>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="px-5 py-8 text-center">
      <p className="text-sm text-gray-400 italic">
        Geen {label} beschikbaar voor dit product.
      </p>
    </div>
  );
}

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100">
        {icon}
        <h2 className="text-sm font-bold text-gray-800">{title}</h2>
      </div>
      <div className="divide-y divide-gray-100">{children}</div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function SidebarItem({
  product,
  isActive,
  onClick,
}: {
  product: ProductInfo;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 flex items-start gap-2 border-l-2
        transition-colors duration-150 group
        ${
          isActive
            ? "bg-blue-50 border-l-blue-500"
            : "border-l-transparent hover:bg-gray-50 hover:border-l-gray-300"
        }`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span
            className={`text-sm font-semibold ${isActive ? "text-blue-700" : "text-gray-800"}`}
          >
            {product.title}
          </span>
          <span
            className={`text-xs px-1.5 py-0.5 rounded-md font-medium
            ${categoryColors[product.category] ?? "bg-gray-100 text-gray-600"}`}
          >
            {product.category}
          </span>
        </div>
        <p className="text-xs text-gray-400 truncate leading-snug">
          {product.shortDescription}
        </p>
      </div>
      <ChevronRightIcon />
    </button>
  );
}

function Sidebar({
  activeId,
  onSelect,
  searchQuery,
  onSearchChange,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}) {
  const filtered = knowledgebaseData.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  return (
    <aside className="w-72 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 border-b border-gray-100">
        <h1 className="text-base font-bold text-gray-900 mb-3">Kennisbank</h1>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Zoek product..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg
              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300
              focus:border-blue-400 transition-all duration-150"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {filtered.length === 0 ? (
          <p className="text-xs text-gray-400 px-4 py-3">
            Geen resultaten gevonden.
          </p>
        ) : (
          filtered.map((p) => (
            <SidebarItem
              key={p.id}
              product={p}
              isActive={p.id === activeId}
              onClick={() => onSelect(p.id)}
            />
          ))
        )}
      </nav>

      <div className="px-4 py-3 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          {knowledgebaseData.length} producten in kennisbank
        </p>
      </div>
    </aside>
  );
}

// ─── Problem card ─────────────────────────────────────────────────────────────

function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <div
      className="flex items-start justify-between gap-4 px-5 py-4 hover:bg-gray-50
      transition-colors duration-100 rounded-lg cursor-pointer group"
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
          {problem.title}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{problem.description}</p>
      </div>
      <RefBadge code={problem.refCode} />
    </div>
  );
}

// ─── Triage section parts ──────────────────────────────────────────────────────

function TriageQuestionGroup({
  title,
  questions,
}: {
  title: string;
  questions: string[];
}) {
  return (
    <div className="px-5 py-4">
      <h3 className="text-xs font-semibold tracking-wide uppercase text-gray-500">
        {title}
      </h3>
      <div className="mt-3 space-y-2">
        {questions.map((question, index) => (
          <div
            key={`${title}-${index}`}
            className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50/60 px-3 py-2"
          >
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600
                text-[10px] font-bold flex items-center justify-center mt-0.5"
            >
              {index + 1}
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">{question}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Device management ─────────────────────────────────────────────────────────

function DeviceManagementAccordion({
  title,
  status,
  instructions,
  isOpen,
  onToggle,
}: {
  title: string;
  status: "supported" | "not_supported";
  instructions: string[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isSupported = status === "supported";

  return (
    <div className="border border-gray-100 rounded-lg bg-gray-50/60">
      <button
        type="button"
        onClick={onToggle}
        disabled={!isSupported}
        className={`w-full px-4 py-3 flex items-center justify-between gap-3 text-left ${
          isSupported ? "hover:bg-gray-50 cursor-pointer" : "cursor-not-allowed"
        } transition-colors`}
      >
        <span className="text-sm font-semibold text-gray-800">{title}</span>
        {isSupported ? (
          <ChevronDownIcon isOpen={isOpen} />
        ) : (
          <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md whitespace-nowrap">
            Nog niet ondersteund
          </span>
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isSupported && isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ol className="px-8 pb-4 text-sm text-gray-600 list-decimal space-y-2">
            {instructions.map((instruction, index) => (
              <li key={`${title}-instruction-${index}`}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

// ─── Doc link card ────────────────────────────────────────────────────────────

function DocLinkCard({ link }: { link: DocLink }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg
      transition-colors cursor-pointer group"
    >
      <DocIcon type={link.type} />
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-medium text-gray-800 group-hover:text-blue-700
          transition-colors leading-tight"
        >
          {link.title}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{link.subtitle}</p>
      </div>
      <span className="text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0">
        <ExternalLinkIcon className="w-3.5 h-3.5" />
      </span>
    </div>
  );
}

// ─── Main content ─────────────────────────────────────────────────────────────

function MainContent({ product }: { product: ProductInfo }) {
  const [openDeviceManagementItem, setOpenDeviceManagementItem] = useState<
    "factoryReset" | "firmwareUpdate" | null
  >(null);
  const problemSpecificQuestions =
    product.triageQuestions.problemSpecific ?? [];
  const generalQuestions = product.triageQuestions.generalQuestions ?? [];
  const hasTriageQuestions =
    problemSpecificQuestions.length > 0 || generalQuestions.length > 0;

  const toggleDeviceManagementItem = (
    item: "factoryReset" | "firmwareUpdate",
  ) => {
    setOpenDeviceManagementItem((previous) =>
      previous === item ? null : item,
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-5">
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-xl ${product.tagColor} flex items-center
            justify-center flex-shrink-0`}
          >
            <span className="text-white text-sm font-bold tracking-wide">
              {product.tagLabel}
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Two-column body */}
      <div className="p-8 grid grid-cols-3 gap-6">
        {/* Left col — 2/3 width */}
        <div className="col-span-2 flex flex-col gap-6">
          <SectionCard title="Veelvoorkomende Problemen" icon={<WarningIcon />}>
            {product.problems.length === 0 ? (
              <EmptyState label="problemen" />
            ) : (
              product.problems.map((p) => (
                <ProblemCard key={p.id} problem={p} />
              ))
            )}
          </SectionCard>

          <SectionCard title="Triage Vragen" icon={<HelpIcon />}>
            {!hasTriageQuestions ? (
              <EmptyState label="triage vragen" />
            ) : (
              <>
                {problemSpecificQuestions.length > 0 && (
                  <TriageQuestionGroup
                    title="Probleemspecifieke Vragen"
                    questions={problemSpecificQuestions}
                  />
                )}
                {generalQuestions.length > 0 && (
                  <TriageQuestionGroup
                    title="Algemene Vragen"
                    questions={generalQuestions}
                  />
                )}
              </>
            )}
          </SectionCard>
        </div>

        {/* Right col — 1/3 width */}
        <div className="col-span-1 flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100">
              <DeviceManagementIcon />
              <h2 className="text-sm font-bold text-gray-800">
                Apparaat Beheer
              </h2>
            </div>
            <div className="p-4 space-y-3">
              {product.deviceManagement ? (
                <>
                  <DeviceManagementAccordion
                    title="Factory Reset"
                    status={product.deviceManagement.factoryReset.status}
                    instructions={
                      product.deviceManagement.factoryReset.instructions
                    }
                    isOpen={openDeviceManagementItem === "factoryReset"}
                    onToggle={() => toggleDeviceManagementItem("factoryReset")}
                  />
                  <DeviceManagementAccordion
                    title="Firmware Update"
                    status={product.deviceManagement.firmwareUpdate.status}
                    instructions={
                      product.deviceManagement.firmwareUpdate.instructions
                    }
                    isOpen={openDeviceManagementItem === "firmwareUpdate"}
                    onToggle={() =>
                      toggleDeviceManagementItem("firmwareUpdate")
                    }
                  />
                </>
              ) : (
                <div className="rounded-lg border border-gray-100 bg-gray-50/60 px-4 py-6 text-center">
                  <p className="text-sm text-gray-400 italic">
                    Geen apparaatbeheer beschikbaar voor dit product.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100">
              <span className="text-blue-500">
                <ExternalLinkIcon className="w-5 h-5" />
              </span>
              <h2 className="text-sm font-bold text-gray-800">
                Documentatie &amp; Links
              </h2>
            </div>
            <div className="divide-y divide-gray-100 px-1 py-1">
              {product.docLinks.length === 0 ? (
                <EmptyState label="documentatie" />
              ) : (
                product.docLinks.map((l) => <DocLinkCard key={l.id} link={l} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function KnowledgeBase() {
  const [activeId, setActiveId] = useState<string>(knowledgebaseData[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // O(1) lookup via the map — no .find() needed
  const activeProduct = knowledgebaseMap[activeId] ?? knowledgebaseData[0];

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      <Sidebar
        activeId={activeId}
        onSelect={setActiveId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <MainContent product={activeProduct} />
    </div>
  );
}
