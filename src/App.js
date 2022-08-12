import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import NotFound from "./pages/notFound/NotFound";
import Single from "./pages/single/Single";
import "./App.scss";
import Sidebar from "./components/sidbar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="new" element={<New />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="not-found" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
