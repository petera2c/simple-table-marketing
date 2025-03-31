import { HeaderObject } from "simple-table-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCog,
  faExclamationTriangle,
  faClock,
  faTools,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Tag, Progress } from "antd";

export const HEADERS: HeaderObject[] = [
  {
    accessor: "productLine",
    label: "Production Line",
    width: 180,
    expandable: true,
    isSortable: true,
    isEditable: false,
    align: "left",
    cellRenderer: ({ row }) => {
      const isLineRow = row.rowData.station?.toString().includes("Summary") || false;
      return isLineRow ? <span className="font-bold">{row.rowData.productLine}</span> : row.rowData.productLine;
    },
  },
  {
    accessor: "station",
    label: "Workstation",
    width: 150,
    isSortable: true,
    isEditable: false,
    align: "left",
    cellRenderer: ({ row }) => {
      const isLineRow = row.rowData.station?.toString().includes("Summary") || false;
      if (isLineRow) {
        return <span className="text-gray-500">{row.rowData.id}</span>;
      }
      return (
        <div className="flex items-center gap-1">
          <span className="bg-blue-100 text-blue-700 text-xs font-medium px-1.5 py-0.5 rounded">{row.rowData.id}</span>
          <span>{row.rowData.station}</span>
        </div>
      );
    },
  },
  {
    accessor: "machineType",
    label: "Machine Type",
    width: 150,
    isSortable: true,
    isEditable: false,
    align: "left",
  },
  {
    accessor: "status",
    label: "Status",
    width: 180,
    isSortable: true,
    isEditable: false,
    align: "center",
    cellRenderer: ({ row }) => {
      if (row.rowData.status === "—") return "—";

      const status = row.rowData.status as string;
      const colorMap = {
        Running: { color: "green", icon: faCheckCircle },
        "Scheduled Maintenance": { color: "blue", icon: faCog },
        "Unplanned Downtime": { color: "red", icon: faExclamationTriangle },
        Idle: { color: "orange", icon: faClock },
        Setup: { color: "purple", icon: faTools },
      };

      const statusInfo = colorMap[status as keyof typeof colorMap] || { color: "default", icon: faInfoCircle };

      return (
        <Tag color={statusInfo.color} className="px-2 py-1">
          <FontAwesomeIcon icon={statusInfo.icon} className="mr-1" />
          {status}
        </Tag>
      );
    },
  },
  {
    accessor: "outputRate",
    label: "Output (units/shift)",
    width: 160,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      const isLineRow = row.rowData.station?.toString().includes("Summary") || false;
      return <div className={isLineRow ? "font-bold" : ""}>{(row.rowData.outputRate as number).toLocaleString()}</div>;
    },
  },
  {
    accessor: "cycletime",
    label: "Cycle Time (s)",
    width: 140,
    isSortable: true,
    isEditable: false,
    align: "right",
  },
  {
    accessor: "efficiency",
    label: "Efficiency",
    width: 150,
    isSortable: true,
    isEditable: false,
    align: "center",
    cellRenderer: ({ row }) => {
      if (row.rowData.efficiency === "—") return "—";

      const efficiency = row.rowData.efficiency as number;
      const getColorByEfficiency = (value: number): "success" | "normal" | "exception" => {
        if (value >= 90) return "success";
        if (value >= 75) return "normal";
        return "exception";
      };

      return (
        <div className="w-full flex flex-col">
          <Progress percent={efficiency} size="small" showInfo={false} status={getColorByEfficiency(efficiency)} />
          <div className="text-xs text-center mt-1">{efficiency}%</div>
        </div>
      );
    },
  },
  {
    accessor: "defectRate",
    label: "Defect Rate",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.defectRate === "—") return "—";
      const rate = parseFloat(row.rowData.defectRate as string);
      const color = rate < 1 ? "text-green-600" : rate < 3 ? "text-orange-500" : "text-red-600";

      return <span className={color}>{rate}%</span>;
    },
  },
  {
    accessor: "defectCount",
    label: "Defects",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
  },
  {
    accessor: "downtime",
    label: "Downtime (h)",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.downtime === "—") return "—";

      const hours = parseFloat(row.rowData.downtime as string);
      const color = hours < 1 ? "text-green-600" : hours < 2 ? "text-orange-500" : "text-red-600";

      return <span className={color}>{hours}</span>;
    },
  },
  {
    accessor: "utilization",
    label: "Utilization",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      if (row.rowData.utilization === "—") return "—";
      return `${row.rowData.utilization}%`;
    },
  },
  {
    accessor: "energy",
    label: "Energy (kWh)",
    width: 130,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      return (row.rowData.energy as number).toLocaleString();
    },
  },
  {
    accessor: "maintenanceDate",
    label: "Next Maintenance",
    width: 150,
    isSortable: true,
    isEditable: false,
    align: "center",
    cellRenderer: ({ row }) => {
      if (row.rowData.maintenanceDate === "—") return "—";

      const date = new Date(row.rowData.maintenanceDate as string);
      const today = new Date();
      const diffDays = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      let color = "blue";
      if (diffDays <= 3) color = "red";
      else if (diffDays <= 7) color = "orange";

      return (
        <Tag color={color}>
          {date.toLocaleDateString()} ({diffDays} days)
        </Tag>
      );
    },
  },
];
