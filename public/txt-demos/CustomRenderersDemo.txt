import { SimpleTable, HeaderObject, Row } from "simple-table-core";
import "simple-table-core/styles.css";

// Sample data
const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    role: "Developer",
    department: "Engineering",
    startDate: "2018-06-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    role: "Designer",
    department: "Design",
    startDate: "2019-02-20",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 45,
    role: "Manager",
    department: "Management",
    startDate: "2017-05-10",
  },
  {
    id: 4,
    name: "Alice Williams",
    age: 24,
    role: "Intern",
    department: "Internship",
    startDate: "2018-09-01",
  },
  {
    id: 5,
    name: "Charlie Brown",
    age: 37,
    role: "DevOps",
    department: "Engineering",
    startDate: "2018-03-15",
  },
  {
    id: 6,
    name: "David Lee",
    age: 31,
    role: "QA Engineer",
    department: "Quality Assurance",
    startDate: "2018-07-22",
  },
  {
    id: 7,
    name: "Eve Green",
    age: 29,
    role: "Product Manager",
    department: "Product Management",
    startDate: "2018-04-18",
  },
  {
    id: 8,
    name: "Frank White",
    age: 33,
    role: "Sales Manager",
    department: "Sales",
    startDate: "2018-01-01",
  },
  {
    id: 9,
    name: "Grace Black",
    age: 27,
    role: "HR Manager",
    department: "Human Resources",
    startDate: "2018-01-01",
  },
];

// Map data to rows format expected by SimpleTable
const rows = EMPLOYEE_DATA.map((item) => ({
  rowMeta: { rowId: item.id },
  rowData: item,
}));

const CustomRenderersDemo = () => {
  // Custom cell renderers
  const employeeNameRenderer = ({
    accessor,
    colIndex,
    row,
  }: {
    accessor: string;
    colIndex: number;
    row: Row;
  }) => {
    const { firstName, lastName, avatar, role } = row.rowData;
    return (
      <div className="flex items-center">
        {typeof avatar === "string" && (
          <img
            src={avatar}
            alt={`${firstName} ${lastName}`}
            className="w-10 h-10 rounded-full mr-3"
          />
        )}
        <div>
          <div className="font-medium">
            {firstName} {lastName}
          </div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    );
  };

  const levelRenderer = ({
    accessor,
    colIndex,
    row,
  }: {
    accessor: string;
    colIndex: number;
    row: Row;
  }) => {
    const level = row.rowData.level;
    let icon, color;

    switch (level) {
      case "Junior":
        icon = faUser;
        color = "text-blue-500";
        break;
      case "Mid":
        icon = faUserGraduate;
        color = "text-green-500";
        break;
      case "Senior":
        icon = faUserTie;
        color = "text-purple-500";
        break;
      case "Principal":
        icon = faUserAstronaut;
        color = "text-red-500";
        break;
      default:
        icon = faUserNinja;
        color = "text-gray-500";
    }

    return (
      <div className="flex items-center">
        <FontAwesomeIcon icon={icon} className={`${color} mr-2`} />
        <span>{level}</span>
      </div>
    );
  };

  const locationRenderer = ({
    accessor,
    colIndex,
    row,
  }: {
    accessor: string;
    colIndex: number;
    row: Row;
  }) => (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-2" />
      <span>{row.rowData.location}</span>
    </div>
  );

  const companyRenderer = ({
    accessor,
    colIndex,
    row,
  }: {
    accessor: string;
    colIndex: number;
    row: Row;
  }) => (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faBuilding} className="text-gray-500 mr-2" />
      <span>{row.rowData.company}</span>
    </div>
  );

  const hireDateRenderer = ({
    accessor,
    colIndex,
    row,
  }: {
    accessor: string;
    colIndex: number;
    row: Row;
  }) => {
    const hireDate = new Date(row.rowData.hireDate as string);
    const formattedDate = hireDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500 mr-2" />
        <span>{formattedDate}</span>
      </div>
    );
  };

  const performanceRenderer = ({
    accessor,
    colIndex,
    row,
  }: {
    accessor: string;
    colIndex: number;
    row: Row;
  }) => {
    const performance = row.rowData.performance as number;
    let color;

    if (performance >= 90) color = "bg-green-500";
    else if (performance >= 80) color = "bg-blue-500";
    else if (performance >= 70) color = "bg-yellow-500";
    else color = "bg-red-500";

    return (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBarChart} className="text-gray-500 mr-2" />
        <div className="flex items-center space-x-2 w-full">
          <div className="w-24 bg-gray-200 rounded-full h-2.5">
            <div
              className={`${color} h-2.5 rounded-full`}
              style={{ width: `${performance}%` }}
            ></div>
          </div>
          <span className="text-sm">{performance}%</span>
        </div>
      </div>
    );
  };

  // Define headers with custom renderers
  const headers: HeaderObject[] = [
    {
      accessor: "name",
      label: "Employee",
      width: 250,
      type: "string",
      cellRenderer: employeeNameRenderer,
    },
    {
      accessor: "level",
      label: "Level",
      width: 150,
      type: "string",
      cellRenderer: levelRenderer,
    },
    {
      accessor: "company",
      label: "Company",
      width: 180,
      type: "string",
      cellRenderer: companyRenderer,
    },
    {
      accessor: "location",
      label: "Location",
      width: 180,
      type: "string",
      cellRenderer: locationRenderer,
    },
    {
      accessor: "hireDate",
      label: "Hire Date",
      width: 150,
      type: "date",
      cellRenderer: hireDateRenderer,
    },
    {
      accessor: "performance",
      label: "Performance",
      width: 200,
      type: "number",
      cellRenderer: performanceRenderer,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Custom Renderers Demo</h2>
        <p className="text-gray-700 mb-6">
          This demo showcases various custom cell renderers to create a rich, interactive employee
          directory with avatars, icons, and visualizations.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default CustomRenderersDemo;
