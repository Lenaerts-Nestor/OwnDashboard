import type { ProductInfo } from "../types";

export const tsr310Data: ProductInfo = {
  id: "TSR-310",
  title: "TSR-310",
  category: "Remote Control",
  shortDescription: "Crestron wireless touchscreen remote control",
  tagLabel: "TS",
  tagColor: "bg-orange-500",

  problems: [
    {
      id: "tsr310-p1",
      title: "Slow Wi-Fi reconnection after sleep",
      description:
        "The unit needs 20-30 seconds to reconnect to Wi-Fi after waking from sleep.",
      refCode: "#TSR-001",
    },
    {
      id: "tsr310-p2",
      title: "Touchscreen unresponsive",
      description:
        "Touch input is intermittent or fully unresponsive after boot or during use.",
      refCode: "#TSR-002",
    },
    {
      id: "tsr310-p3",
      title: '"Unable to load the user interface" after boot',
      description:
        'The screen shows "unable to load the user interface" immediately after startup.',
      refCode: "#TSR-003",
    },
    {
      id: "tsr310-p4",
      title: "Volume buttons only control active endpoint",
      description:
        "In Crestron Home, the volume rocker is tied to the active audio endpoint only.",
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
          title: "Capture reconnect latency after wake",
          prompt:
            "Time how long the remote needs to restore Wi-Fi after waking and compare against expected reconnection time.",
          refCode: "#TSR-001",
        },
        {
          id: "tsr310-n2",
          title: "Validate signal strength in usage location",
          prompt:
            "Record RSSI at the normal user location and confirm no access point handoff instability is present.",
          refCode: "#TSR-007",
        },
        {
          id: "tsr310-n3",
          title: "Confirm DHCP lease behavior",
          prompt:
            "Check whether lease renewal or IP conflicts occur after sleep transitions.",
          refCode: "#TSR-008",
        },
        {
          id: "tsr310-n4",
          title: "Verify endpoint reachability",
          prompt:
            "Validate ping and control endpoint reachability from the same VLAN used by the remote.",
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
          title: "Inspect hardware condition before software triage",
          prompt:
            "Check for cracks, moisture, or pressure marks and document physical findings before proceeding.",
          refCode: "#TSR-002",
        },
        {
          id: "tsr310-d2",
          title: "Classify touch failure pattern",
          prompt:
            "Determine whether the issue is intermittent, area-specific, or fully unresponsive from boot.",
          refCode: "#TSR-002",
        },
        {
          id: "tsr310-d3",
          title: "Compare behavior across multiple units",
          prompt:
            "Check if the same touch issue appears on additional units in the same deployment.",
          refCode: "#TSR-002",
        },
        {
          id: "tsr310-d4",
          title: "Verify post-boot UI rendering",
          prompt:
            'Record whether the UI fails immediately at startup with "Unable to load the user interface".',
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
          title: "Validate last firmware action",
          prompt:
            "Confirm if the issue started after a firmware update, rollback, or reset procedure.",
          refCode: "#TSR-003",
        },
        {
          id: "tsr310-s2",
          title: "Verify recovery outcome",
          prompt:
            "Document the exact result of the latest factory recovery attempt and boot sequence.",
          refCode: "#TSR-003",
        },
        {
          id: "tsr310-s3",
          title: "Confirm control system type and binding behavior",
          prompt:
            "Identify whether the deployment uses Crestron Home or custom SIMPL logic before judging volume-routing behavior.",
          refCode: "#TSR-004",
        },
        {
          id: "tsr310-s4",
          title: "Check toolbox visibility and diagnostics",
          prompt:
            "Verify the unit is discoverable in Toolbox and capture logs before escalation.",
          refCode: "#TSR-003",
        },
      ],
    },
  ],

  deviceManagement: {
    factoryReset: {
      status: "supported",
      instructions: [
        "Open the service interface and navigate to Device Settings > Recovery.",
        "Select Factory Reset, confirm the warning, and wait for the reboot to finish.",
        "Complete basic setup again and verify network connectivity before handing back.",
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
      subtitle: "Manual",
      type: "manual",
    },
    {
      id: "tsr310-d2",
      title: "TSR-310 Recovery Procedure",
      subtitle: "Manual",
      type: "manual",
    },
    {
      id: "tsr310-d3",
      title: "TSR-310 Supplemental Guide (Standby Settings)",
      subtitle: "Manual",
      type: "manual",
    },
    {
      id: "tsr310-d4",
      title: "Latest Firmware Download",
      subtitle: "Firmware",
      type: "firmware",
    },
    {
      id: "tsr310-d5",
      title: "Datasheet TSR-310",
      subtitle: "Datasheet",
      type: "datasheet",
    },
  ],
};
