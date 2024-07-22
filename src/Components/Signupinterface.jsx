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

        <div className="flex justify-between items-end w-full my-6">
          <div className="flex flex-row gap-2">
            <button className="bg-primary text-white w-full  flex flex-row justify-center gap-2 items-center  hover:bg-primary duration-100 ease-in-out  px-8 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use href="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              Google
            </button>
          </div>
          <button className=" bg-primary text-white text-right px-16 py-2 rounded-full capitalize">
            {route}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupInterface;
