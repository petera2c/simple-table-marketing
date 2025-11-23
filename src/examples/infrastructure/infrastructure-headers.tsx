import { HeaderObject } from "simple-table-core";

export const HEADERS: HeaderObject[] = [
  {
    accessor: "serverId",
    align: "left",
    filterable: true,
    isEditable: false,
    isSortable: true,
    label: "Server ID",
    minWidth: 180,
    pinned: "left",
    type: "string",
    width: "1.2fr",
    cellRenderer: ({ row }) => {
      return (
        <span style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>
          {row.serverId as string}
        </span>
      );
    },
  },
  {
    accessor: "serverName",
    align: "left",
    filterable: true,
    isEditable: false,
    isSortable: true,
    label: "Name",
    minWidth: 200,
    type: "string",
    width: "1.5fr",
  },
  {
    accessor: "performance",
    label: "Performance Metrics",
    width: 690,
    isSortable: false,
    children: [
      {
        accessor: "cpuHistory",
        label: "CPU History",
        width: 150,
        isSortable: false,
        filterable: false,
        isEditable: false,
        align: "center",
        type: "lineAreaChart",
        tooltip: "CPU usage over the last 30 intervals",
      },
      {
        accessor: "cpuUsage",
        label: "CPU %",
        width: 120,
        isSortable: true,
        filterable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row, theme }) => {
          const cpu = row.cpuUsage as number;

          const getColorStyles = (cpu: number, theme: string) => {
            const getLevel = () => {
              if (cpu >= 90) return "critical";
              if (cpu >= 80) return "warning";
              if (cpu >= 60) return "moderate";
              return "good";
            };

            const level = getLevel();

            switch (theme) {
              case "dark":
                return {
                  critical: { color: "#f87171", backgroundColor: "rgba(127, 29, 29, 0.3)" },
                  warning: { color: "#fbbf24", backgroundColor: "rgba(146, 64, 14, 0.3)" },
                  moderate: { color: "#60a5fa", backgroundColor: "rgba(30, 58, 138, 0.3)" },
                  good: { color: "#4ade80", backgroundColor: "rgba(20, 83, 45, 0.3)" },
                }[level];
              case "sky":
                return {
                  critical: { color: "#dc2626", backgroundColor: "#fef2f2" },
                  warning: { color: "#d97706", backgroundColor: "#fffbeb" },
                  moderate: { color: "#0284c7", backgroundColor: "#e0f2fe" },
                  good: { color: "#059669", backgroundColor: "#ecfdf5" },
                }[level];
              case "violet":
                return {
                  critical: { color: "#db2777", backgroundColor: "#fdf2f8" },
                  warning: { color: "#d97706", backgroundColor: "#fffbeb" },
                  moderate: { color: "#7c3aed", backgroundColor: "#ede9fe" },
                  good: { color: "#0891b2", backgroundColor: "#ecfeff" },
                }[level];
              case "neutral":
                return {
                  critical: { color: "#57534e", backgroundColor: "#f5f5f4" },
                  warning: { color: "#78716c", backgroundColor: "#fafaf9" },
                  moderate: { color: "#78716c", backgroundColor: "#fafaf9" },
                  good: { color: "#57534e", backgroundColor: "#f5f5f4" },
                }[level];
              case "light":
              default:
                return {
                  critical: { color: "#dc2626", backgroundColor: "#fef2f2" },
                  warning: { color: "#d97706", backgroundColor: "#fffbeb" },
                  moderate: { color: "#2563eb", backgroundColor: "#eff6ff" },
                  good: { color: "#16a34a", backgroundColor: "#f0fdf4" },
                }[level];
            }
          };

          const styles = getColorStyles(cpu, theme);

          return (
            <div style={{ display: "flex", justifyContent: "end" }}>
              <div
                style={{
                  padding: "3px 6px",
                  borderRadius: "3px",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                  ...styles,
                }}
              >
                {cpu.toFixed(1)}%
              </div>
            </div>
          );
        },
      },
      {
        accessor: "memoryUsage",
        label: "Memory %",
        width: 130,
        isSortable: true,
        filterable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row, theme }) => {
          const memory = row.memoryUsage as number;

          const getColorStyles = (memory: number, theme: string) => {
            const getLevel = () => {
              if (memory >= 95) return "critical";
              if (memory >= 85) return "warning";
              if (memory >= 70) return "moderate";
              return "good";
            };

            const level = getLevel();

            switch (theme) {
              case "dark":
                return {
                  critical: { color: "#f87171", backgroundColor: "rgba(127, 29, 29, 0.3)" },
                  warning: { color: "#fbbf24", backgroundColor: "rgba(146, 64, 14, 0.3)" },
                  moderate: { color: "#60a5fa", backgroundColor: "rgba(30, 58, 138, 0.3)" },
                  good: { color: "#4ade80", backgroundColor: "rgba(20, 83, 45, 0.3)" },
                }[level];
              case "sky":
                return {
                  critical: { color: "#dc2626", backgroundColor: "#fef2f2" },
                  warning: { color: "#d97706", backgroundColor: "#fffbeb" },
                  moderate: { color: "#0284c7", backgroundColor: "#e0f2fe" },
                  good: { color: "#059669", backgroundColor: "#ecfdf5" },
                }[level];
              case "violet":
                return {
                  critical: { color: "#db2777", backgroundColor: "#fdf2f8" },
                  warning: { color: "#d97706", backgroundColor: "#fffbeb" },
                  moderate: { color: "#7c3aed", backgroundColor: "#ede9fe" },
                  good: { color: "#0891b2", backgroundColor: "#ecfeff" },
                }[level];
              case "neutral":
                return {
                  critical: { color: "#57534e", backgroundColor: "#f5f5f4" },
                  warning: { color: "#78716c", backgroundColor: "#fafaf9" },
                  moderate: { color: "#78716c", backgroundColor: "#fafaf9" },
                  good: { color: "#57534e", backgroundColor: "#f5f5f4" },
                }[level];
              case "light":
              default:
                return {
                  critical: { color: "#dc2626", backgroundColor: "#fef2f2" },
                  warning: { color: "#d97706", backgroundColor: "#fffbeb" },
                  moderate: { color: "#2563eb", backgroundColor: "#eff6ff" },
                  good: { color: "#16a34a", backgroundColor: "#f0fdf4" },
                }[level];
            }
          };

          const styles = getColorStyles(memory, theme);

          return (
            <div style={{ display: "flex", justifyContent: "end" }}>
              <div
                style={{
                  padding: "3px 6px",
                  borderRadius: "3px",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                  ...styles,
                }}
              >
                {memory.toFixed(1)}%
              </div>
            </div>
          );
        },
      },
      {
        accessor: "diskUsage",
        label: "Disk %",
        width: 120,
        isSortable: true,
        filterable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row, theme }) => {
          const disk = row.diskUsage as number;
          return `${disk.toFixed(1)}%`;
        },
      },
      {
        accessor: "responseTime",
        label: "Response (ms)",
        width: 170,
        isSortable: true,
        filterable: true,
        isEditable: true,
        align: "right",
        type: "number",
        cellRenderer: ({ row, theme }) => {
          const responseTime = row.responseTime as number;

          const getColorStyles = (time: number, theme: string) => {
            const getLevel = () => {
              if (time >= 400) return "critical";
              if (time >= 200) return "warning";
              if (time >= 100) return "moderate";
              return "good";
            };

            const level = getLevel();

            switch (theme) {
              case "dark":
                return {
                  critical: { color: "#f87171" },
                  warning: { color: "#fbbf24" },
                  moderate: { color: "#60a5fa" },
                  good: { color: "#4ade80" },
                }[level];
              case "sky":
                return {
                  critical: { color: "#dc2626" },
                  warning: { color: "#d97706" },
                  moderate: { color: "#0284c7" },
                  good: { color: "#059669" },
                }[level];
              case "violet":
                return {
                  critical: { color: "#db2777" },
                  warning: { color: "#d97706" },
                  moderate: { color: "#7c3aed" },
                  good: { color: "#0891b2" },
                }[level];
              case "neutral":
                return {
                  critical: { color: "#57534e" },
                  warning: { color: "#78716c" },
                  moderate: { color: "#78716c" },
                  good: { color: "#57534e" },
                }[level];
              case "light":
              default:
                return {
                  critical: { color: "#dc2626" },
                  warning: { color: "#d97706" },
                  moderate: { color: "#2563eb" },
                  good: { color: "#16a34a" },
                }[level];
            }
          };

          const styles = getColorStyles(responseTime, theme);

          return <span style={{ fontWeight: "500", ...styles }}>{responseTime.toFixed(1)}</span>;
        },
      },
    ],
  },

  {
    accessor: "status",
    label: "Status",
    width: 130,
    isSortable: true,
    filterable: true,
    isEditable: false,
    align: "center",
    type: "enum",
    enumOptions: [
      { label: "Online", value: "online" },
      { label: "Warning", value: "warning" },
      { label: "Critical", value: "critical" },
      { label: "Maintenance", value: "maintenance" },
      { label: "Offline", value: "offline" },
    ],
    cellRenderer: ({ row, theme }) => {
      const status = row.status as string;

      const getColorStyles = (status: string, theme: string) => {
        const getStatusType = (status: string) => {
          switch (status) {
            case "online":
              return "online";
            case "warning":
              return "warning";
            case "critical":
              return "critical";
            case "maintenance":
              return "maintenance";
            case "offline":
              return "offline";
            default:
              return "unknown";
          }
        };

        const type = getStatusType(status);

        switch (theme) {
          case "dark":
            return {
              online: { color: "#4ade80", backgroundColor: "rgba(20, 83, 45, 0.3)" },
              warning: { color: "#fbbf24", backgroundColor: "rgba(146, 64, 14, 0.3)" },
              critical: { color: "#f87171", backgroundColor: "rgba(127, 29, 29, 0.3)" },
              maintenance: { color: "#60a5fa", backgroundColor: "rgba(30, 58, 138, 0.3)" },
              offline: { color: "#9ca3af", backgroundColor: "rgba(55, 65, 81, 0.3)" },
              unknown: { color: "#9ca3af", backgroundColor: "rgba(55, 65, 81, 0.3)" },
            }[type];
          case "sky":
            return {
              online: { color: "#059669", backgroundColor: "#ecfdf5" },
              warning: { color: "#d97706", backgroundColor: "#fffbeb" },
              critical: { color: "#dc2626", backgroundColor: "#fef2f2" },
              maintenance: { color: "#0284c7", backgroundColor: "#e0f2fe" },
              offline: { color: "#475569", backgroundColor: "#f8fafc" },
              unknown: { color: "#475569", backgroundColor: "#f8fafc" },
            }[type];
          case "violet":
            return {
              online: { color: "#0891b2", backgroundColor: "#ecfeff" },
              warning: { color: "#d97706", backgroundColor: "#fffbeb" },
              critical: { color: "#db2777", backgroundColor: "#fdf2f8" },
              maintenance: { color: "#7c3aed", backgroundColor: "#ede9fe" },
              offline: { color: "#9333ea", backgroundColor: "#faf5ff" },
              unknown: { color: "#9333ea", backgroundColor: "#faf5ff" },
            }[type];
          case "neutral":
            return {
              online: { color: "#57534e", backgroundColor: "#f5f5f4" },
              warning: { color: "#78716c", backgroundColor: "#fafaf9" },
              critical: { color: "#57534e", backgroundColor: "#f5f5f4" },
              maintenance: { color: "#78716c", backgroundColor: "#fafaf9" },
              offline: { color: "#a8a29e", backgroundColor: "#fafaf9" },
              unknown: { color: "#a8a29e", backgroundColor: "#fafaf9" },
            }[type];
          case "light":
          default:
            return {
              online: { color: "#16a34a", backgroundColor: "#f0fdf4" },
              warning: { color: "#d97706", backgroundColor: "#fffbeb" },
              critical: { color: "#dc2626", backgroundColor: "#fef2f2" },
              maintenance: { color: "#2563eb", backgroundColor: "#eff6ff" },
              offline: { color: "#4b5563", backgroundColor: "#f9fafb" },
              unknown: { color: "#4b5563", backgroundColor: "#f9fafb" },
            }[type];
        }
      };

      const styles = getColorStyles(status, theme);
      const displayText = status.charAt(0).toUpperCase() + status.slice(1);

      return (
        <div
          style={{
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: "600",
            fontSize: "0.75rem",
            ...styles,
          }}
        >
          {displayText}
        </div>
      );
    },
  },
];
