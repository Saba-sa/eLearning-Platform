import playicon from "../../../assets/playicon.png";
import heroImage from "../../../assets/heroImage.png";
const Hero = () => {
  return (
    <div className=" relative bg-primary -top-[100px] overflow-hidden">
      <div className="container m-auto h-[80vh] w-full overflow-hidden">
        <div className="flex items-center justify-between gap-8 h-full">
          <div className="w-[45%] space-y-6 text-white px-6">
            <h1 className="text-6xl font-semibold">
              <span className="text-orange">Studying</span> Online is now much
              easier
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              necessitatibus ratione rerum fuga nisi id quis quas harum illum
              atque!
            </p>
            <div className="flex items-center gap-4">
              <button className="py-2 px-6 bg-primary-light rounded-full">
                Join for free
              </button>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-full p-4 flex items-center justify-center">
                  <img src={playicon} alt="play icon" className="w-[80%]" />
                </div>
                <p className="text-black"> Watch how it works</p>
              </div>
            </div>
          </div>
          <div className="w-[60%]  flex items-center justify-center overflow-hidden ">
            <img
              src={heroImage}
              alt="hero image"
              className=" absolute bottom-0"
            />
          </div>
        </div>
      </div>
      <div className=" custom-shape-divider-bottom-1721660372 z-10 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
