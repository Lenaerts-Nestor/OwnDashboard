import type { DeviceManagement } from "../types";
import { ChevronDownIcon, DeviceManagementIcon } from "./kb-icons";

function DeviceManagementAccordion({
  title,
  status,
  instructions,
  isOpen,
  onToggle,
}: {
  title: string;
  status: "supported" | "not_supported";
  instructions: string[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isSupported = status === "supported";

  return (
    <div className="border border-gray-100 rounded-lg bg-gray-50/60">
      <button
        type="button"
        onClick={onToggle}
        disabled={!isSupported}
        className={`w-full px-4 py-3 flex items-center justify-between gap-3 text-left ${
          isSupported ? "hover:bg-gray-50 cursor-pointer" : "cursor-not-allowed"
        } transition-colors`}
      >
        <span className="text-sm font-semibold text-gray-800">{title}</span>
        {isSupported ? (
          <ChevronDownIcon isOpen={isOpen} />
        ) : (
          <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md whitespace-nowrap">
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
          <ol className="px-8 pb-4 text-sm text-gray-600 list-decimal space-y-2">
            {instructions.map((instruction, index) => (
              <li key={`${title}-instruction-${index}`}>{instruction}</li>
            ))}
          </ol>
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
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100">
        <DeviceManagementIcon />
        <h2 className="text-sm font-bold text-gray-800">Device Management</h2>
      </div>
      <div className="p-4 space-y-3">
        {deviceManagement ? (
          <>
            <DeviceManagementAccordion
              title="Factory Reset"
              status={deviceManagement.factoryReset.status}
              instructions={deviceManagement.factoryReset.instructions}
              isOpen={openItem === "factoryReset"}
              onToggle={() => onToggleItem("factoryReset")}
            />
            <DeviceManagementAccordion
              title="Firmware Update"
              status={deviceManagement.firmwareUpdate.status}
              instructions={deviceManagement.firmwareUpdate.instructions}
              isOpen={openItem === "firmwareUpdate"}
              onToggle={() => onToggleItem("firmwareUpdate")}
            />
          </>
        ) : (
          <div className="rounded-lg border border-gray-100 bg-gray-50/60 px-4 py-6 text-center">
            <p className="text-sm text-gray-400 italic">
              No device management options available for this product.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
