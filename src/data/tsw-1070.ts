import type { ProductInfo } from "../types";

export const tsw1070Data: ProductInfo = {
  id: "TSW-1070",
  title: "TSW-1070",
  category: "Network",
  shortDescription: "Managed industrial Ethernet switch with 10 ports",
  tagLabel: "TW",
  tagColor: "bg-sky-600",

  problems: [
    {
      id: "tsw1070-p1",
      title: "Port flapping detected",
      description: "A switch port repeatedly toggles between link-up and link-down.",
      refCode: "#150301",
    },
    {
      id: "tsw1070-p2",
      title: "VLAN configuration lost after reboot",
      description: "VLAN configuration is not retained after power loss or reboot.",
      refCode: "#150422",
    },
    {
      id: "tsw1070-p3",
      title: "Web interface unavailable",
      description: "Management UI times out on HTTPS port 443.",
      refCode: "#150589",
    },
  ],

  generalProblems: [
    {
      id: "tsw1070-gp-network",
      title: "Network & Connectivity",
      kind: "network",
      checks: [
        {
          id: "tsw1070-n1",
          title: "Validate link stability on affected ports",
          prompt:
            "Check interface counters for link flaps, CRC errors, and speed/duplex mismatches.",
          refCode: "#150301",
        },
        {
          id: "tsw1070-n2",
          title: "Confirm management VLAN path",
          prompt:
            "Verify management VLAN tagging and routing to ensure HTTPS traffic reaches the switch.",
          refCode: "#150589",
        },
        {
          id: "tsw1070-n3",
          title: "Verify STP and loop-protection state",
          prompt:
            "Inspect STP events and loop-detection logs that may cause temporary port shutdowns.",
          refCode: "#150301",
        },
        {
          id: "tsw1070-n4",
          title: "Confirm DNS and gateway resolution",
          prompt:
            "Validate DNS and default gateway behavior for management-plane connectivity checks.",
          refCode: "#150590",
        },
      ],
    },
    {
      id: "tsw1070-gp-software",
      title: "Software & Firmware",
      kind: "software",
      checks: [
        {
          id: "tsw1070-s1",
          title: "Record running firmware version",
          prompt:
            "Use CLI command 'show version' and compare with approved baseline version.",
          refCode: "#150301",
        },
        {
          id: "tsw1070-s2",
          title: "Verify persistent configuration mode",
          prompt:
            "Ensure System > Storage > Persistent Config is enabled for startup retention.",
          refCode: "#150422",
        },
        {
          id: "tsw1070-s3",
          title: "Check startup-config write events",
          prompt:
            "Confirm that save operations complete without write errors before power cycling.",
          refCode: "#150422",
        },
        {
          id: "tsw1070-s4",
          title: "Review reboot reason and last crash logs",
          prompt:
            "Inspect reboot cause history and firmware logs for software-level instability.",
          refCode: "#150591",
        },
      ],
    },
    {
      id: "tsw1070-gp-system",
      title: "System Health",
      kind: "system",
      checks: [
        {
          id: "tsw1070-h1",
          title: "Validate power input stability",
          prompt:
            "Check power source fluctuations and confirm voltage remains within specification.",
          refCode: "#150592",
        },
        {
          id: "tsw1070-h2",
          title: "Review thermal operating conditions",
          prompt:
            "Capture chassis temperature and verify airflow and ambient temperature are compliant.",
          refCode: "#150593",
        },
        {
          id: "tsw1070-h3",
          title: "Inspect port hardware and cabling quality",
          prompt:
            "Inspect connectors and test cable integrity to eliminate physical-layer instability.",
          refCode: "#150301",
        },
        {
          id: "tsw1070-h4",
          title: "Confirm management access controls",
          prompt:
            "Review ACL or firewall policies that may block UI access while ping still works.",
          refCode: "#150589",
        },
      ],
    },
  ],

  deviceManagement: {
    factoryReset: {
      status: "not_supported",
      instructions: [],
    },
    firmwareUpdate: {
      status: "not_supported",
      instructions: [],
    },
  },

  docLinks: [
    {
      id: "tsw1070-d1",
      title: "TSW-1070 Administration Guide",
      subtitle: "Manual",
      type: "manual",
    },
    {
      id: "tsw1070-d2",
      title: "VLAN Configuration Masterclass",
      subtitle: "Video",
      type: "video",
    },
    {
      id: "tsw1070-d3",
      title: "Firmware v3.5.2 Download",
      subtitle: "Firmware",
      type: "firmware",
    },
    {
      id: "tsw1070-d4",
      title: "Datasheet TSW-1070",
      subtitle: "Datasheet",
      type: "datasheet",
    },
  ],
};
