import { useState } from "react";
import { knowledgebaseData, knowledgebaseMap } from "./data/index";
import { KnowledgeBaseContent } from "./Knowledge/kb-content";
import { Sidebar } from "./Knowledge/kb-sidebar";

export default function KnowledgeBase() {
  const [activeId, setActiveId] = useState<string>(knowledgebaseData[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeProduct = knowledgebaseMap[activeId] ?? knowledgebaseData[0];

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      <Sidebar
        products={knowledgebaseData}
        activeId={activeId}
        onSelect={setActiveId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <KnowledgeBaseContent product={activeProduct} />
    </div>
  );
}
