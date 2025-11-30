import { Row } from "simple-table-core";

export interface Project extends Row {
  id: string;
  name: string;
  type: "project";
  client: string;
  status: string;
  startDate: string;
  dueDate: string;
  lead: string;
  budget: string;
  location: string;
  milestones?: Milestone[];
  _loading?: boolean;
  _error?: string | null;
}

export interface Milestone extends Row {
  id: string;
  name: string;
  type: "milestone";
  status: string;
  startDate: string;
  dueDate: string;
  tasks?: Task[];
  _loading?: boolean;
  _error?: string | null;
}

export interface Task extends Row {
  id: string;
  name: string;
  type: "task";
  assignee: string;
  status: string;
  priority: string;
  startDate: string;
  dueDate: string;
  hoursEstimated: number;
  hoursActual: number;
  completionPercentage: number;
}
