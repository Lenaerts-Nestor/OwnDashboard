import type { DocLink, DocLinkType } from "../types";
import { ExternalLinkIcon } from "./kb-icons";
import { EmptyState } from "./kb-shared";

function DocIcon({ type }: { type: DocLinkType }) {
  const base =
    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0";

  switch (type) {
    case "manual":
      return (
        <div className={`${base} bg-orange-50 border border-orange-200`}>
          <svg
            className="w-4 h-4 text-orange-600"
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
        <div className={`${base} bg-stone-100 border border-stone-200`}>
          <svg
            className="w-4 h-4 text-zinc-600"
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
        <div className={`${base} bg-stone-100 border border-stone-200`}>
          <svg
            className="w-4 h-4 text-zinc-600"
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
        <div className={`${base} bg-stone-100 border border-stone-200`}>
          <svg
            className="w-4 h-4 text-zinc-600"
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
      className="flex items-center gap-3 px-4 py-3 bg-white border border-stone-200 hover:border-orange-200 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer group"
    >
      <DocIcon type={link.type} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-zinc-900 group-hover:text-orange-700 transition-colors leading-tight">
          {link.title}
        </p>
        <p className="text-xs text-zinc-500 mt-0.5">{link.subtitle}</p>
      </div>
      <span className="text-zinc-400 group-hover:text-orange-600 transition-colors flex-shrink-0">
        <ExternalLinkIcon className="w-3.5 h-3.5" />
      </span>
    </a>
  );
}

export function DocumentationLinksGrid({ docLinks }: { docLinks: DocLink[] }) {
  if (docLinks.length === 0) {
    return (
      <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
        <EmptyState label="documentation" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {docLinks.map((link) => (
        <DocLinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
