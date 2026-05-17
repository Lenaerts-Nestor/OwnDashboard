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
          ? "bg-blue-50 border-l-blue-500"
          : "border-l-transparent hover:bg-gray-50 hover:border-l-gray-300"
      }`}
    >
      <span
        className={`text-sm font-semibold flex-1 min-w-0 ${
          isActive ? "text-blue-700" : "text-gray-800"
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

  return (
    <aside className="w-72 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 border-b border-gray-100">
        <h1 className="text-base font-bold text-gray-900 mb-3">
          Case Dashboard
        </h1>
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
        <p className="text-xs text-gray-400">{products.length} products</p>
      </div>
    </aside>
  );
}
