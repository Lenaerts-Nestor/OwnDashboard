import { useEffect, useState } from "react";
import type { ProductInfo } from "../types";
import { CommonProblemsSection } from "./kb-common-problems";
import { DeviceManagementCard } from "./kb-device-management";
import { DocumentationLinksCard } from "./kb-doc-links";
import { GeneralProblemsSection } from "./kb-general-problems";

export function KnowledgeBaseContent({ product }: { product: ProductInfo }) {
  const [openDeviceManagementItem, setOpenDeviceManagementItem] = useState<
    "factoryReset" | "firmwareUpdate" | null
  >(null);

  const [openGeneralProblemCategoryId, setOpenGeneralProblemCategoryId] =
    useState<string | null>(product.generalProblems[0]?.id ?? null);

  const productLinkUrl =
    product.docLinks.find((link) => link.type === "manual")?.url ??
    product.docLinks[0]?.url;

  useEffect(() => {
    setOpenGeneralProblemCategoryId(product.generalProblems[0]?.id ?? null);
    setOpenDeviceManagementItem(null);
  }, [product.id, product.generalProblems]);

  const toggleDeviceManagementItem = (
    item: "factoryReset" | "firmwareUpdate",
  ) => {
    setOpenDeviceManagementItem((previous) =>
      previous === item ? null : item,
    );
  };

  const toggleGeneralProblemsCategory = (id: string) => {
    setOpenGeneralProblemCategoryId((previous) =>
      previous === id ? null : id,
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-xl ${product.tagColor} flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-white text-sm font-bold tracking-wide">
                {product.tagLabel}
              </span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              {productLinkUrl ? (
                <a
                  href={productLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-700 hover:underline underline-offset-4 transition-colors"
                >
                  {product.title}
                </a>
              ) : (
                product.title
              )}
            </h1>
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
          <GeneralProblemsSection
            categories={product.generalProblems}
            openCategoryId={openGeneralProblemCategoryId}
            onToggleCategory={toggleGeneralProblemsCategory}
          />
          <CommonProblemsSection problems={product.problems} />
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          <DeviceManagementCard
            deviceManagement={product.deviceManagement}
            openItem={openDeviceManagementItem}
            onToggleItem={toggleDeviceManagementItem}
          />
          <DocumentationLinksCard docLinks={product.docLinks} />
        </div>
      </div>
    </div>
  );
}
