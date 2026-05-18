import type { DeviceManagement, ManagementMethod } from "../types";
import { ChevronDownIcon, DeviceManagementIcon } from "./kb-icons";

function DeviceManagementAccordion({
  title,
  status,
  methods,
  isOpen,
  onToggle,
}: {
  title: string;
  status: "supported" | "not_supported";
  methods: ManagementMethod[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isSupported = status === "supported";

  return (
    <div className="border border-stone-200 rounded-lg bg-stone-50">
      <button
        type="button"
        onClick={onToggle}
        disabled={!isSupported}
        className={`w-full px-4 py-3 flex items-center justify-between gap-3 text-left ${
          isSupported
            ? "hover:bg-zinc-100 cursor-pointer"
            : "cursor-not-allowed"
        } transition-colors`}
      >
        <span className="text-sm font-semibold text-zinc-900">{title}</span>
        {isSupported ? (
          <ChevronDownIcon isOpen={isOpen} />
        ) : (
          <span className="text-xs font-medium text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md whitespace-nowrap">
            Not supported yet
          </span>
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isSupported && isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-4 text-sm text-zinc-600 space-y-4">
            {/* CASE A: Single Method - render steps directly without labels */}
            {methods.length === 1 ? (
              <ol className="list-decimal space-y-2 pl-4">
                {methods[0].steps.map((step, index) => (
                  <li key={`${title}-step-${index}`}>{step}</li>
                ))}
              </ol>
            ) : (
              /* CASE B: Multiple Methods - render with method titles as sub-headers */
              <div className="space-y-4">
                {methods.map((method, methodIndex) => (
                  <div key={`${title}-method-${methodIndex}`}>
                    {method.methodTitle && (
                      <h3 className="font-bold text-zinc-700 mb-2">
                        {method.methodTitle}
                      </h3>
                    )}
                    <ol className="list-decimal space-y-2 pl-4">
                      {method.steps.map((step, stepIndex) => (
                        <li
                          key={`${title}-method-${methodIndex}-step-${stepIndex}`}
                        >
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DeviceManagementCard({
  deviceManagement,
  openItem,
  onToggleItem,
}: {
  deviceManagement?: DeviceManagement;
  openItem: "factoryReset" | "firmwareUpdate" | null;
  onToggleItem: (item: "factoryReset" | "firmwareUpdate") => void;
}) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-stone-200">
        <DeviceManagementIcon />
        <h2 className="text-sm font-bold text-zinc-900">Device Management</h2>
      </div>
      <div className="p-4 space-y-3">
        {deviceManagement ? (
          <>
            <DeviceManagementAccordion
              title="Factory Reset"
              status={deviceManagement.factoryReset.status}
              methods={deviceManagement.factoryReset.methods}
              isOpen={openItem === "factoryReset"}
              onToggle={() => onToggleItem("factoryReset")}
            />
            <DeviceManagementAccordion
              title="Firmware Update"
              status={deviceManagement.firmwareUpdate.status}
              methods={deviceManagement.firmwareUpdate.methods}
              isOpen={openItem === "firmwareUpdate"}
              onToggle={() => onToggleItem("firmwareUpdate")}
            />
          </>
        ) : (
          <div className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-6 text-center">
            <p className="text-sm text-zinc-400 italic">
              No device management options available for this product.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
