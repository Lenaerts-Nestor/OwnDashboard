import type { ProductInfo } from "../types";

export const tsr310Data: ProductInfo = {
  id: "TSR-310",
  title: "TSR-310",
  category: "Remote Control",
  shortDescription: "Wireless touchscreen remote (case dashboard entry)",
  tagLabel: "TS",
  tagColor: "bg-orange-500",

  problems: [
    {
      id: "tsr310-p1",
      title: "Slow Wi-Fi reconnection after sleep",
      description:
        "After wake, the unit takes noticeably longer than expected to rejoin Wi-Fi and restore control.",
      refCode: "#TSR-001",
    },
    {
      id: "tsr310-p2",
      title: "Touchscreen unresponsive",
      description:
        "Touch input is inconsistent (intermittent / zone-specific / fully unresponsive) and requires classification before escalation.",
      refCode: "#TSR-002",
    },
    {
      id: "tsr310-p3",
      title: '"Unable to load the user interface" after boot',
      description:
        "UI fails during startup and displays an error before the interface becomes usable.",
      refCode: "#TSR-003",
    },
    {
      id: "tsr310-p4",
      title: "Volume buttons only control active endpoint",
      description:
        "Volume control follows the active endpoint in Crestron Home; confirm whether this is expected by design for the deployment.",
      refCode: "#TSR-004",
    },
  ],

  generalProblems: [
    {
      id: "tsr310-gp-battery",
      title: "Battery & Power Supply",
      kind: "battery",
      checks: [
        {
          id: "tsr310-b1",
          title: "Review current standby settings",
          prompt:
            "Open Web Interface > Settings > System Setup > Standby and record Docked Standby Time and Undocked Suspended Time.",
          refCode: "#TSR-001",
        },
        {
          id: "tsr310-b2",
          title: "Validate docked versus undocked usage profile",
          prompt:
            "Confirm whether the device is mostly docked or undocked and align sleep policy accordingly.",
          refCode: "#TSR-001",
        },
        {
          id: "tsr310-b3",
          title: "Measure standby battery drain",
          prompt:
            "Compare battery level before and after an 8-hour standby window; drain above 15% indicates background wake events.",
          refCode: "#TSR-005",
        },
        {
          id: "tsr310-b4",
          title: "Verify charging state and dock contact quality",
          prompt:
            "Confirm charge LED behavior and inspect dock contact stability to rule out intermittent charging.",
          refCode: "#TSR-006",
        },
      ],
    },
    {
      id: "tsr310-gp-network",
      title: "Network & Connectivity",
      kind: "network",
      checks: [
        {
          id: "tsr310-n1",
          title: "Measure post-wake reconnection time",
          prompt:
            "Record the time from wake to a stable Wi-Fi connection and compare against the expected baseline for the site.",
          refCode: "#TSR-001",
        },
        {
          id: "tsr310-n2",
          title: "Validate RF conditions and roaming behavior",
          prompt:
            "Capture RSSI at the typical user location and confirm there is no access point handoff/roaming instability.",
          refCode: "#TSR-007",
        },
        {
          id: "tsr310-n3",
          title: "Confirm DHCP and IP stability",
          prompt:
            "Check for lease renewals, IP conflicts, or VLAN changes triggered by sleep/wake transitions.",
          refCode: "#TSR-008",
        },
        {
          id: "tsr310-n4",
          title: "Verify control system reachability",
          prompt:
            "Validate that required endpoints are reachable from the remote VLAN (ICMP + control ports as applicable).",
          refCode: "#TSR-003",
        },
      ],
    },
    {
      id: "tsr310-gp-display",
      title: "Display & Touchscreen",
      kind: "display",
      checks: [
        {
          id: "tsr310-d1",
          title: "Document physical condition first",
          prompt:
            "Inspect for cracks, moisture exposure, or pressure damage and document findings before software troubleshooting.",
          refCode: "#TSR-002",
        },
        {
          id: "tsr310-d2",
          title: "Classify the touch failure pattern",
          prompt:
            "Identify whether the issue is intermittent, zone-specific, or fully unresponsive (including from boot).",
          refCode: "#TSR-002",
        },
        {
          id: "tsr310-d3",
          title: "Check reproducibility across units",
          prompt:
            "Verify whether the same behavior is present on other remotes in the deployment (helps separate device vs environment).",
          refCode: "#TSR-002",
        },
        {
          id: "tsr310-d4",
          title: "Confirm startup UI failure state",
          prompt:
            "Capture whether the UI fails during boot with an error (e.g., unable to load the user interface).",
          refCode: "#TSR-003",
        },
      ],
    },
    {
      id: "tsr310-gp-software",
      title: "Software & Firmware",
      kind: "software",
      checks: [
        {
          id: "tsr310-s1",
          title: "Confirm the last known change",
          prompt:
            "Confirm whether the issue started after a firmware update, rollback, provisioning change, or reset—and capture timestamps.",
          refCode: "#TSR-003",
        },
        {
          id: "tsr310-s2",
          title: "Capture recovery outcome",
          prompt:
            "Document the exact result of the latest factory recovery attempt, including any error screens during boot.",
          refCode: "#TSR-003",
        },
        {
          id: "tsr310-s3",
          title: "Validate the expected behavior for the environment",
          prompt:
            "Confirm whether the deployment uses Crestron Home or a custom program before treating endpoint/volume behavior as a defect.",
          refCode: "#TSR-004",
        },
        {
          id: "tsr310-s4",
          title: "Collect diagnostics before escalation",
          prompt:
            "Confirm Toolbox visibility (if applicable) and capture logs/screenshots so escalation includes evidence.",
          refCode: "#TSR-003",
        },
      ],
    },
  ],

  deviceManagement: {
    factoryReset: {
      status: "supported",
      instructions: [
        "Hold the Power and Menu button (Hamburger symbol) until the remote begins to reboot. The reboot cycle is completed once the Crestron Swirl logo appears on the remote's screen",
        "Complete the initial setup prompts and reconnect the unit to the correct Wi‑Fi network.",
        "Re-validate control and UI load behavior after provisioning (capture photos/logs if the issue persists).",
      ],
    },
    firmwareUpdate: {
      status: "not_supported",
      instructions: [],
    },
  },

  docLinks: [
    {
      id: "tsr310-d1",
      title: "TSR-310 Product Page & Resources",
      subtitle: "Official resources (Crestron)",
      type: "manual",
      url: "https://www.crestron.com/Search#q=TSR-310",
    },
    {
      id: "tsr310-d2",
      title: "TSR-310 Recovery Procedure",
      subtitle: "Recovery / re-provisioning guide",
      type: "manual",
      url: "https://www.crestron.com/Search#q=TSR-310%20recovery",
    },
    {
      id: "tsr310-d3",
      title: "TSR-310 Standby Settings Guide",
      subtitle: "Power policy reference",
      type: "manual",
      url: "https://www.crestron.com/Search#q=TSR-310%20standby",
    },
    {
      id: "tsr310-d4",
      title: "Latest Firmware Download",
      subtitle: "Firmware releases",
      type: "firmware",
      url: "https://www.crestron.com/Search#q=TSR-310%20firmware",
    },
    {
      id: "tsr310-d5",
      title: "TSR-310 Datasheet",
      subtitle: "Specifications (PDF)",
      type: "datasheet",
      url: "https://www.crestron.com/Search#q=TSR-310%20datasheet",
    },
  ],
};
