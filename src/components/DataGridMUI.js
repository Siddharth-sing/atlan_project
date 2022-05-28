import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Sl.No.", width: 80 },
  { field: "prod_id", headerName: "Product Id", width: 115 },
  { field: "prod_name", headerName: "Product Name", width: 105 },
  { field: "unit_stock", headerName: "Units Of Stock", width: 120 },
];

const rows1 = [
  { id: 1, prod_id: "P01", prod_name: "Chai", unit_stock: 5 },
  { id: 2, prod_id: "P02", prod_name: "Chang", unit_stock: 15 },
  { id: 3, prod_id: "P03", prod_name: "Gumbo Mix", unit_stock: 3 },
  { id: 4, prod_id: "P04", prod_name: "Aniseed Syrup", unit_stock: 85 },
  { id: 5, prod_id: "P05", prod_name: "Ikura", unit_stock: 7 },
  { id: 6, prod_id: "P06", prod_name: "Tofu", unit_stock: 17 },
  { id: 7, prod_id: "P07", prod_name: "Pavlova", unit_stock: 69 },
  { id: 8, prod_id: "P08", prod_name: "Longlife Tofu", unit_stock: 52 },
  { id: 9, prod_id: "P09", prod_name: "Wheat", unit_stock: 0 },
  { id: 10, prod_id: "P010", prod_name: "Oreo", unit_stock: 10 },
];
const rows2 = [
  { id: 4, prod_id: "P04", prod_name: "Aniseed Syrup", unit_stock: 85 },
  { id: 6, prod_id: "P06", prod_name: "Tofu", unit_stock: 17 },
  { id: 7, prod_id: "P07", prod_name: "Pavlova", unit_stock: 69 },
  { id: 8, prod_id: "P08", prod_name: "Longlife Tofu", unit_stock: 52 },
];
const rows3 = [
  { id: 1, prod_id: "P01", prod_name: "Chai", unit_stock: 5 },
  { id: 2, prod_id: "P02", prod_name: "Chang", unit_stock: 15 },
  { id: 4, prod_id: "P04", prod_name: "Aniseed Syrup", unit_stock: 85 },
  { id: 5, prod_id: "P05", prod_name: "Ikura", unit_stock: 7 },
  { id: 6, prod_id: "P06", prod_name: "Tofu", unit_stock: 17 },
  { id: 7, prod_id: "P07", prod_name: "Pavlova", unit_stock: 69 },
  { id: 8, prod_id: "P08", prod_name: "Longlife Tofu", unit_stock: 52 },
  { id: 9, prod_id: "P09", prod_name: "Wheat", unit_stock: 0 },
  { id: 10, prod_id: "P010", prod_name: "Oreo", unit_stock: 10 },
];

export default function DataGridMUI(props) {
  const [rowx, setRows] = useState(rows1);

  console.log("Visibility = ", props.vis);
  console.log("Query = ", props.q);

  useEffect(() => {
    console.log("Inside Useeffect");
    handleRows();
  });

  function handleRows() {
    if (props.q === 1) {
      setRows(rows1);
    }else if(props.q === 2){
      setRows(rows2);
    }else if(props.q === 3){
      setRows(rows3);
    }
  }

  return (
    <div>
      <div
        className="data_grid"
        style={{ visibility: props.vis ? "visible" : "hidden" }}
      >
        <DataGrid
          rows={rowx}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
