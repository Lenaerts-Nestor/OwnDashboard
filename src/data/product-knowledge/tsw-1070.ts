import type { ProductInfo } from "../../types";

export const tsw1070Data: ProductInfo = {
  id: "TSW-1070",
  title: "TSW-1070",
  category: "Visualization",
  shortDescription: "Touch panel (case dashboard entry)",
  tagLabel: "TW",
  tagColor: "bg-sky-600",

  problems: [
    {
      id: "tsw1070-p1",
      title: "Intermittent connectivity reported",
      description:
        "Users report unstable behavior; confirm whether symptoms track to network conditions, firmware, or deployment configuration.",
      refCode: "#150301",
    },
    {
      id: "tsw1070-p2",
      title: "Configuration not retained after reboot",
      description:
        "Settings appear to reset after power loss; validate save workflow and persistent storage behavior.",
      refCode: "#150422",
    },
    {
      id: "tsw1070-p3",
      title: "Web interface unavailable",
      description:
        "UI access fails (timeouts / refused connection); confirm reachability and access-control paths before escalation.",
      refCode: "#150589",
    },
  ],

  problemCategories: [
    {
      id: "tsw1070-cat-network",
      title: "Network & Connectivity",
      issues: [
        {
          id: "tsw1070-issue-network-01",
          title: "Device disconnects from Wi-Fi every few minutes",
          caseId: "#150301",
          severity: "High",
          casesPer30d: 22,
          steps: [
            {
              id: "tsw1070-issue-network-01-step-1",
              title: "Validate the network path end-to-end",
              description:
                "Confirm the device is on the expected VLAN or subnet and that routing to the management network is correct.",
              refCode: "#150301",
            },
            {
              id: "tsw1070-issue-network-01-step-2",
              title: "Confirm management access path",
              description:
                "Verify that HTTPS traffic can reach the device from the admin network (VLAN tagging, routing, firewall).",
              refCode: "#150589",
            },
            {
              id: "tsw1070-issue-network-01-step-3",
              title: "Eliminate loop or port-security triggers",
              description:
                "Review loop protection, STP events, and security policies that could cause temporary shutdowns or instability.",
              refCode: "#150301",
            },
          ],
        },
      ],
    },
    {
      id: "tsw1070-cat-software",
      title: "Software & Firmware",
      issues: [
        {
          id: "tsw1070-issue-software-01",
          title: "Configuration not retained after reboot",
          caseId: "#150422",
          severity: "Medium",
          casesPer30d: 14,
          steps: [
            {
              id: "tsw1070-issue-software-01-step-1",
              title: "Record the current version and baseline",
              description:
                "Capture the running firmware or software version and compare it to the approved baseline for the environment.",
              refCode: "#150301",
            },
            {
              id: "tsw1070-issue-software-01-step-2",
              title: "Validate configuration persistence settings",
              description:
                "Confirm that the configuration is saved and persistent storage is enabled before reboot testing.",
              refCode: "#150422",
            },
            {
              id: "tsw1070-issue-software-01-step-3",
              title: "Confirm save completes without errors",
              description:
                "Verify that save operations complete successfully and no storage errors are reported.",
              refCode: "#150422",
            },
          ],
        },
      ],
    },
    {
      id: "tsw1070-cat-system",
      title: "System Health",
      issues: [
        {
          id: "tsw1070-issue-system-01",
          title: "Web interface unavailable",
          caseId: "#150589",
          severity: "High",
          casesPer30d: 19,
          steps: [
            {
              id: "tsw1070-issue-system-01-step-1",
              title: "Validate power input stability",
              description:
                "Check power source fluctuations and confirm voltage remains within specification.",
              refCode: "#150592",
            },
            {
              id: "tsw1070-issue-system-01-step-2",
              title: "Review thermal operating conditions",
              description:
                "Capture device temperature and confirm airflow and ambient conditions are within spec.",
              refCode: "#150593",
            },
            {
              id: "tsw1070-issue-system-01-step-3",
              title: "Confirm access control expectations",
              description:
                "Review ACL and firewall rules to ensure UI traffic is permitted (not just ICMP).",
              refCode: "#150589",
            },
          ],
        },
      ],
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
          title: "Validate the network path end-to-end",
          prompt:
            "Confirm the device is on the expected VLAN/subnet and that routing to the management network is correct.",
          refCode: "#150301",
        },
        {
          id: "tsw1070-n2",
          title: "Confirm management access path",
          prompt:
            "Verify that HTTPS traffic can reach the device from the admin network (VLAN tagging, routing, firewall).",
          refCode: "#150589",
        },
        {
          id: "tsw1070-n3",
          title: "Eliminate loop/port-security triggers",
          prompt:
            "Review loop protection, STP events, and security policies that could cause temporary shutdowns or instability.",
          refCode: "#150301",
        },
        {
          id: "tsw1070-n4",
          title: "Verify name-resolution assumptions",
          prompt:
            "If hostnames are used, confirm DNS behavior and gateway reachability from the management plane.",
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
          title: "Record the current version and baseline",
          prompt:
            "Capture the running firmware/software version and compare it to the approved baseline for the customer environment.",
          refCode: "#150301",
        },
        {
          id: "tsw1070-s2",
          title: "Validate configuration persistence settings",
          prompt:
            "Confirm that the configuration is saved and persistent storage is enabled (where applicable) before reboot testing.",
          refCode: "#150422",
        },
        {
          id: "tsw1070-s3",
          title: "Confirm save completes without errors",
          prompt:
            "Verify that save/write operations complete successfully and no storage errors are reported.",
          refCode: "#150422",
        },
        {
          id: "tsw1070-s4",
          title: "Review stability signals",
          prompt:
            "Inspect reboot reason history and logs to determine whether instability is software-driven or environment-driven.",
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
            "Capture device temperature and confirm airflow/ambient conditions are within spec.",
          refCode: "#150593",
        },
        {
          id: "tsw1070-h3",
          title: "Inspect physical layer health",
          prompt:
            "Inspect connectors and cabling, then retest to rule out physical-layer instability.",
          refCode: "#150301",
        },
        {
          id: "tsw1070-h4",
          title: "Confirm access control expectations",
          prompt:
            "Review ACL/firewall rules and role-based access to ensure UI traffic is permitted (not just ICMP).",
          refCode: "#150589",
        },
      ],
    },
  ],

  deviceManagement: {
    factoryReset: {
      status: "supported",
      methods:  [
        {
          methodTitle: "Method 1: Physical Button Reset",
          steps: [
            "Reset the TS(S)(W)-570/770/1070 by pressing and holding the pinhole-recessed reset button on the back of the unit (pictured below) for 5 seconds",
            "The reset cycle is completed once the Crestron Swirl logo with dots below appears onscreen. Repeat this process 10 more times.",

          ],
        },
        {
          methodTitle: "Method 2: Ethernet Cable Reset",
          steps: [
            "Remove the Ethernet cable from the TS(S)(W)-570/770/1070, then reconnect the Ethernet cable. The reset cycle is completed once the Crestron Swirl logo with dots below appears onscreen",
            "Repeat this process 10 more times.",
            "**Reboot: Selecting this option will restart the unit without a restore",
            "**Factory Restore Menu: There are two options; one returns to the prior menu, and the other performs a factory restore",
          ],
        },
        
      ],
    },
    firmwareUpdate: {
      status: "not_supported",
      methods: [],
    },
  },

  docLinks: [
    {
      id: "tsw1070-d1",
      title: "TS/TSS/TSW-570/770/1070: Recovery Procedure",
      subtitle: "Official documentation (Crestron) support page",
      type: "manual",
      url: "https://www.crestron.com/Search#q=TSW-1070",
    },
   
  ],
};
