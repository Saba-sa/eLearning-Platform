import { useNavigate } from "react-router-dom";
const SignupInterface = ({ data }) => {
  const { imgtoShown, route } = data;
  console.log(data);
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div className="flex justify-center h-[100%] bg-white py-12 md:w-[90%] md:h-[95%] lg:w-[70%] lg:h-[80%] xl:w-[60%] md:p-4 gap-4">
      <div className="hidden md:inline md:w-[100%] relative">
        <img src={imgtoShown} alt="" className="w-full h-full" />
        <div className="absolute bottom-14 left-8 text-white">
          <h1 className="font-extrabold text-2xl"> Lorem Ipsum is simply </h1>
          <p>Lorem Ipsum is simply </p>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center w-[90%] sm:w-[100%] md:w-[90%] p-9">
        <p className="mb-2">Welcome to lorem..!</p>
        <div className="bg-primary-light flex items-center  rounded-full w-[80%] px-2 py-2 mb-2 sm:mb-0 md:mb-3 ">
          <p
            className={` p-2 rounded-full w-[50%] text-center text-white cursor-pointer ${
              route === "login" && "bg-primary "
            }`}
            onClick={() => handleClick("/login")}
          >
            Login
          </p>
          <p
            className={` p-2 rounded-full w-[50%] text-center text-white cursor-pointer ${
              route === "signup" && "bg-primary "
            }`}
            onClick={() => handleClick("/signup")}
          >
            Register
          </p>
        </div>

        <p className="text-text-color">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form className="w-full mt-4">
          {route === "signup" && (
            <div className="my-2">
              <label htmlFor="user_name">Email Address</label>
              <div className="border border-primary rounded-full overflow-hidden p-3 mt-2 ">
                <input
                  type="text"
                  id="user_name"
                  placeholder="Enter Your user name"
                  className=" focus:outline-none"
                />
              </div>
            </div>
          )}
          <div className="my-2">
            <label htmlFor="user_name">User name</label>
            <div className="border border-primary rounded-full overflow-hidden p-3 mt-2 ">
              <input
                type="text"
                id="user_name"
                placeholder="Enter Your user name"
                className=" focus:outline-none"
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password">Password</label>
            <div className="border border-primary rounded-full overflow-hidden p-3 mt-2">
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className=" focus:outline-none"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-between w-full">
          <p>Rememebr me</p>
          <p>Forgot Password ?</p>
        </div>

        <div className="flex justify-end items-end w-full my-6">
          <button className=" bg-primary text-white text-right px-16 py-2 rounded-full capitalize">
            {route}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupInterface;
