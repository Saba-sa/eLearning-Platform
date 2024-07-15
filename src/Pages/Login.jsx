import { useEffect, useMemo, useState } from "react";
import login from "../assets/login.png";
import signup from "../assets/signup.png";
import Signupinterface from "../Components/Signupinterface";
import { useLocation } from "react-router-dom";
const Login = () => {
  const [datatodisplay, setDatatodisplay] = useState({});
  const location = useLocation();

  const data = useMemo(
    () => [
      {
        imgtoShown: login,
        route: "login",
      },
      {
        imgtoShown: signup,
        route: "signup",
      },
    ],
    []
  );

  useEffect(() => {
    function setDataByLocation() {
      if (location.pathname === "/login") {
        setDatatodisplay(data[0]);
      } else {
        setDatatodisplay(data[1]);
      }
    }

    setDataByLocation();
  }, [location]);

  return (
    <div className="bg-bg-gray w-100 h-[100vh] flex justify-center items-center">
      <Signupinterface data={datatodisplay} />
    </div>
  );
};

export default Login;
