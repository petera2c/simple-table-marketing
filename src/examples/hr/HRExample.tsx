import { SimpleTable, Theme, CellChangeProps, Row } from "simple-table-core";
import { HEADERS } from "./hr-headers";
import { useState, useEffect } from "react";
import "simple-table-core/styles.css";

const BACKUP_HR_DATA = [
  {
    id: 1685,
    department: "Customer Support",
    firstName: "Ashley",
    lastName: "Garcia",
    fullName: "Ashley Garcia",
    position: "Manager Agent",
    email: "ashley.garcia@company.com",
    hireDate: "2016-07-05",
    yearsOfService: 9.3,
    salary: 154000,
    performanceScore: 86,
    location: "Remote",
    status: "Active",
    isRemoteEligible: true,
  },
  {
    id: 8436,
    department: "Customer Support",
    firstName: "William",
    lastName: "Nelson",
    fullName: "William Nelson",
    position: "Executive Agent",
    email: "william.nelson@company.com",
    hireDate: "2024-08-28",
    yearsOfService: 1.1,
    salary: 140000,
    performanceScore: 98,
    location: "Chicago",
    status: "Active",
    isRemoteEligible: false,
  },
  {
    id: 3349,
    department: "Engineering",
    firstName: "Carol",
    lastName: "Carter",
    fullName: "Carol Carter",
    position: "Lead Engineer",
    email: "carol.carter@company.com",
    hireDate: "2016-11-22",
    yearsOfService: 8.9,
    salary: 147000,
    performanceScore: 61,
    location: "Seattle",
    status: "Terminated",
    isRemoteEligible: true,
  },
  {
    id: 7853,
    department: "HR",
    firstName: "Donna",
    lastName: "Allen",
    fullName: "Donna Allen",
    position: "Head Specialist",
    email: "donna.allen@company.com",
    hireDate: "2021-05-09",
    yearsOfService: 4.4,
    salary: 240000,
    performanceScore: 70,
    location: "Chicago",
    status: "On Leave",
    isRemoteEligible: false,
  },
  {
    id: 7573,
    department: "Finance",
    firstName: "Stephanie",
    lastName: "Martinez",
    fullName: "Stephanie Martinez",
    position: "Analyst Analyst",
    email: "stephanie.martinez@company.com",
    hireDate: "2025-04-21",
    yearsOfService: 0.5,
    salary: 68000,
    performanceScore: 95,
    location: "Boston",
    status: "On Leave",
    isRemoteEligible: false,
  },
  {
    id: 10100,
    department: "Marketing",
    firstName: "Susan",
    lastName: "Scott",
    fullName: "Susan Scott",
    position: "Head Marketer",
    email: "susan.scott@company.com",
    hireDate: "2022-06-05",
    yearsOfService: 3.4,
    salary: 172000,
    performanceScore: 71,
    location: "Boston",
    status: "Probation",
    isRemoteEligible: true,
  },
  {
    id: 9362,
    department: "Sales",
    firstName: "Linda",
    lastName: "Davis",
    fullName: "Linda Davis",
    position: "Junior Representative",
    email: "linda.davis@company.com",
    hireDate: "2022-12-22",
    yearsOfService: 2.8,
    salary: 68000,
    performanceScore: 73,
    location: "Boston",
    status: "On Leave",
    isRemoteEligible: false,
  },
  {
    id: 5460,
    department: "Customer Support",
    firstName: "Laura",
    lastName: "Robinson",
    fullName: "Laura Robinson",
    position: "Manager Agent",
    email: "laura.robinson@company.com",
    hireDate: "2021-12-25",
    yearsOfService: 3.8,
    salary: 166000,
    performanceScore: 98,
    location: "Remote",
    status: "Contract",
    isRemoteEligible: true,
  },
  {
    id: 4021,
    department: "Finance",
    firstName: "Sarah",
    lastName: "Jackson",
    fullName: "Sarah Jackson",
    position: "Assistant Analyst",
    email: "sarah.jackson@company.com",
    hireDate: "2021-10-09",
    yearsOfService: 4,
    salary: 59000,
    performanceScore: 67,
    location: "New York",
    status: "Probation",
    isRemoteEligible: false,
  },
  {
    id: 2313,
    department: "Engineering",
    firstName: "Angela",
    lastName: "Jones",
    fullName: "Angela Jones",
    position: "Senior Engineer",
    email: "angela.jones@company.com",
    hireDate: "2024-10-15",
    yearsOfService: 1,
    salary: 106000,
    performanceScore: 60,
    location: "Chicago",
    status: "Probation",
    isRemoteEligible: true,
  },
  {
    id: 4248,
    department: "HR",
    firstName: "Dorothy",
    lastName: "Evans",
    fullName: "Dorothy Evans",
    position: "Head Specialist",
    email: "dorothy.evans@company.com",
    hireDate: "2023-05-28",
    yearsOfService: 2.4,
    salary: 242000,
    performanceScore: 100,
    location: "Los Angeles",
    status: "Probation",
    isRemoteEligible: false,
  },
  {
    id: 9140,
    department: "Sales",
    firstName: "Jessica",
    lastName: "Mitchell",
    fullName: "Jessica Mitchell",
    position: "Assistant Representative",
    email: "jessica.mitchell@company.com",
    hireDate: "2025-04-23",
    yearsOfService: 0.5,
    salary: 58000,
    performanceScore: 93,
    location: "Chicago",
    status: "Probation",
    isRemoteEligible: false,
  },
  {
    id: 8134,
    department: "Operations",
    firstName: "Melissa",
    lastName: "Brown",
    fullName: "Melissa Brown",
    position: "Coordinator Manager",
    email: "melissa.brown@company.com",
    hireDate: "2016-09-06",
    yearsOfService: 9.1,
    salary: 64000,
    performanceScore: 99,
    location: "New York",
    status: "On Leave",
    isRemoteEligible: false,
  },
  {
    id: 3520,
    department: "Operations",
    firstName: "Kimberly",
    lastName: "Martin",
    fullName: "Kimberly Martin",
    position: "Director Manager",
    email: "kimberly.martin@company.com",
    hireDate: "2020-11-23",
    yearsOfService: 4.9,
    salary: 136000,
    performanceScore: 72,
    location: "Los Angeles",
    status: "Contract",
    isRemoteEligible: false,
  },
  {
    id: 4877,
    department: "Marketing",
    firstName: "Anna",
    lastName: "Rodriguez",
    fullName: "Anna Rodriguez",
    position: "Lead Marketer",
    email: "anna.rodriguez@company.com",
    hireDate: "2016-08-22",
    yearsOfService: 9.1,
    salary: 136000,
    performanceScore: 95,
    location: "Chicago",
    status: "Probation",
    isRemoteEligible: true,
  },
  {
    id: 2622,
    department: "Customer Support",
    firstName: "Barbara",
    lastName: "Adams",
    fullName: "Barbara Adams",
    position: "Junior Agent",
    email: "barbara.adams@company.com",
    hireDate: "2025-05-10",
    yearsOfService: 0.4,
    salary: 54000,
    performanceScore: 80,
    location: "Austin",
    status: "Active",
    isRemoteEligible: false,
  },
  {
    id: 1438,
    department: "Engineering",
    firstName: "Nicole",
    lastName: "Baker",
    fullName: "Nicole Baker",
    position: "Director Engineer",
    email: "nicole.baker@company.com",
    hireDate: "2023-03-18",
    yearsOfService: 2.6,
    salary: 112000,
    performanceScore: 63,
    location: "Seattle",
    status: "Contract",
    isRemoteEligible: false,
  },
  {
    id: 4651,
    department: "Customer Support",
    firstName: "Sandra",
    lastName: "Mitchell",
    fullName: "Sandra Mitchell",
    position: "Head Agent",
    email: "sandra.mitchell@company.com",
    hireDate: "2022-01-19",
    yearsOfService: 3.7,
    salary: 152000,
    performanceScore: 83,
    location: "Boston",
    status: "Contract",
    isRemoteEligible: true,
  },
  {
    id: 1017,
    department: "Operations",
    firstName: "John",
    lastName: "Jones",
    fullName: "John Jones",
    position: "Director Manager",
    email: "john.jones@company.com",
    hireDate: "2016-08-07",
    yearsOfService: 9.2,
    salary: 144000,
    performanceScore: 76,
    location: "Austin",
    status: "Active",
    isRemoteEligible: true,
  },
  {
    id: 5438,
    department: "Marketing",
    firstName: "Karen",
    lastName: "Harris",
    fullName: "Karen Harris",
    position: "Head Marketer",
    email: "karen.harris@company.com",
    hireDate: "2023-09-22",
    yearsOfService: 2.1,
    salary: 177000,
    performanceScore: 93,
    location: "Chicago",
    status: "Active",
    isRemoteEligible: true,
  },
  {
    id: 9194,
    department: "Marketing",
    firstName: "Cynthia",
    lastName: "Jackson",
    fullName: "Cynthia Jackson",
    position: "Intern Marketer",
    email: "cynthia.jackson@company.com",
    hireDate: "2017-04-23",
    yearsOfService: 8.5,
    salary: 35000,
    performanceScore: 91,
    location: "San Francisco",
    status: "Terminated",
    isRemoteEligible: true,
  },
];

export default function HRExample({
  height = 500,
  rowHeight = 48,
  theme,
  rowCount = 50,
}: {
  height: number | null;
  rowHeight?: number;
  theme?: Theme;
  rowCount?: number;
}) {
  const [data, setData] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch HR data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
        const isProduction =
          typeof window !== "undefined" && window.location.hostname.includes("simple-table.com");

        // Use backup data if not on localhost or production
        if (!isLocal && !isProduction) {
          setData(BACKUP_HR_DATA);
          setIsLoading(false);
          return;
        }

        // Use relative path for local development, full URL for production
        const baseUrl = isLocal ? "" : "https://www.simple-table.com";
        const response = await fetch(`${baseUrl}/api/data/hr?rowCount=${rowCount}`);
        if (!response.ok) {
          throw new Error("Failed to fetch HR data");
        }
        const hrData = await response.json();
        setData(hrData);
      } catch (error) {
        console.error("Error fetching HR data:", error);
        // Fallback to backup data on error
        setData(BACKUP_HR_DATA);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [rowCount]);

  const howManyRowsCanFit = height ? Math.floor(height / rowHeight) : 10;

  const handleCellEdit = ({ accessor, newValue, row }: CellChangeProps) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === row.id) {
          return {
            ...item,
            [accessor]: newValue,
          };
        }
        return item;
      })
    );
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: height ? `${height}px` : "70dvh",
          fontSize: "16px",
          color: "#666",
        }}
      >
        Loading HR data...
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <SimpleTable
        columnReordering
        columnResizing
        defaultHeaders={HEADERS}
        rowIdAccessor="id"
        rows={data}
        rowsPerPage={howManyRowsCanFit}
        rowHeight={rowHeight}
        selectableCells
        shouldPaginate
        theme={theme}
        onCellEdit={handleCellEdit}
      />
    </div>
  );
}
