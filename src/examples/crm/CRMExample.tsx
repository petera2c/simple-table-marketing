import { getCRMHeaders } from "./crm-headers";
import { useState, useEffect } from "react";
import { SimpleTable, CellChangeProps, Row, FooterRendererProps } from "simple-table-core";

import "simple-table-core/styles.css";
import "./CustomTheme.css";
import CRMCustomFooter from "./CRMFooter";
import { useCRMData } from "./useCRMData";

const CRMExampleComponent = ({
  expandIcon,
  filterIcon,
  headerCollapseIcon,
  headerExpandIcon,
  height,
  nextIcon,
  onGridReady,
  prevIcon,
  sortDownIcon,
  sortUpIcon,
  theme = "custom-light",
}: {
  expandIcon?: React.ReactNode;
  filterIcon?: React.ReactNode;
  headerCollapseIcon?: React.ReactNode;
  headerExpandIcon?: React.ReactNode;
  height?: number | null;
  nextIcon?: React.ReactNode;
  onGridReady?: () => void;
  prevIcon?: React.ReactNode;
  sortDownIcon?: React.ReactNode;
  sortUpIcon?: React.ReactNode;
  theme?: "custom-light" | "custom-dark";
}) => {
  const { data: fetchedData, isLoading } = useCRMData();
  const [data, setData] = useState(fetchedData);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const isDark = theme === "custom-dark";

  // Update local data when fetched data changes
  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);

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

  if (isLoading) return <></>;

  return (
    <div className={`custom-theme-container theme-${theme}`}>
      <SimpleTable
        columnReordering
        columnResizing
        defaultHeaders={getCRMHeaders(isDark)}
        enableRowSelection
        expandIcon={expandIcon}
        filterIcon={filterIcon}
        footerRenderer={(props) => (
          <CRMCustomFooter {...props} isDark={isDark} setRowsPerPage={setRowsPerPage} />
        )}
        headerCollapseIcon={headerCollapseIcon}
        headerExpandIcon={headerExpandIcon}
        headerHeight={48}
        height={height ? `${height}px` : "70dvh"}
        nextIcon={nextIcon}
        onCellEdit={handleCellEdit}
        onGridReady={onGridReady}
        prevIcon={prevIcon}
        rowHeight={92}
        rowIdAccessor="id"
        rows={data}
        rowsPerPage={rowsPerPage}
        shouldPaginate
        sortDownIcon={sortDownIcon}
        sortUpIcon={sortUpIcon}
        theme="custom"
      />
    </div>
  );
};

export default CRMExampleComponent;
