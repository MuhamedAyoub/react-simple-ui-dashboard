import "./feature.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Down from "@mui/icons-material/ExpandMore";
import Up from "@mui/icons-material/KeyboardArrowUp";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="feature">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featureChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total sales made tody</p>
        <p className="desc">
          {" "}
          Previous transactions processing. Last payments may not be included.{" "}
        </p>
        <p className="amount">$125</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemIcon negative">
              <Down fontSize="small" />
              <div className="iteSale">$12.3K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemIcon positive ">
              <Up fontSize="small" />
              <div className="itemSale">$25.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemIcon negative">
              <Down fontSize="small" />
              <div className="itemSale">$225.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
