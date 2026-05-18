export function RefBadge({ code }: { code: string }) {
  return (
    <span className="inline-flex text-xs font-mono text-zinc-600 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-md">
      Ref: {code}
    </span>
  );
}

export function EmptyState({ label }: { label: string }) {
  return (
    <div className="px-5 py-8 text-center">
      <p className="text-sm text-zinc-400 italic">
        No {label} available for this product.
      </p>
    </div>
  );
}

export function SectionCard({
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
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-stone-200">
        <div className="flex items-start gap-2">
          {icon}
          <div>
            <h2 className="text-sm font-bold text-zinc-900">{title}</h2>
            {subtitle && (
              <p className="text-xs text-zinc-500 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
      <div className="divide-y divide-stone-200">{children}</div>
    </div>
  );
}
