import Chart from "../../components/features/chart/Chart";
import Featured from "../../components/features/feature/Featured";
import List from "../../components/listContent/ListContent";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="widget">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earrings" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
      </div>
      <List />
    </div>
  );
};

export default Home;
