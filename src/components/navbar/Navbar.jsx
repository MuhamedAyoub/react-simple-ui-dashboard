import "./navbar.scss";
// ! icons
import SearchIcon from "@mui/icons-material/Search";
import Items from "./components/items";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <Items />
      </div>
    </div>
  );
};

export default Navbar;
