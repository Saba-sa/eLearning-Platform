import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
const App = () => {
  return (
    <div>
      <Header showOnHeader={true} />
      <Outlet />
    </div>
  );
};

export default App;
