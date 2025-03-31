import React from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserTie,
  faUserGraduate,
  faUserNinja,
  faUserAstronaut,
  faBarChart,
  faCalendarAlt,
  faMapMarkerAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const CustomRenderersDemo = () => {
  // Sample employee data
  const data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      role: "Developer",
      level: "Senior",
      location: "San Francisco",
      company: "TechCorp",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      hireDate: "2020-03-15",
      performance: 87,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      role: "Designer",
      level: "Mid",
      location: "New York",
      company: "DesignHub",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      hireDate: "2021-07-22",
      performance: 92,
    },
    {
      id: 3,
      firstName: "Robert",
      lastName: "Johnson",
      role: "Manager",
      level: "Senior",
      location: "Chicago",
      company: "DataSystems",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      hireDate: "2018-11-05",
      performance: 78,
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Brown",
      role: "Engineer",
      level: "Junior",
      location: "Seattle",
      company: "CloudTech",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      hireDate: "2022-01-10",
      performance: 81,
    },
    {
      id: 5,
      firstName: "Michael",
      lastName: "Davis",
      role: "Architect",
      level: "Principal",
      location: "Austin",
      company: "BuilderSoft",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      hireDate: "2017-04-28",
      performance: 95,
    },
  ];

  // Custom cell renderers
  const employeeNameRenderer = (row: any) => {
    const { firstName, lastName, avatar, role } = row.rowData;
    return (
      <div className="flex items-center">
        <img src={avatar} alt={`${firstName} ${lastName}`} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <div className="font-medium">
            {firstName} {lastName}
          </div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    );
  };

  const levelRenderer = (row: any) => {
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

  const locationRenderer = (row: any) => (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-2" />
      <span>{row.rowData.location}</span>
    </div>
  );

  const companyRenderer = (row: any) => (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faBuilding} className="text-gray-500 mr-2" />
      <span>{row.rowData.company}</span>
    </div>
  );

  const hireDateRenderer = (row: any) => {
    const hireDate = new Date(row.rowData.hireDate);
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

  const performanceRenderer = (row: any) => {
    const performance = row.rowData.performance;
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
            <div className={`${color} h-2.5 rounded-full`} style={{ width: `${performance}%` }}></div>
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
      cellRenderer: employeeNameRenderer,
    },
    {
      accessor: "level",
      label: "Level",
      width: 150,
      cellRenderer: levelRenderer,
    },
    {
      accessor: "company",
      label: "Company",
      width: 180,
      cellRenderer: companyRenderer,
    },
    {
      accessor: "location",
      label: "Location",
      width: 180,
      cellRenderer: locationRenderer,
    },
    {
      accessor: "hireDate",
      label: "Hire Date",
      width: 150,
      cellRenderer: hireDateRenderer,
    },
    {
      accessor: "performance",
      label: "Performance",
      width: 200,
      cellRenderer: performanceRenderer,
    },
  ];

  // Map data to rows
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: {
      ...item,
      name: `${item.firstName} ${item.lastName}`, // Add a name field for the accessor
    },
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Custom Renderers Demo</h2>
        <p className="text-gray-700 mb-6">
          This demo showcases various custom cell renderers to create a rich, interactive employee directory with
          avatars, icons, and visualizations.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default CustomRenderersDemo;
