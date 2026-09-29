export interface StatMetric {
  value: string;
  label: string;
}

export const statsData = {
  heading: "Enterprise-Grade Infrastructure for High-Stakes Placements.",
  subheading:
    "Powering 1,300+ large-scale candidate drives with 99.9% uptime and zero-latency proctoring.",
  footerTagline: "Engineered for Concurrent Peak Loads & Global Integrity.",
  metrics: [
    {
      value: "1,300+",
      label: "Institutional Drives",
    },
    {
      value: "Zero-Latency",
      label: "Proctoring Engine",
    },
    {
      value: "99.9% Uptime",
      label: "Assessment Reliability",
    },
  ] satisfies StatMetric[],
};
