/* eslint-disable jsx-a11y/heading-has-content */
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/features/chart/Chart";
import Left from "./components/ItemLeft";
import Bottom from "./components/ItemBottom";

const Single = () => {
  return (
    <div className="single">
      <Navbar />
      <div className="top">
        <Left />
        <div className="right">
          <Chart aspect={4 / 1} title="User Spending" />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Single;
