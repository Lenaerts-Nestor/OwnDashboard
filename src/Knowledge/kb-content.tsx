import { useState } from "react";
import type { ProductInfo } from "../types";
import { AllProblemsSection } from "./kb-all-problems";
import { CommonProblemsSection } from "./kb-common-problems";
import { DeviceManagementCard } from "./kb-device-management";
import { DocumentationLinksGrid } from "./kb-doc-links";
import { MailPageContent } from "./kb-mail-page";

function KnowledgeBaseContentView({ product }: { product: ProductInfo }) {
  const [openDeviceManagementItem, setOpenDeviceManagementItem] = useState<
    "factoryReset" | "firmwareUpdate" | null
  >(null);
  const [activeTab, setActiveTab] = useState<
    "common" | "all" | "notes" | "links"
  >("common");

  const productLinkUrl =
    product.docLinks.find((link) => link.type === "manual")?.url ??
    product.docLinks[0]?.url;

  if (product.pageType === "mail") {
    return <MailPageContent product={product} />;
  }

  const toggleDeviceManagementItem = (
    item: "factoryReset" | "firmwareUpdate",
  ) => {
    setOpenDeviceManagementItem((previous) =>
      previous === item ? null : item,
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-stone-100">
      <div className="bg-stone-50 border-b border-stone-200 px-8 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-xl ${product.tagColor} flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-white text-sm font-bold tracking-wide">
                {product.tagLabel}
              </span>
            </div>
            <h1 className="text-xl font-bold text-zinc-900 leading-tight">
              {productLinkUrl ? (
                <a
                  href={productLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-600 hover:underline underline-offset-4 transition-colors"
                >
                  {product.title}
                </a>
              ) : (
                product.title
              )}
            </h1>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs text-zinc-500">
            <span className="px-2 py-1 rounded-md bg-white border border-stone-200">
              {product.problemCategories.length} categories
            </span>
            <span className="px-2 py-1 rounded-md bg-white border border-stone-200">
              {product.problems.length} common issues
            </span>
          </div>
        </div>
        <div className="mt-4 border-b border-stone-200">
          <div className="flex items-center gap-6 text-sm font-semibold text-zinc-500">
            {[
              { id: "common", label: "Common Issues" },
              { id: "all", label: "All Problems" },
              { id: "notes", label: "My Notes" },
              { id: "links", label: "Links" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`pb-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-orange-500 text-zinc-900"
                    : "border-transparent hover:text-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8">
        {activeTab === "common" ? (
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 flex flex-col gap-6">
              <CommonProblemsSection problems={product.problems} />
            </div>

            <div className="col-span-1 flex flex-col gap-6">
              <DeviceManagementCard
                deviceManagement={product.deviceManagement}
                openItem={openDeviceManagementItem}
                onToggleItem={toggleDeviceManagementItem}
              />
            </div>
          </div>
        ) : null}

        {activeTab === "all" ? (
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 flex flex-col gap-6">
              <AllProblemsSection categories={product.problemCategories} />
            </div>
            <div className="col-span-1 flex flex-col gap-6">
              <DeviceManagementCard
                deviceManagement={product.deviceManagement}
                openItem={openDeviceManagementItem}
                onToggleItem={toggleDeviceManagementItem}
              />
            </div>
          </div>
        ) : null}

        {activeTab === "notes" ? (
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-white border border-stone-200 rounded-xl p-6">
                <h2 className="text-sm font-bold text-zinc-900 mb-2">
                  My Notes
                </h2>
                <p className="text-sm text-zinc-500">
                  No notes yet. Add customer context, call logs, and follow-ups
                  here.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-6">
              <DeviceManagementCard
                deviceManagement={product.deviceManagement}
                openItem={openDeviceManagementItem}
                onToggleItem={toggleDeviceManagementItem}
              />
            </div>
          </div>
        ) : null}

        {activeTab === "links" ? (
          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-bold text-zinc-900 mb-1">
                Documentation &amp; Links
              </h2>
              <p className="text-xs text-zinc-500">
                Manuals, firmware, datasheets, and FAQs for this product.
              </p>
            </div>
            <DocumentationLinksGrid docLinks={product.docLinks} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function KnowledgeBaseContent({ product }: { product: ProductInfo }) {
  return <KnowledgeBaseContentView key={product.id} product={product} />;
}
