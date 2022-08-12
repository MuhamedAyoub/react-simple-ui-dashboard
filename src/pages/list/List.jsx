import React from "react";
import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";

const List = () => {
  return (
    <div class="listPage">
      <Navbar />
      <DataTable />
    </div>
  );
};

export default List;
