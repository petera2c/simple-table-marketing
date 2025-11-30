import { Row } from "simple-table-core";

export interface Department extends Row {
  id: string;
  name: string;
  type: "department";
  employeeCount?: number;
  budget?: string;
  manager?: string;
  location?: string;
  status?: string;
  teams?: Team[];
  _loading?: boolean;
  _error?: string | null;
}

export interface Team extends Row {
  id: string;
  name: string;
  type: "team";
  employeeCount?: number;
  budget?: string;
  lead?: string;
  location?: string;
  status?: string;
  employees?: Employee[];
  _loading?: boolean;
  _error?: string | null;
}

export interface Employee extends Row {
  id: string;
  name: string;
  type: "employee";
  role: string;
  salary: string;
  email: string;
  startDate: string;
  status: string;
}
