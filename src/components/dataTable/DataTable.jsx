import "./dataTable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
// * Import Data
import rows from "../../data/dataTableRows.json";
import columns from "../../data/dataTableCollum";
const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delate</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default DataTable;
