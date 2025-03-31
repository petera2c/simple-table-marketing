import { Row } from "simple-table-core";

// Generate HR employee data
export const generateHRData = (): Row[] => {
  const departments = ["Engineering", "Marketing", "Sales", "Finance", "HR", "Operations", "Customer Support"];
  const positions = [
    "Manager",
    "Senior",
    "Junior",
    "Lead",
    "Associate",
    "Head",
    "Coordinator",
    "Analyst",
    "Director",
    "Specialist",
    "Assistant",
    "Executive",
    "Intern",
  ];
  const firstNames = [
    "James",
    "Mary",
    "John",
    "Patricia",
    "Robert",
    "Jennifer",
    "Michael",
    "Elizabeth",
    "William",
    "Linda",
    "David",
    "Barbara",
    "Sarah",
    "Susan",
    "Karen",
    "Jessica",
    "Lisa",
    "Nancy",
    "Betty",
    "Margaret",
    "Sandra",
    "Ashley",
    "Kimberly",
    "Emily",
    "Donna",
    "Michelle",
    "Carol",
    "Amanda",
    "Melissa",
    "Deborah",
    "Stephanie",
    "Dorothy",
    "Rebecca",
    "Sharon",
    "Laura",
    "Cynthia",
    "Amy",
    "Kathleen",
    "Angela",
    "Shirley",
    "Anna",
    "Ruth",
    "Brenda",
    "Pamela",
    "Nicole",
    "Katherine",
    "Samantha",
    "Christine",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
    "Clark",
    "Rodriguez",
    "Lewis",
    "Lee",
    "Walker",
    "Hall",
    "Allen",
    "Young",
    "Hernandez",
    "King",
    "Wright",
    "Lopez",
    "Hill",
    "Scott",
    "Green",
    "Adams",
    "Baker",
    "Gonzalez",
    "Nelson",
    "Carter",
    "Mitchell",
    "Perez",
    "Roberts",
    "Turner",
    "Phillips",
    "Campbell",
    "Parker",
    "Evans",
  ];
  const locations = ["New York", "Los Angeles", "Chicago", "San Francisco", "Austin", "Boston", "Seattle", "Remote"];
  const statuses = ["Active", "On Leave", "Probation", "Contract", "Terminated"];

  // Expertise areas
  const expertiseAreas = [
    "JavaScript",
    "React",
    "Python",
    "Java",
    "UX Design",
    "Digital Marketing",
    "Data Analysis",
    "Product Management",
    "Project Management",
    "SEO",
    "Cloud Computing",
    "Customer Relations",
    "Sales Strategy",
    "Accounting",
    "HR Policies",
    "Operations",
    "Security",
    "Quality Assurance",
    "Communication",
    "Leadership",
    "Training",
  ];

  let rowId = 0;
  const rows: Row[] = [];

  // Generate department data first
  departments.forEach((department) => {
    // Number of employees per department
    const numEmployees = Math.floor(Math.random() * 12) + 5; // 5 to 16 employees per dept

    const children: Row[] = [];

    // Generate employee data
    for (let i = 0; i < numEmployees; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const position = positions[Math.floor(Math.random() * positions.length)];

      // Calculate random metrics
      const performanceScore = Math.floor(Math.random() * 41) + 60; // 60-100
      const salaryBase = Math.floor(Math.random() * 50) + 50; // $50k - $100k base
      const salaryMultiplier =
        position.includes("Senior") || position.includes("Lead")
          ? 1.5
          : position.includes("Manager") || position.includes("Director")
          ? 2
          : position.includes("Head") || position.includes("Executive")
          ? 2.5
          : position.includes("Intern")
          ? 0.5
          : 1;
      const salary = Math.floor(salaryBase * salaryMultiplier) * 1000;
      const status = statuses[Math.floor(Math.random() * statuses.length)];

      // Generate hire date (within last 10 years)
      const currentYear = new Date().getFullYear();
      const hireYear = currentYear - Math.floor(Math.random() * 10);
      const hireMonth = Math.floor(Math.random() * 12) + 1;
      const hireDay = Math.floor(Math.random() * 28) + 1;
      const hireDate = `${hireYear}-${hireMonth.toString().padStart(2, "0")}-${hireDay.toString().padStart(2, "0")}`;

      // Calculate years of service based on hire date
      const yearsOfService = (
        (new Date().getTime() - new Date(hireDate).getTime()) /
        (1000 * 60 * 60 * 24 * 365)
      ).toFixed(1);

      // Generate random email
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`;

      // Random location
      const location = locations[Math.floor(Math.random() * locations.length)];

      // Random assigned projects (1-3)
      const numProjects = Math.floor(Math.random() * 3) + 1;
      const projects = Array.from({ length: numProjects }, (_) => `Project ${Math.floor(Math.random() * 20) + 1}`);

      // Random expertise areas (2-4)
      const numExpertise = Math.floor(Math.random() * 3) + 2;
      const expertise = Array.from(
        { length: numExpertise },
        () => expertiseAreas[Math.floor(Math.random() * expertiseAreas.length)]
      );

      // Random manager - simple implementation
      const managerId = Math.floor(Math.random() * 100) + 1000;
      const managerName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
        lastNames[Math.floor(Math.random() * lastNames.length)]
      }`;

      children.push({
        rowMeta: { rowId: rowId++, isExpanded: true },
        rowData: {
          id: Math.floor(Math.random() * 10000) + 1000,
          department,
          firstName,
          lastName,
          fullName: `${firstName} ${lastName}`,
          position: `${position} ${
            department.includes("Engineering")
              ? "Engineer"
              : department.includes("Marketing")
              ? "Marketer"
              : department.includes("Sales")
              ? "Representative"
              : department.includes("Finance")
              ? "Analyst"
              : department.includes("HR")
              ? "Specialist"
              : department.includes("Operations")
              ? "Manager"
              : "Agent"
          }`,
          email,
          hireDate,
          yearsOfService: parseFloat(yearsOfService),
          salary,
          performanceScore,
          location,
          status,
          projects: JSON.stringify(projects),
          expertise: JSON.stringify(expertise),
          managerId,
          managerName,
        },
      });
    }

    // Create department summary row
    const avgPerformance = Math.round(
      children.reduce((sum, child) => sum + (child.rowData.performanceScore as number), 0) / children.length
    );

    const totalSalary = children.reduce((sum, child) => sum + (child.rowData.salary as number), 0);

    rows.push({
      rowMeta: { rowId: rowId++, isExpanded: true, children },
      rowData: {
        id: null,
        department,
        firstName: null,
        lastName: null,
        fullName: `${department} Department (${children.length})`,
        position: null,
        email: null,
        hireDate: null,
        yearsOfService: null,
        salary: totalSalary,
        performanceScore: avgPerformance,
        location: null,
        status: null,
        projects: null,
        expertise: null,
        managerId: null,
        managerName: null,
      },
    });
  });

  return rows;
};
