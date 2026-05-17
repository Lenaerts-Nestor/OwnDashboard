import { useEffect, useState } from "react";
import { knowledgebaseData, knowledgebaseMap } from "./data/index";
import type {
  DocLink,
  DocLinkType,
  GeneralProblemCategory,
  GeneralProblemKind,
  Problem,
  ProductInfo,
} from "./types";

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

function BatteryIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h11v10H7zM18 10h2v4h-2" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5 5 0 017.778 0M5.05 13.343a9 9 0 0113.9 0M2 10.293a13 13 0 0120 0M12 20h.01" />
    </svg>
  );
}

function DisplayIcon() {
  return (
    <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20h6l-.75-3M4 5h16v12H4z" />
    </svg>
  );
}

function SoftwareIcon() {
  return (
    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3v2.5m4.5-2.5V5.5M4 9.75h2.5m11 0H20m-2.929 7.321l-1.768-1.768m-6.606 0l-1.768 1.768m9.192-9.192L14.354 9.646m-4.708 0L7.879 7.879M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}

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

function RefBadge({ code }: { code: string }) {
  return (
    <span className="inline-flex text-xs font-mono text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-md">
      Ref: {code}
    </span>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="px-5 py-8 text-center">
      <p className="text-sm text-gray-400 italic">No {label} available for this product.</p>
    </div>
  );
}

function SectionCard({
  title,
  icon,
  children,
  subtitle,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-gray-100">
        <div className="flex items-start gap-2">
          {icon}
          <div>
            <h2 className="text-sm font-bold text-gray-800">{title}</h2>
            {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-100">{children}</div>
    </div>
  );
}

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
      className={`w-full text-left px-4 py-3 flex items-center gap-2 border-l-2 transition-colors duration-150 group ${
        isActive
          ? "bg-blue-50 border-l-blue-500"
          : "border-l-transparent hover:bg-gray-50 hover:border-l-gray-300"
      }`}
    >
      <span className={`text-sm font-semibold flex-1 min-w-0 ${isActive ? "text-blue-700" : "text-gray-800"}`}>
        {product.title}
      </span>
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
        <h1 className="text-base font-bold text-gray-900 mb-3">Case Dashboard</h1>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-150"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {filtered.length === 0 ? (
          <p className="text-xs text-gray-400 px-4 py-3">No results found.</p>
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
        <p className="text-xs text-gray-400">{knowledgebaseData.length} products</p>
      </div>
    </aside>
  );
}

function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <div className="px-5 py-4 hover:bg-gray-50 transition-colors duration-100">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-800">{problem.title}</p>
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">{problem.description}</p>
        </div>
        <RefBadge code={problem.refCode} />
      </div>
    </div>
  );
}

function GeneralProblemCategoryAccordion({
  category,
  isOpen,
  onToggle,
}: {
  category: GeneralProblemCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`border rounded-xl transition-colors ${kindContainerClasses(category.kind, isOpen)}`}>
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-3">
          {kindIcon(category.kind)}
          <span className="text-sm font-semibold text-gray-800">{category.title}</span>
          <span className="text-xs font-medium text-gray-600 bg-white/70 border border-white px-2 py-0.5 rounded-md">
            {category.checks.length} checks
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
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">
                      {index + 1}. {check.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{check.prompt}</p>
                    <p className="text-xs text-gray-500 mt-2">Ref: {check.refCode}</p>
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
            Not supported yet
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

function DocIcon({ type }: { type: DocLinkType }) {
  const base = "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0";
  switch (type) {
    case "manual":
      return (
        <div className={`${base} bg-blue-50`}>
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      );
    case "video":
      return (
        <div className={`${base} bg-purple-50`}>
          <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      );
    case "firmware":
      return (
        <div className={`${base} bg-green-50`}>
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      );
    case "datasheet":
    default:
      return (
        <div className={`${base} bg-slate-100`}>
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      );
  }
}

function DocLinkCard({ link }: { link: DocLink }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
      <DocIcon type={link.type} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors leading-tight">
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

function MainContent({ product }: { product: ProductInfo }) {
  const [openDeviceManagementItem, setOpenDeviceManagementItem] = useState<
    "factoryReset" | "firmwareUpdate" | null
  >(null);
  const [openGeneralProblemCategoryId, setOpenGeneralProblemCategoryId] =
    useState<string | null>(product.generalProblems[0]?.id ?? null);

  useEffect(() => {
    setOpenGeneralProblemCategoryId(product.generalProblems[0]?.id ?? null);
    setOpenDeviceManagementItem(null);
  }, [product.id, product.generalProblems]);

  const toggleDeviceManagementItem = (item: "factoryReset" | "firmwareUpdate") => {
    setOpenDeviceManagementItem((previous) => (previous === item ? null : item));
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl ${product.tagColor} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-sm font-bold tracking-wide">{product.tagLabel}</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">{product.title}</h1>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs text-gray-500">
            <span className="px-2 py-1 rounded-md bg-gray-100 border border-gray-200">
              {product.problems.length} common problems
            </span>
            <span className="px-2 py-1 rounded-md bg-gray-100 border border-gray-200">
              {product.generalProblems.length} general categories
            </span>
          </div>
        </div>
      </div>

      <div className="p-8 grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <SectionCard title="Common Problems" icon={<WarningIcon />}>
            {product.problems.length === 0 ? (
              <EmptyState label="common problems" />
            ) : (
              product.problems.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))
            )}
          </SectionCard>

          <SectionCard
            title="General problems"
            icon={<HelpIcon />}
            subtitle="Click a category to open its diagnostic checklist. Mark checks as you validate them."
          >
            {product.generalProblems.length === 0 ? (
              <EmptyState label="general problems" />
            ) : (
              <div className="p-4 space-y-3">
                {product.generalProblems.map((category) => (
                  <GeneralProblemCategoryAccordion
                    key={category.id}
                    category={category}
                    isOpen={openGeneralProblemCategoryId === category.id}
                    onToggle={() =>
                      setOpenGeneralProblemCategoryId((previous) =>
                        previous === category.id ? null : category.id,
                      )
                    }
                  />
                ))}
              </div>
            )}
          </SectionCard>
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100">
              <DeviceManagementIcon />
              <h2 className="text-sm font-bold text-gray-800">Device Management</h2>
            </div>
            <div className="p-4 space-y-3">
              {product.deviceManagement ? (
                <>
                  <DeviceManagementAccordion
                    title="Factory Reset"
                    status={product.deviceManagement.factoryReset.status}
                    instructions={product.deviceManagement.factoryReset.instructions}
                    isOpen={openDeviceManagementItem === "factoryReset"}
                    onToggle={() => toggleDeviceManagementItem("factoryReset")}
                  />
                  <DeviceManagementAccordion
                    title="Firmware Update"
                    status={product.deviceManagement.firmwareUpdate.status}
                    instructions={product.deviceManagement.firmwareUpdate.instructions}
                    isOpen={openDeviceManagementItem === "firmwareUpdate"}
                    onToggle={() => toggleDeviceManagementItem("firmwareUpdate")}
                  />
                </>
              ) : (
                <div className="rounded-lg border border-gray-100 bg-gray-50/60 px-4 py-6 text-center">
                  <p className="text-sm text-gray-400 italic">
                    No device management options available for this product.
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
              <h2 className="text-sm font-bold text-gray-800">Documentation &amp; Links</h2>
            </div>
            <div className="divide-y divide-gray-100 px-1 py-1">
              {product.docLinks.length === 0 ? (
                <EmptyState label="documentation" />
              ) : (
                product.docLinks.map((link) => <DocLinkCard key={link.id} link={link} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KnowledgeBase() {
  const [activeId, setActiveId] = useState<string>(knowledgebaseData[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");

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
