import Navbar from "../../components/navbar/Navbar";
import "./new.scss";
import empty from "../../assets/images/Empty.png";
import Input from "./components/Input";
import { Form } from "./components/Form";
const New = () => {
  return (
    <div className="new">
      <Navbar />
      <div className="top">
        <h1>Add New User</h1>
      </div>

      <div className="bottom">
        <div className="left">
          <img src={empty} />
        </div>

        <div className="right">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default New;
