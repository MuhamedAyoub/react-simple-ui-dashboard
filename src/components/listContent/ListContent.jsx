import Table from "../table/Table";
import "./listContent.scss";

const List = () => {
  return (
    <div className="list">
      <div className="title">Latest transactions</div>
      <Table />
    </div>
  );
};

export default List;
