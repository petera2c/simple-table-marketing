import { HeaderObject, Row } from "simple-table-core";

export const generateRetailSalesData = (): Row[] => {
  const regions = Array.from({ length: 20 }, (_, i) => `Region ${i + 1}`);
  const storeNames = ["MegaMart", "ShopRite", "TrendyGoods", "ValueStore", "QuickBuy"];
  const cities = ["New York", "London", "Tokyo", "Sydney", "Paris", "Toronto", "Berlin"];
  let rowId = 0;

  return regions.map((region) => {
    const numStores = Math.floor(Math.random() * 7) + 2; // 2 to 8 children
    const children = Array.from({ length: numStores }, () => {
      const storeName = storeNames[Math.floor(Math.random() * storeNames.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const electronicsSales = Math.floor(Math.random() * 100000) + 5000;
      const clothingSales = Math.floor(Math.random() * 80000) + 4000;
      const groceriesSales = Math.floor(Math.random() * 120000) + 6000;
      const furnitureSales = Math.floor(Math.random() * 60000) + 3000;
      const totalSales = electronicsSales + clothingSales + groceriesSales + furnitureSales;
      const openingDate = `202${Math.floor(Math.random() * 5)}-${String(Math.floor(Math.random() * 12) + 1).padStart(
        2,
        "0"
      )}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`;

      return {
        rowMeta: { rowId: rowId++, isExpanded: true },
        rowData: {
          name: `${storeName} - ${city}`,
          city,
          employees: Math.floor(Math.random() * 200) + 10,
          squareFootage: Math.floor(Math.random() * 10000) + 1000,
          openingDate,
          customerRating: (Math.random() * 5).toFixed(1),
          electronicsSales,
          clothingSales,
          groceriesSales,
          furnitureSales,
          totalSales,
        },
      };
    });

    const regionTotalElectronicsSales = children.reduce((sum, child) => sum + child.rowData.electronicsSales, 0);
    const regionTotalClothingSales = children.reduce((sum, child) => sum + child.rowData.clothingSales, 0);
    const regionTotalGroceriesSales = children.reduce((sum, child) => sum + child.rowData.groceriesSales, 0);
    const regionTotalFurnitureSales = children.reduce((sum, child) => sum + child.rowData.furnitureSales, 0);
    const regionTotalSales =
      regionTotalElectronicsSales + regionTotalClothingSales + regionTotalGroceriesSales + regionTotalFurnitureSales;

    return {
      rowMeta: { rowId: rowId++, isExpanded: true, children },
      rowData: {
        name: region,
        city: "-",
        employees: children.reduce((sum, child) => sum + (child.rowData.employees as number), 0),
        squareFootage: children.reduce((sum, child) => sum + (child.rowData.squareFootage as number), 0),
        openingDate: "-",
        customerRating: "-",
        electronicsSales: regionTotalElectronicsSales,
        clothingSales: regionTotalClothingSales,
        groceriesSales: regionTotalGroceriesSales,
        furnitureSales: regionTotalFurnitureSales,
        totalSales: regionTotalSales,
      },
    };
  });
};

export const RETAIL_SALES_HEADERS: HeaderObject[] = [
  {
    accessor: "name",
    label: "Name",
    width: 250,
    expandable: true,
    isSortable: true,
    isEditable: true,
    align: "left",
  },
  { accessor: "city", label: "City", width: 150, isSortable: true, isEditable: true, align: "left" },
  { accessor: "employees", label: "Employees", width: 150, isSortable: true, isEditable: true, align: "right" },
  {
    accessor: "squareFootage",
    label: "Square Footage",
    width: 180,
    isSortable: true,
    isEditable: true,
    align: "right",
  },
  {
    accessor: "openingDate",
    label: "Opening Date",
    width: 150,
    isSortable: true,
    isEditable: true,
    align: "left",
    cellRenderer: (row) => {
      if (row.rowData.openingDate === "-") return "-";
      const date = new Date(row.rowData.openingDate as string);
      return date.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      });
    },
  },
  {
    accessor: "customerRating",
    label: "Customer Rating",
    width: 180,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: (row) => (row.rowData.customerRating === "-" ? "-" : `${row.rowData.customerRating}/5`),
  },
  {
    accessor: "electronicsSales",
    label: "Electronics Sales",
    width: 200,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: (row) => `$${(row.rowData.electronicsSales as number).toLocaleString("en-US")}`,
  },
  {
    accessor: "clothingSales",
    label: "Clothing Sales",
    width: 200,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: (row) => `$${(row.rowData.clothingSales as number).toLocaleString("en-US")}`,
  },
  {
    accessor: "groceriesSales",
    label: "Groceries Sales",
    width: 200,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: (row) => `$${(row.rowData.groceriesSales as number).toLocaleString("en-US")}`,
  },
  {
    accessor: "furnitureSales",
    label: "Furniture Sales",
    width: 200,
    isSortable: true,
    isEditable: true,
    align: "right",
    cellRenderer: (row) => `$${(row.rowData.furnitureSales as number).toLocaleString("en-US")}`,
  },
  {
    accessor: "totalSales",
    label: "Total Sales",
    width: 200,
    isSortable: true,
    isEditable: true,
    pinned: "right",
    align: "right",
    cellRenderer: (row) => `$${(row.rowData.totalSales as number).toLocaleString("en-US")}`,
  },
];
