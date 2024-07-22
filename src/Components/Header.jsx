import logo from "./../assets/Polygon.png";
import down from "./../assets/down.png";
import avatar from "./../assets/avatar.png";
const Header = ({ showOnHeader = false }) => {
  return (
    <header className="relative container flex items-center justify-between m-auto py-4 z-10">
      <div className="flex items-center justify-center relative">
        <img src={logo} alt="logo of the image" className="w-[80%]" />
        <p
          className={`absolute left-8 text-2xl font-extrabold text-color-light ${
            showOnHeader && "text-white"
          }`}
        >
          TOTC
        </p>
      </div>
      <div className="flex gap-8 items-center">
        <ul
          className={`flex text-text-color gap-14 text-lg ${
            showOnHeader && "text-white"
          }`}
        >
          <li>Home</li>
          <li>Courses</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
        {showOnHeader ? (
          <div className="flex gap-4">
            <button
              type="button "
              className="px-8 py-2 bg-white text-black rounded-full"
            >
              Login
            </button>
            <button
              type="button"
              className="px-8 py-2 rounded-full text-white bg-primary-light"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <div className="lg:w-[35%] rounded-full">
              <img src={avatar} alt="avatar" className="w-full rounded-full" />
            </div>
            <p>Name</p>
            <img src={down} alt="down arrow" className="cursor-pointer" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
