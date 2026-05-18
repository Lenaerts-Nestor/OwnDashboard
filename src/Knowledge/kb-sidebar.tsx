import type { ProductInfo } from "../types";
import { ChevronRightIcon, SearchIcon } from "./kb-icons";

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
          ? "bg-orange-50 border-l-orange-500"
          : "border-l-transparent hover:bg-zinc-100 hover:border-l-zinc-300"
      }`}
    >
      <span
        className={`text-sm font-semibold flex-1 min-w-0 ${
          isActive ? "text-orange-700" : "text-zinc-800"
        }`}
      >
        {product.title}
      </span>
      <ChevronRightIcon />
    </button>
  );
}

export function Sidebar({
  products,
  activeId,
  onSelect,
  searchQuery,
  onSearchChange,
}: {
  products: ProductInfo[];
  activeId: string;
  onSelect: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}) {
  const filtered = products.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  const categoryLabels: Record<ProductInfo["category"], string> = {
    Sensors: "Sensoren",
    Network: "Netwerk",
    Controllers: "Controllers",
    Drives: "Drives",
    Visualization: "Visualisatie",
    "Remote Control": "Remote Control",
    "Basic Knowledge": "Basic Knowledge",
  };

  const grouped = filtered.reduce<
    { category: ProductInfo["category"]; items: ProductInfo[] }[]
  >((acc, product) => {
    const existing = acc.find((entry) => entry.category === product.category);
    if (existing) {
      existing.items.push(product);
    } else {
      acc.push({ category: product.category, items: [product] });
    }
    return acc;
  }, []);

  return (
    <aside className="w-72 flex-shrink-0 bg-stone-50 border-r border-stone-200 flex flex-col h-full">
      <div className="p-4 border-b border-stone-200">
        <h1 className="text-base font-bold text-zinc-900 mb-3">
          Case Dashboard
        </h1>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-zinc-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-stone-200 rounded-lg placeholder-zinc-400 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-all duration-150"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {filtered.length === 0 ? (
          <p className="text-xs text-zinc-400 px-4 py-3">No results found.</p>
        ) : (
          grouped.map((group) => (
            <div key={group.category} className="mb-3 last:mb-0">
              <p className="px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                {categoryLabels[group.category] ?? group.category}
              </p>
              {group.items.map((p) => (
                <SidebarItem
                  key={p.id}
                  product={p}
                  isActive={p.id === activeId}
                  onClick={() => onSelect(p.id)}
                />
              ))}
            </div>
          ))
        )}
      </nav>

      <div className="px-4 py-3 border-t border-stone-200">
        <p className="text-xs text-zinc-400">{products.length} products</p>
      </div>
    </aside>
  );
}
