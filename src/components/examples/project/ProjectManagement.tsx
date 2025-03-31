import { SimpleTable, HeaderObject, Row } from "simple-table-core";
import { Progress, Tag, Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faInfoCircle,
  faTasks,
  faCheck,
  faTimes,
  faClock,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Type definition for a project task
interface ProjectTask {
  id: string;
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  status: "Not Started" | "In Progress" | "On Hold" | "Completed" | "Blocked";
  progress: number;
  assignee: string;
  assigneeAvatar: string;
  dependencies: string[];
  estimatedHours: number;
  actualHours: number;
  tags: string[];
}

// Generate project management data
const generateProjectData = (): Row[] => {
  const projectNames = [
    "Website Redesign",
    "Mobile App Development",
    "Cloud Migration",
    "CRM Implementation",
    "Marketing Campaign",
    "Data Center Upgrade",
  ];

  const clients = ["Acme Corp", "Globex Inc", "Initech LLC", "Umbrella Corp", "Stark Industries", "Wayne Enterprises"];
  const managers = ["John Smith", "Jane Doe", "Robert Johnson", "Sarah Williams", "Michael Brown", "Emily Davis"];
  const assignees = [
    "Tom Wilson",
    "Lisa Green",
    "David Lee",
    "Emma Taylor",
    "Mark Garcia",
    "Laura Martinez",
    "Alex Chen",
    "Olivia Kim",
  ];

  const taskNames = {
    "Website Redesign": [
      "Wireframing",
      "UI Design",
      "Content Creation",
      "Frontend Development",
      "Backend Integration",
      "Testing",
      "Launch",
    ],
    "Mobile App Development": [
      "Requirements Analysis",
      "UI/UX Design",
      "API Development",
      "Frontend Development",
      "Testing",
      "App Store Submission",
    ],
    "Cloud Migration": [
      "Infrastructure Assessment",
      "Migration Planning",
      "Data Transfer",
      "Application Testing",
      "DNS Cutover",
      "Legacy System Shutdown",
    ],
    "CRM Implementation": [
      "Requirements Gathering",
      "System Configuration",
      "Data Migration",
      "User Training",
      "Pilot Testing",
      "Full Deployment",
    ],
    "Marketing Campaign": [
      "Market Research",
      "Strategy Development",
      "Content Creation",
      "Social Media Setup",
      "Campaign Launch",
      "Performance Analysis",
    ],
    "Data Center Upgrade": [
      "Hardware Assessment",
      "Procurement",
      "Installation",
      "Network Configuration",
      "Testing",
      "Cutover",
    ],
  };

  // Generate random dates within a reasonable range
  const getRandomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split("T")[0];
  };

  let rowId = 0;
  const rows: Row[] = [];

  // Current date for reference
  const today = new Date();
  const lastYear = new Date(today);
  lastYear.setFullYear(today.getFullYear() - 1);
  const nextYear = new Date(today);
  nextYear.setFullYear(today.getFullYear() + 1);

  // Generate project data
  projectNames.forEach((projectName, index) => {
    // Project dates
    const projectStartDate = getRandomDate(lastYear, today);
    const projectDueDate = getRandomDate(today, nextYear);

    // Project manager and client
    const manager = managers[Math.floor(Math.random() * managers.length)];
    const client = clients[Math.floor(Math.random() * clients.length)];

    // Project priority and status
    const priorityValues: ("Low" | "Medium" | "High" | "Critical")[] = ["Low", "Medium", "High", "Critical"];
    const priority = priorityValues[Math.floor(Math.random() * priorityValues.length)];

    const statusRandom = Math.random();
    const status =
      statusRandom < 0.7 ? "Active" : statusRandom < 0.8 ? "On Hold" : statusRandom < 0.95 ? "Completed" : "Cancelled";

    // Budget
    const budget = Math.floor(Math.random() * 200000) + 50000;

    // Generate tasks for this project
    const projectTasks = taskNames[projectName as keyof typeof taskNames] || taskNames["Website Redesign"];
    const tasks: ProjectTask[] = [];
    const children: Row[] = [];
    let projectProgress = 0;

    const projectStartDateTime = new Date(projectStartDate).getTime();
    const projectDueDateTime = new Date(projectDueDate).getTime();
    const projectDuration = projectDueDateTime - projectStartDateTime;

    projectTasks.forEach((taskName, taskIndex) => {
      // Calculate task dates based on project timeline
      const taskStartPercentage = taskIndex / projectTasks.length;
      const taskDurationPercentage = 1 / projectTasks.length;

      const taskStartDateTime = new Date(projectStartDateTime + projectDuration * taskStartPercentage);
      const taskDueDateTime = new Date(
        projectStartDateTime + projectDuration * (taskStartPercentage + taskDurationPercentage)
      );

      const taskStartDate = taskStartDateTime.toISOString().split("T")[0];
      const taskDueDate = taskDueDateTime.toISOString().split("T")[0];

      // Task priority and status
      const taskPriorityValues: ("Low" | "Medium" | "High" | "Critical")[] = ["Low", "Medium", "High", "Critical"];
      const taskPriority = taskPriorityValues[Math.floor(Math.random() * taskPriorityValues.length)];

      let taskStatus: "Not Started" | "In Progress" | "On Hold" | "Completed" | "Blocked";
      const taskStatusRandom = Math.random();

      // Weight the probability based on task index (earlier tasks more likely to be completed)
      if (taskIndex / projectTasks.length < 0.3) {
        taskStatus = taskStatusRandom < 0.9 ? "Completed" : "In Progress";
      } else if (taskIndex / projectTasks.length < 0.6) {
        taskStatus = taskStatusRandom < 0.6 ? "Completed" : taskStatusRandom < 0.9 ? "In Progress" : "On Hold";
      } else {
        taskStatus =
          taskStatusRandom < 0.3
            ? "Completed"
            : taskStatusRandom < 0.6
            ? "In Progress"
            : taskStatusRandom < 0.8
            ? "Not Started"
            : taskStatusRandom < 0.9
            ? "On Hold"
            : "Blocked";
      }

      // Progress based on status
      let progress = 0;
      switch (taskStatus) {
        case "Completed":
          progress = 100;
          break;
        case "In Progress":
          progress = Math.floor(Math.random() * 70) + 10;
          break; // 10-80%
        case "On Hold":
          progress = Math.floor(Math.random() * 50) + 10;
          break; // 10-60%
        case "Blocked":
          progress = Math.floor(Math.random() * 70) + 10;
          break; // 10-80% (but blocked)
        case "Not Started":
          progress = 0;
          break;
      }

      // Assignee
      const assignee = assignees[Math.floor(Math.random() * assignees.length)];
      const assigneeAvatar = `https://i.pravatar.cc/150?u=${assignee.replace(" ", "")}${index}${taskIndex}`;

      // Hours
      const estimatedHours = Math.floor(Math.random() * 40) + 10; // 10-50 hours
      const actualHours =
        taskStatus === "Completed"
          ? Math.floor(estimatedHours * (0.8 + Math.random() * 0.4)) // 80-120% of estimate
          : Math.floor(estimatedHours * (progress / 100));

      // Dependencies
      const dependencies: string[] = [];
      if (taskIndex > 0) {
        const numDeps = Math.floor(Math.random() * 2) + (taskIndex > 2 ? 1 : 0);
        for (let i = 0; i < numDeps; i++) {
          if (taskIndex - i - 1 >= 0) {
            dependencies.push(`${projectName.substring(0, 2)}${index + 1}-T${taskIndex - i}`);
          }
        }
      }

      // Tags
      const allTags = ["UX", "Backend", "Frontend", "Database", "DevOps", "Testing", "Documentation", "Infrastructure"];
      const tags: string[] = [];
      const numTags = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numTags; i++) {
        const tag = allTags[Math.floor(Math.random() * allTags.length)];
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      }

      // Create task object
      const task: ProjectTask = {
        id: `${projectName.substring(0, 2)}${index + 1}-T${taskIndex}`,
        name: taskName,
        description: `${taskName} for ${projectName}`,
        startDate: taskStartDate,
        dueDate: taskDueDate,
        priority: taskPriority,
        status: taskStatus,
        progress,
        assignee,
        assigneeAvatar,
        dependencies,
        estimatedHours,
        actualHours,
        tags,
      };

      tasks.push(task);

      // Create row
      children.push({
        rowMeta: { rowId: rowId++, isExpanded: false },
        rowData: {
          id: task.id,
          projectName,
          taskName: task.name,
          description: task.description,
          startDate: task.startDate,
          dueDate: task.dueDate,
          priority: task.priority,
          status: task.status,
          progress: task.progress,
          assignee: task.assignee,
          assigneeAvatar: task.assigneeAvatar,
          dependencies: JSON.stringify(task.dependencies),
          estimatedHours: task.estimatedHours,
          actualHours: task.actualHours,
          tags: JSON.stringify(task.tags),
        },
      });

      // Add to project progress
      projectProgress += progress;
    });

    // Calculate overall project progress
    projectProgress = Math.round(projectProgress / projectTasks.length);

    // Create project row
    rows.push({
      rowMeta: { rowId: rowId++, isExpanded: true, children },
      rowData: {
        id: `${projectName.substring(0, 2)}${index + 1}`,
        projectName,
        taskName: `${projectName} (Project)`,
        description: `${projectName} for ${client}`,
        startDate: projectStartDate,
        dueDate: projectDueDate,
        priority,
        status,
        progress: projectProgress,
        assignee: manager,
        assigneeAvatar: `https://i.pravatar.cc/150?u=${manager.replace(" ", "")}${index}`,
        dependencies: "[]",
        estimatedHours: children.reduce((sum, child) => sum + (child.rowData.estimatedHours as number), 0),
        actualHours: children.reduce((sum, child) => sum + (child.rowData.actualHours as number), 0),
        tags: JSON.stringify(["Project"]),
        client,
        budget,
      },
    });
  });

  return rows;
};

// Define column headers for project table
const HEADERS: HeaderObject[] = [
  {
    accessor: "projectName",
    label: "Project/Task",
    width: 240,
    expandable: true,
    isSortable: true,
    isEditable: false,
    align: "left",
    cellRenderer: ({ row }) => {
      const isProjectRow = row.rowData.taskName?.toString().includes("(Project)") || false;

      if (isProjectRow) {
        return (
          <div className="font-bold">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faProjectDiagram} className="text-blue-600" />
              {row.rowData.projectName}
            </div>
            <div className="text-xs text-gray-500 mt-1">Client: {row.rowData.client}</div>
          </div>
        );
      } else {
        return (
          <div className="ml-2">
            <div>{row.rowData.taskName}</div>
            <div className="text-xs text-gray-500 truncate max-w-60" title={row.rowData.description as string}>
              {row.rowData.description}
            </div>
          </div>
        );
      }
    },
  },
  {
    accessor: "status",
    label: "Status",
    width: 150,
    isSortable: true,
    isEditable: false,
    align: "center",
    cellRenderer: ({ row }) => {
      const status = row.rowData.status as string;
      const statusColor =
        status === "Active" || status === "In Progress"
          ? "processing"
          : status === "Completed"
          ? "success"
          : status === "Blocked"
          ? "error"
          : status === "Cancelled"
          ? "error"
          : status === "On Hold"
          ? "warning"
          : "default";

      const statusIcon =
        status === "Active" || status === "In Progress"
          ? faTasks
          : status === "Completed"
          ? faCheck
          : status === "Blocked" || status === "Cancelled"
          ? faTimes
          : status === "On Hold"
          ? faClock
          : faInfoCircle;

      return (
        <Tag color={statusColor} className="py-1 px-2 flex items-center justify-center gap-1 w-28 mx-auto">
          <FontAwesomeIcon icon={statusIcon} />
          <span>{status}</span>
        </Tag>
      );
    },
  },
  {
    accessor: "priority",
    label: "Priority",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "center",
    cellRenderer: ({ row }) => {
      const priority = row.rowData.priority as string;
      const color =
        priority === "Low" ? "blue" : priority === "Medium" ? "green" : priority === "High" ? "orange" : "red";

      return (
        <div className="flex justify-center items-center">
          <Tag color={color} className="px-2 py-1 text-xs">
            {priority === "Critical" && <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />}
            {priority}
          </Tag>
        </div>
      );
    },
  },
  {
    accessor: "progress",
    label: "Progress",
    width: 180,
    isSortable: true,
    isEditable: false,
    align: "center",
    cellRenderer: ({ row }) => {
      const progress = row.rowData.progress as number;
      const status = row.rowData.status as string;

      // Determine the progress bar color based on progress and status
      let progressStatus: "success" | "normal" | "exception" | "active" = "normal";

      if (status === "Blocked") {
        progressStatus = "exception";
      } else if (status === "Completed") {
        progressStatus = "success";
      } else if (status === "In Progress" || status === "Active") {
        progressStatus = "active";
      }

      return (
        <div className="w-full flex flex-col">
          <Progress percent={progress} size="small" status={progressStatus} format={(percent) => `${percent}%`} />
        </div>
      );
    },
  },
  {
    accessor: "assignee",
    label: "Assignee",
    width: 160,
    isSortable: true,
    isEditable: false,
    align: "left",
    cellRenderer: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Avatar src={row.rowData.assigneeAvatar as string} size="small" />
          <span>{row.rowData.assignee}</span>
        </div>
      );
    },
  },
  {
    accessor: "startDate",
    label: "Start Date",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "center",
  },
  {
    accessor: "dueDate",
    label: "Due Date",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "center",
    cellRenderer: ({ row }) => {
      const dueDate = new Date(row.rowData.dueDate as string);
      const today = new Date();

      // Check if due date has passed
      const isPastDue = dueDate < today && row.rowData.status !== "Completed";
      const isNearDue =
        !isPastDue &&
        dueDate.getTime() - today.getTime() < 7 * 24 * 60 * 60 * 1000 && // 7 days
        row.rowData.status !== "Completed";

      return (
        <div className={isPastDue ? "text-red-600 font-medium" : isNearDue ? "text-orange-500" : ""}>
          {row.rowData.dueDate as string}
        </div>
      );
    },
  },
  {
    accessor: "estimatedHours",
    label: "Est. Hours",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
  },
  {
    accessor: "actualHours",
    label: "Actual Hours",
    width: 120,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      const estimated = row.rowData.estimatedHours as number;
      const actual = row.rowData.actualHours as number;

      // Color based on comparison with estimate
      const textColor =
        row.rowData.status === "Completed"
          ? actual > estimated * 1.1
            ? "text-red-600"
            : actual < estimated * 0.9
            ? "text-green-600"
            : ""
          : "";

      return <span className={textColor}>{actual}</span>;
    },
  },
  {
    accessor: "dependencies",
    label: "Dependencies",
    width: 180,
    isSortable: false,
    isEditable: false,
    align: "left",
    cellRenderer: ({ row }) => {
      try {
        const dependencies = JSON.parse(row.rowData.dependencies as string) as string[];

        if (!dependencies.length) {
          return <span className="text-gray-400">None</span>;
        }

        return (
          <div className="flex flex-wrap gap-1">
            {dependencies.map((dep, index) => (
              <Tag key={index} className="border-blue-200 bg-blue-50 text-blue-700 text-xs">
                {dep}
              </Tag>
            ))}
          </div>
        );
      } catch (e) {
        return <span className="text-gray-400">None</span>;
      }
    },
  },
  {
    accessor: "tags",
    label: "Tags",
    width: 180,
    isSortable: false,
    isEditable: false,
    align: "left",
    cellRenderer: ({ row }) => {
      try {
        const tags = JSON.parse(row.rowData.tags as string) as string[];

        return (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <Tag key={index} color="purple" className="text-xs">
                {tag}
              </Tag>
            ))}
          </div>
        );
      } catch (e) {
        return <span className="text-gray-400">Error parsing tags</span>;
      }
    },
  },
  {
    accessor: "budget",
    label: "Budget",
    width: 140,
    isSortable: true,
    isEditable: false,
    align: "right",
    cellRenderer: ({ row }) => {
      const isProjectRow = row.rowData.taskName?.toString().includes("(Project)") || false;

      if (!isProjectRow) {
        return null;
      }

      return <div className="font-medium">${(row.rowData.budget as number).toLocaleString()}</div>;
    },
  },
];

const ProjectManagement = () => {
  const [data] = useState(generateProjectData());

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      rows={data}
      height="60dvh"
      theme="light"
      selectableCells
    />
  );
};

export default ProjectManagement;
