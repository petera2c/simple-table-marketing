import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Load the full data once at module level
const dataPath = path.join(process.cwd(), "public/data/organization-data.json");
let fullData: any[] = [];

try {
  const fileContents = fs.readFileSync(dataPath, "utf8");
  fullData = JSON.parse(fileContents);
} catch (error) {
  console.error("Error loading organization data:", error);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");
  const projectId = searchParams.get("projectId");
  const milestoneId = searchParams.get("milestoneId");

  // Return top-level projects (without nested data)
  if (!type || type === "projects") {
    const projects = fullData.map((project) => ({
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
      // Don't include milestones - they'll be loaded dynamically
    }));
    return NextResponse.json(projects);
  }

  // Return milestones for a specific project
  if (type === "milestones" && projectId) {
    const project = fullData.find((p) => p.id === projectId);
    if (!project || !project.milestones) {
      return NextResponse.json([]);
    }

    // Return milestones without tasks
    const milestones = project.milestones.map((milestone: any) => ({
      id: milestone.id,
      type: milestone.type,
      name: milestone.name,
      status: milestone.status,
      startDate: milestone.startDate,
      dueDate: milestone.dueDate,
      // Don't include tasks - they'll be loaded dynamically
    }));

    return NextResponse.json(milestones);
  }

  // Return tasks for a specific milestone
  if (type === "tasks" && projectId && milestoneId) {
    const project = fullData.find((p) => p.id === projectId);
    if (!project || !project.milestones) {
      return NextResponse.json([]);
    }

    const milestone = project.milestones.find((m: any) => m.id === milestoneId);
    if (!milestone || !milestone.tasks) {
      return NextResponse.json([]);
    }

    return NextResponse.json(milestone.tasks);
  }

  return NextResponse.json([]);
}
