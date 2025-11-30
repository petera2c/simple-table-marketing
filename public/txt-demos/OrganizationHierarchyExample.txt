import { useState, useCallback } from "react";
import { SimpleTable, Theme, OnRowGroupExpandProps } from "simple-table-core";
import "simple-table-core/styles.css";
import { HEADERS } from "./organization-headers";
import { useOrganizationData } from "./useOrganizationData";
import { Project, Milestone } from "./types";

// Helper to update row children (nested data)
const updateRowChildren = (
  rows: Project[],
  rowId: string,
  groupingKey: string,
  children: any[]
): Project[] => {
  return rows.map((row) => {
    // Check if this is the row we're looking for
    if (row.id === rowId) {
      return { ...row, [groupingKey]: children, _loading: false };
    }

    // Recursively check nested rows if they exist
    if (row.milestones && Array.isArray(row.milestones)) {
      return {
        ...row,
        milestones: row.milestones.map((milestone) => {
          if (milestone.id === rowId) {
            return { ...milestone, [groupingKey]: children, _loading: false };
          }
          return milestone;
        }),
      };
    }

    return row;
  });
};

// Helper to set loading state
const setRowLoading = (rows: Project[], rowId: string, isLoading: boolean): Project[] => {
  return rows.map((row) => {
    if (row.id === rowId) {
      return { ...row, _loading: isLoading };
    }

    if (row.milestones && Array.isArray(row.milestones)) {
      return {
        ...row,
        milestones: row.milestones.map((milestone) => {
          if (milestone.id === rowId) {
            return { ...milestone, _loading: isLoading };
          }
          return milestone;
        }),
      };
    }

    return row;
  });
};

// Helper to find parent project for a milestone
const findParentProject = (rows: Project[], milestoneId: string): string | null => {
  for (const project of rows) {
    if (project.milestones) {
      const hasMilestone = project.milestones.some((m) => m.id === milestoneId);
      if (hasMilestone) {
        return project.id;
      }
    }
  }
  return null;
};

export default function OrganizationHierarchyExample({
  height = "400px",
  theme,
}: {
  height?: string | number;
  theme?: Theme;
}) {
  const { data: initialData, isLoading } = useOrganizationData();
  const [rows, setRows] = useState<Project[]>(initialData);
  const [fullStaticData, setFullStaticData] = useState<any[]>([]);

  // Update rows when data loads
  if (!isLoading && rows.length === 0 && initialData.length > 0) {
    setRows(initialData);
  }

  const handleRowExpand = useCallback(
    async ({ row, rowId, depth, groupingKey, isExpanded }: OnRowGroupExpandProps) => {
      // Don't fetch if collapsing
      if (!isExpanded) {
        return;
      }

      // Don't fetch if data already exists
      if (groupingKey && row[groupingKey] && (row[groupingKey] as any[]).length > 0) {
        return;
      }

      try {
        if (depth === 0 && groupingKey === "milestones") {
          // Fetching milestones for a project
          setRows((prevRows) => setRowLoading(prevRows, String(rowId), true));

          let milestones: any[] = [];

          try {
            const response = await fetch(
              `https://www.simple-table.com/api/data/organization?type=milestones&projectId=${rowId}`
            );
            if (response.ok) {
              milestones = await response.json();
            }
          } catch {
            // Fallback: Load static data and extract milestones
            if (fullStaticData.length === 0) {
              const response = await fetch("/data/organization-data.json");
              const data = await response.json();
              setFullStaticData(data);

              const project = data.find((p: any) => p.id === rowId);
              if (project?.milestones) {
                milestones = project.milestones.map((m: any) => ({
                  id: m.id,
                  type: m.type,
                  name: m.name,
                  status: m.status,
                  startDate: m.startDate,
                  dueDate: m.dueDate,
                }));
              }
            } else {
              const project = fullStaticData.find((p: any) => p.id === rowId);
              if (project?.milestones) {
                milestones = project.milestones.map((m: any) => ({
                  id: m.id,
                  type: m.type,
                  name: m.name,
                  status: m.status,
                  startDate: m.startDate,
                  dueDate: m.dueDate,
                }));
              }
            }
          }

          // Update with fetched data
          setRows((prevRows) =>
            updateRowChildren(prevRows, String(rowId), "milestones", milestones)
          );
        } else if (depth === 1 && groupingKey === "tasks") {
          // Fetching tasks for a milestone
          setRows((prevRows) => setRowLoading(prevRows, String(rowId), true));

          // Find the parent project ID
          const projectId = findParentProject(rows, String(rowId));

          if (projectId) {
            let tasks: any[] = [];

            try {
              const response = await fetch(
                `https://www.simple-table.com/api/data/organization?type=tasks&projectId=${projectId}&milestoneId=${rowId}`
              );
              if (response.ok) {
                tasks = await response.json();
              }
            } catch {
              // Fallback: Extract tasks from static data
              let dataToUse = fullStaticData;
              if (dataToUse.length === 0) {
                const response = await fetch("/data/organization-data.json");
                const data = await response.json();
                setFullStaticData(data);
                dataToUse = data;
              }

              const project = dataToUse.find((p: any) => p.id === projectId);
              const milestone = project?.milestones?.find((m: any) => m.id === rowId);
              if (milestone?.tasks) {
                tasks = milestone.tasks;
              }
            }

            // Update with fetched data
            setRows((prevRows) => updateRowChildren(prevRows, String(rowId), "tasks", tasks));
          } else {
            setRows((prevRows) => setRowLoading(prevRows, String(rowId), false));
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setRows((prevRows) => setRowLoading(prevRows, String(rowId), false));
      }
    },
    [rows]
  );

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: typeof height === "number" ? `${height}px` : height,
          fontSize: "16px",
          color: "#666",
        }}
      >
        Loading project data...
      </div>
    );
  }

  return (
    <SimpleTable
      columnResizing
      defaultHeaders={HEADERS}
      editColumns
      expandAll={false}
      height={typeof height === "number" ? `${height}px` : height}
      onRowGroupExpand={handleRowExpand}
      rowGrouping={["milestones", "tasks"]}
      rowIdAccessor="id"
      rows={rows}
      selectableCells
      theme={theme}
      useOddEvenRowBackground
    />
  );
}
