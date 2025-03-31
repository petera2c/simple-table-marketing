import React from "react";
import { SimpleTable, HeaderObject } from "simple-table-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCheckCircle,
  faTimesCircle,
  faExclamationTriangle,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const CellRendererDemo = () => {
  // Sample data
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      website: "johndoe.com",
      status: "active",
      progress: 75,
      rating: 4.5,
      verified: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
      website: "janesmith.io",
      status: "inactive",
      progress: 30,
      rating: 3.2,
      verified: false,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "+1 (555) 567-8901",
      website: "bobjohnson.dev",
      status: "pending",
      progress: 50,
      rating: 4.0,
      verified: true,
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      phone: "+1 (555) 234-5678",
      website: "alicew.net",
      status: "active",
      progress: 90,
      rating: 4.8,
      verified: true,
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      phone: "+1 (555) 876-5432",
      website: "charlieb.org",
      status: "inactive",
      progress: 15,
      rating: 2.7,
      verified: false,
    },
  ];

  // Define headers with custom cell renderers
  const headers: HeaderObject[] = [
    { accessor: "id", label: "ID", width: 60 },
    { accessor: "name", label: "Name", width: 180 },
    {
      accessor: "email",
      label: "Email",
      width: 200,
      cellRenderer: (row) => (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-2" />
          <a href={`mailto:${row.rowData.email}`} className="text-blue-600 hover:underline">
            {row.rowData.email}
          </a>
        </div>
      ),
    },
    {
      accessor: "phone",
      label: "Phone",
      width: 180,
      cellRenderer: (row) => (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="text-gray-400 mr-2" />
          <a href={`tel:${row.rowData.phone}`} className="text-blue-600 hover:underline">
            {row.rowData.phone}
          </a>
        </div>
      ),
    },
    {
      accessor: "website",
      label: "Website",
      width: 150,
      cellRenderer: (row) => (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faGlobe} className="text-gray-400 mr-2" />
          <a
            href={`https://${row.rowData.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {row.rowData.website}
          </a>
        </div>
      ),
    },
    {
      accessor: "status",
      label: "Status",
      width: 120,
      cellRenderer: (row) => {
        const status = row.rowData.status as string;
        let color = "gray";
        let icon = faCheckCircle;

        if (status === "active") {
          color = "green";
          icon = faCheckCircle;
        } else if (status === "inactive") {
          color = "red";
          icon = faTimesCircle;
        } else if (status === "pending") {
          color = "yellow";
          icon = faExclamationTriangle;
        }

        return (
          <div className={`flex items-center text-${color}-500 capitalize`}>
            <FontAwesomeIcon icon={icon} className="mr-1" />
            {status}
          </div>
        );
      },
    },
    {
      accessor: "progress",
      label: "Progress",
      width: 150,
      cellRenderer: (row) => {
        const progress = row.rowData.progress as number;
        let color = "blue";

        if (progress < 30) color = "red";
        else if (progress < 70) color = "yellow";
        else color = "green";

        return (
          <div className="w-full">
            <div className="text-xs mb-1">{progress}%</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className={`bg-${color}-500 h-2.5 rounded-full`} style={{ width: `${progress}%` }} />
            </div>
          </div>
        );
      },
    },
    {
      accessor: "rating",
      label: "Rating",
      width: 150,
      cellRenderer: (row) => {
        const rating = row.rowData.rating as number;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={
                    i < fullStars
                      ? "text-yellow-400"
                      : i === fullStars && hasHalfStar
                      ? "text-yellow-400 opacity-50"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span>{rating.toFixed(1)}</span>
          </div>
        );
      },
    },
    {
      accessor: "verified",
      label: "Verified",
      width: 100,
      cellRenderer: (row) => {
        const verified = row.rowData.verified as boolean;

        return verified ? (
          <span className="inline-flex items-center text-green-500">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
            Yes
          </span>
        ) : (
          <span className="inline-flex items-center text-red-500">
            <FontAwesomeIcon icon={faTimesCircle} className="mr-1" />
            No
          </span>
        );
      },
    },
  ];

  // Map data to rows format
  const rows = data.map((item) => ({
    rowMeta: { rowId: item.id, isExpanded: false },
    rowData: item,
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Cell Renderer Demo</h2>
        <p className="text-gray-700 mb-6">
          This demo showcases how to use cell renderers to display rich, interactive content within table cells,
          including links, icons, progress bars, and ratings.
        </p>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <SimpleTable defaultHeaders={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default CellRendererDemo;
