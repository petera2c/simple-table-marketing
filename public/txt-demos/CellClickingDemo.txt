import { useState } from "react";
import { SimpleTable, HeaderObject, Theme } from "simple-table-core";
import "simple-table-core/styles.css";

type ProjectTask = {
  id: number;
  task: string;
  assignee: string;
  priority: string;
  status: string;
  dueDate: string;
  estimatedHours: number;
  completedHours: number;
  details: string;
};

// Define headers
const headers: HeaderObject[] = [
  { accessor: "id", label: "Task ID", width: 80, isSortable: true, type: "number" },
  {
    accessor: "task",
    label: "Task Name",
    minWidth: 150,
    width: "1fr",
    isSortable: true,
    type: "string",
  },
  { accessor: "assignee", label: "Assignee", width: 120, isSortable: true, type: "string" },
  {
    accessor: "priority",
    label: "Priority",
    width: 100,
    isSortable: true,
    type: "string",
    cellRenderer: ({ accessor, colIndex, row, theme }) => (
      <span
        style={{
          color:
            row.priority === "High" ? "#ef4444" : row.priority === "Medium" ? "#f59e0b" : "#10b981",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        title="Click to filter by priority"
      >
        {String(row.priority)}
      </span>
    ),
  },
  {
    accessor: "status",
    label: "Status",
    width: 120,
    isSortable: true,
    type: "string",
    cellRenderer: ({ accessor, colIndex, row, theme }) => (
      <span
        style={{
          backgroundColor:
            row.status === "Completed"
              ? "#dcfce7"
              : row.status === "In Progress"
              ? "#fef3c7"
              : "#fee2e2",
          color:
            row.status === "Completed"
              ? "#166534"
              : row.status === "In Progress"
              ? "#92400e"
              : "#991b1b",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        title="Click to change status"
      >
        {String(row.status)}
      </span>
    ),
  },
  { accessor: "dueDate", label: "Due Date", width: 120, isSortable: true, type: "date" },
  { accessor: "estimatedHours", label: "Est. Hours", width: 100, isSortable: true, type: "number" },
  { accessor: "completedHours", label: "Done Hours", width: 100, isSortable: true, type: "number" },
  {
    accessor: "details",
    label: "View Details",
    width: 120,
    type: "other",
    cellRenderer: ({ accessor, colIndex, row, theme }) => (
      <button
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#2563eb";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#3b82f6";
        }}
        title="Click to view task details"
      >
        View Details
      </button>
    ),
  },
];

// Sample project tasks data
const PROJECT_TASKS: ProjectTask[] = [
  {
    id: 1001,
    task: "Design login page mockups",
    assignee: "Sarah Chen",
    priority: "High",
    status: "In Progress",
    dueDate: "2024-02-15",
    estimatedHours: 8,
    completedHours: 5,
    details: "Create responsive login page designs with modern UI patterns",
  },
  {
    id: 1002,
    task: "Implement user authentication API",
    assignee: "Marcus Rodriguez",
    priority: "High",
    status: "Not Started",
    dueDate: "2024-02-20",
    estimatedHours: 16,
    completedHours: 0,
    details: "Build secure JWT-based authentication system with OAuth integration",
  },
  {
    id: 1003,
    task: "Write unit tests for payment module",
    assignee: "Luna Martinez",
    priority: "Medium",
    status: "Completed",
    dueDate: "2024-02-10",
    estimatedHours: 12,
    completedHours: 12,
    details: "Comprehensive test coverage for payment processing functionality",
  },
  {
    id: 1004,
    task: "Update documentation for API endpoints",
    assignee: "Kai Thompson",
    priority: "Low",
    status: "In Progress",
    dueDate: "2024-02-25",
    estimatedHours: 6,
    completedHours: 3,
    details: "Update Swagger documentation and add usage examples",
  },
  {
    id: 1005,
    task: "Performance optimization for dashboard",
    assignee: "Zara Kim",
    priority: "Medium",
    status: "Not Started",
    dueDate: "2024-03-01",
    estimatedHours: 20,
    completedHours: 0,
    details: "Optimize rendering performance and implement lazy loading",
  },
  {
    id: 1006,
    task: "Mobile responsiveness testing",
    assignee: "Tyler Anderson",
    priority: "High",
    status: "In Progress",
    dueDate: "2024-02-18",
    estimatedHours: 10,
    completedHours: 7,
    details: "Test application across various mobile devices and screen sizes",
  },
  {
    id: 1007,
    task: "Setup CI/CD pipeline",
    assignee: "Phoenix Lee",
    priority: "Medium",
    status: "Completed",
    dueDate: "2024-02-08",
    estimatedHours: 14,
    completedHours: 14,
    details: "Automated testing and deployment pipeline using GitHub Actions",
  },
  {
    id: 1008,
    task: "Database migration scripts",
    assignee: "River Jackson",
    priority: "Low",
    status: "Not Started",
    dueDate: "2024-02-28",
    estimatedHours: 8,
    completedHours: 0,
    details: "Create migration scripts for database schema updates",
  },
];

const CellClickingDemo = ({ height = "400px", theme }: { height?: string; theme?: Theme }) => {
  const [clickInfo, setClickInfo] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<ProjectTask | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string>("");

  const handleCellClick = ({ accessor, colIndex, row, rowId, rowIndex, value }: any) => {
    const task = row as ProjectTask;

    // Different behaviors based on which column was clicked
    switch (accessor) {
      case "task":
        setClickInfo(`🔍 Clicked task: "${value}" (Row ${rowIndex + 1})`);
        break;

      case "assignee":
        setClickInfo(`👤 Clicked assignee: ${value} - showing all tasks for this person`);
        break;

      case "priority":
        const newFilter = priorityFilter === value ? "" : String(value);
        setPriorityFilter(newFilter);
        setClickInfo(
          `🎯 ${newFilter ? `Filtering by ${value} priority` : "Cleared priority filter"}`
        );
        break;

      case "status":
        // Cycle through statuses
        const statuses = ["Not Started", "In Progress", "Completed"];
        const currentIndex = statuses.indexOf(String(value));
        const nextStatus = statuses[(currentIndex + 1) % statuses.length];
        setClickInfo(`⚡ Status changed from "${value}" to "${nextStatus}"`);
        break;

      case "details":
        setSelectedTask(task);
        setClickInfo(`📋 Opening details modal for task: ${task.task}`);
        break;

      case "dueDate":
        const today = new Date();
        const due = new Date(String(value));
        const daysUntilDue = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        const dueSoon = daysUntilDue <= 7 && daysUntilDue >= 0;
        setClickInfo(
          `📅 Due: ${value} ${
            dueSoon ? "⚠️ (Due soon!)" : daysUntilDue < 0 ? "❌ (Overdue!)" : "✅"
          }`
        );
        break;

      case "estimatedHours":
      case "completedHours":
        const progress = (task.completedHours / task.estimatedHours) * 100;
        setClickInfo(
          `⏱️ Progress: ${task.completedHours}h / ${task.estimatedHours}h (${progress.toFixed(1)}%)`
        );
        break;

      default:
        setClickInfo(
          `Clicked ${accessor}: ${value} in row ${rowIndex + 1}, column ${colIndex + 1}`
        );
    }
  };

  // Filter data by priority if a filter is active
  const filteredData = priorityFilter
    ? PROJECT_TASKS.filter((task) => task.priority === priorityFilter)
    : PROJECT_TASKS;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Click Info Display */}
      <div
        style={{
          marginTop: "16px",
          padding: "12px",
          backgroundColor: theme === "dark" ? "#374151" : "#f3f4f6",
          borderRadius: "8px",
          border: `1px solid ${theme === "dark" ? "#4b5563" : "#d1d5db"}`,
          minHeight: "48px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <strong style={{ marginRight: "8px", color: theme === "dark" ? "#f9fafb" : "#1f2937" }}>
          Last Click:
        </strong>
        <span style={{ color: theme === "dark" ? "#d1d5db" : "#4b5563" }}>
          {clickInfo || "Click any cell to see interaction details..."}
        </span>
      </div>

      {/* Simple Modal for Task Details */}
      {selectedTask && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: theme === "dark" ? "#1f2937" : "white",
              padding: "24px",
              borderRadius: "8px",
              maxWidth: "500px",
              width: "90%",
              maxHeight: "80%",
              overflow: "auto",
            }}
          >
            <h3
              style={{
                margin: "0 0 16px 0",
                color: theme === "dark" ? "#f9fafb" : "#1f2937",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Task Details
            </h3>
            <p style={{ margin: "8px 0", color: theme === "dark" ? "#d1d5db" : "#4b5563" }}>
              <strong>Task:</strong> {selectedTask.task}
            </p>
            <p style={{ margin: "8px 0", color: theme === "dark" ? "#d1d5db" : "#4b5563" }}>
              <strong>Details:</strong> {selectedTask.details}
            </p>
            <p style={{ margin: "8px 0", color: theme === "dark" ? "#d1d5db" : "#4b5563" }}>
              <strong>Assignee:</strong> {selectedTask.assignee}
            </p>
            <p style={{ margin: "8px 0", color: theme === "dark" ? "#d1d5db" : "#4b5563" }}>
              <strong>Status:</strong> {selectedTask.status}
            </p>
            <p style={{ margin: "8px 0", color: theme === "dark" ? "#d1d5db" : "#4b5563" }}>
              <strong>Priority:</strong> {selectedTask.priority}
            </p>
            <button
              onClick={() => setSelectedTask(null)}
              style={{
                marginTop: "16px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <SimpleTable
        columnResizing={true}
        defaultHeaders={headers}
        height={"320px"}
        onCellClick={handleCellClick}
        rowIdAccessor="id"
        rows={filteredData}
        theme={theme}
      />
    </div>
  );
};

export default CellClickingDemo;
