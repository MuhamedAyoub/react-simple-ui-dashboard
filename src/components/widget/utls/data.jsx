import User from "@mui/icons-material/PersonOutline";
import Money from "@mui/icons-material/MonetizationOnOutlined";
import Shop from "@mui/icons-material/ShoppingCartOutlined";
import Balance from "@mui/icons-material/AccountBalanceWalletOutlined";
export default function getData(type) {
  switch (type) {
    case "user":
      return {
        title: "USER",
        isMoney: false,
        link: "see all users",
        icon: (
          <User
            className="icon"
            style={{ backgroundColor: "rgba(128,0,0,0.2)", color: "red" }}
          />
        ),
        amount: 302,
        percen: 6,
      };

    case "order":
      return {
        title: "ORDERS",
        isMoney: false,
        link: "View  all orders",
        icon: (
          <Shop
            className="icon"
            style={{
              backgroundColor: "rgba(218,165,32,0.2)",
              color: "goldenrod",
            }}
          />
        ),
        amount: 730,
        percen: 62,
      };

    case "earrings":
      return {
        title: "EARNINGS",
        isMoney: true,
        link: "View ,et earrings",
        icon: (
          <Money
            className="icon"
            style={{
              backgroundColor: "rgba(0,128,0,0.2)",
              color: "green",
            }}
          />
        ),
        amount: 236,
        percen: 12,
      };

    case "balance":
      return {
        title: "BALANCE",
        isMoney: true,
        link: "Totals",
        icon: (
          <Balance
            className="icon"
            style={{
              backgroundColor: "rgba(128,0,128,0.2)",
              color: "purple",
            }}
          />
        ),
        amount: 463,
        percen: 25,
      };

    default:
  }
}
