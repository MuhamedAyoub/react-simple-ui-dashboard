import "./widget.scss";
// ! icons
import Up from "@mui/icons-material/KeyboardArrowUp";
import Down from "@mui/icons-material/ExpandMore";
import getData from "./utls/data";

export default function Widget({ type }) {
  const data = getData(type);
  return (
    <div className="widgete">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div
          className={`percentage  ${
            data.percen > 20 ? "positive" : "negative"
          }`}
        >
          {data.percen > 20 ? <Up /> : <Down />}
          {data.percen}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}
