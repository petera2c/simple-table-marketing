import { useEffect, useState } from "react";
import { Project } from "./types";

export function useOrganizationData() {
  const [data, setData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch only top-level projects (no nested data)
        const response = await fetch(
          "https://www.simple-table.com/api/data/organization?type=projects"
        );
        if (response.ok) {
          const projects = await response.json();
          setData(projects);
        }
      } catch {
        // Fallback to static JSON file if API fails (e.g., in CodeSandbox)
        const response = await fetch("/data/organization-data.json");
        const fullData = await response.json();
        // Extract only top-level project data (no nested milestones)
        const projects = fullData.map((project: any) => ({
          id: project.id,
          type: project.type,
          name: project.name,
          client: project.client,
          status: project.status,
          startDate: project.startDate,
          dueDate: project.dueDate,
          lead: project.lead,
          budget: project.budget,
          location: project.location,
        }));
        setData(projects);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
}
