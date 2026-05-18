export function SearchIcon() {
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

export function ChevronRightIcon() {
  return (
    <svg
      className="w-4 h-4 text-zinc-400"
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

export function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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

export function ExternalLinkIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
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

export function WarningIcon() {
  return (
    <svg
      className="w-5 h-5 text-orange-500"
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

export function HelpIcon() {
  return (
    <svg
      className="w-5 h-5 text-orange-500"
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

export function DeviceManagementIcon() {
  return (
    <svg
      className="w-5 h-5 text-orange-500"
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

export function BatteryIcon() {
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
        d="M7 7h11v10H7zM18 10h2v4h-2"
      />
    </svg>
  );
}

export function NetworkIcon() {
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
        d="M8.111 16.404a5 5 0 017.778 0M5.05 13.343a9 9 0 0113.9 0M2 10.293a13 13 0 0120 0M12 20h.01"
      />
    </svg>
  );
}

export function DisplayIcon() {
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
        d="M9.75 17L9 20h6l-.75-3M4 5h16v12H4z"
      />
    </svg>
  );
}

export function SoftwareIcon() {
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
        d="M9.75 3v2.5m4.5-2.5V5.5M4 9.75h2.5m11 0H20m-2.929 7.321l-1.768-1.768m-6.606 0l-1.768 1.768m9.192-9.192L14.354 9.646m-4.708 0L7.879 7.879M12 8a4 4 0 100 8 4 4 0 000-8z"
      />
    </svg>
  );
}
