export interface StatMetric {
  value: string;
  label: string;
  detail: string;
  accent?: string;
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
      detail: "Colleges and tech institutes conducting automated placement assessments simultaneously.",
      accent: "#7c3aed",
    },
    {
      value: "Zero-Latency",
      label: "Proctoring Engine",
      detail: "On-device AI integrity checks with multi-feed audio/video anomaly monitoring.",
      accent: "#3b82f6",
    },
    {
      value: "99.9%",
      label: "Assessment Reliability",
      detail: "Guaranteed enterprise uptime across peak placement season concurrency spikes.",
      accent: "#10b981",
    },
    {
      value: "50,000+",
      label: "Students Benchmarked",
      detail: "Engineers prepared and credentialed across verified corporate pathway standards.",
      accent: "#f59e0b",
    },
  ] satisfies StatMetric[],
};
