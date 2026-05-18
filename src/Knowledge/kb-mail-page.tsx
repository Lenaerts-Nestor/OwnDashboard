import { useState } from "react";
import type { MailBlock, MailSection, ProductInfo } from "../types";
import { SectionCard } from "./kb-shared";

function CopyIcon() {
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
        d="M8 8h10v10H8zM6 16H5a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v1"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      className="w-4 h-4 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0a2 2 0 012-2h14a2 2 0 012 2m-18 0v8a2 2 0 002 2h14a2 2 0 002-2V8"
      />
    </svg>
  );
}

function FollowUpIcon() {
  return (
    <svg
      className="w-4 h-4 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7h12m-12 5h12m-12 5h12M4 7h.01M4 12h.01M4 17h.01"
      />
    </svg>
  );
}

function RulesIcon() {
  return (
    <svg
      className="w-4 h-4 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v8m-4-4h8M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"
      />
    </svg>
  );
}

function sectionIcon(sectionId: string) {
  if (sectionId.includes("follow")) {
    return <FollowUpIcon />;
  }
  if (sectionId.includes("rule") || sectionId.includes("rma")) {
    return <RulesIcon />;
  }
  return <EnvelopeIcon />;
}

function blockGridClasses(blockCount: number) {
  if (blockCount >= 3) {
    return "grid grid-cols-1 lg:grid-cols-3 gap-4";
  }
  if (blockCount === 2) {
    return "grid grid-cols-1 lg:grid-cols-2 gap-4";
  }
  return "grid grid-cols-1 gap-4";
}

function MailBlockCard({ block }: { block: MailBlock }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(block.text);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1500);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 h-full flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="text-sm font-semibold text-zinc-900">{block.title}</h3>
        <button
          type="button"
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${isCopied ? "text-emerald-600" : "text-zinc-500 hover:text-orange-600"}`}
        >
          <CopyIcon />
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-mono text-[13px] leading-6 text-zinc-700 flex-1">
        {block.text}
      </pre>
    </div>
  );
}

function MailSectionView({ section }: { section: MailSection }) {
  return (
    <SectionCard
      title={section.title}
      icon={sectionIcon(section.id)}
      subtitle={section.subtitle}
    >
      <div className="p-4">
        <div className={blockGridClasses(section.blocks.length)}>
          {section.blocks.map((block) => (
            <MailBlockCard key={block.id} block={block} />
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

export function MailPageContent({ product }: { product: ProductInfo }) {
  const content = product.mailContent;

  if (!content) {
    return null;
  }

  return (
    <div className="flex-1 overflow-y-auto bg-stone-100">
      <div className="bg-stone-50 border-b border-stone-200 px-8 py-5">
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-xl ${product.tagColor} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-white text-sm font-bold tracking-wide">
              {product.tagLabel}
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-900 leading-tight">
              {product.title}
            </h1>
            <p className="text-sm text-zinc-500 mt-1">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {content.sections.map((section) => (
          <MailSectionView key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
