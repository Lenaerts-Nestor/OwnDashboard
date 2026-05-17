import { useState } from "react";
import type { DocLink, DocLinkType } from "./types";
import { ChevronDownIcon, ExternalLinkIcon } from "./kb-icons";
import { EmptyState } from "./kb-shared";

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

function DocLinkCard({ link }: { link: DocLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group"
    >
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
    </a>
  );
}

export function DocumentationLinksCard({ docLinks }: { docLinks: DocLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-100 text-left"
      >
        <div className="flex items-center gap-2">
          <span className="text-blue-500">
            <ExternalLinkIcon className="w-5 h-5" />
          </span>
          <h2 className="text-sm font-bold text-gray-800">
            Documentation &amp; Links
          </h2>
        </div>
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="divide-y divide-gray-100 px-1 py-1">
            {docLinks.length === 0 ? (
              <EmptyState label="documentation" />
            ) : (
              docLinks.map((link) => <DocLinkCard key={link.id} link={link} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
