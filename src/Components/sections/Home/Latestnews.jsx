import Heading from "../../Heading";
import image1 from "../../../assets/Rectangle 32.png";
import image2 from "../../../assets/Rectangle 33.png";
import image3 from "../../../assets/Rectangle 34.png";
import image4 from "../../../assets/Rectangle 37.png";

const Latestnews = () => {
  return (
    <section className="container m-auto my-48 text-center">
      <Heading
        beforeText="Lastest News and Resources"
        detail="See the developments that have occurred to TOTC in the world"
      />
      <div className="flex justify-center items-start text-left text-text-color gap-12 w-[80%] m-auto">
        <div className="w-[50%]">
          <img src={image1} alt="" className="w-full my-6" />
          <p className="text-white bg-primary rounded-full w-[15%]  flex items-center justify-center font-semibold py-2 ">
            NEWS
          </p>
          <h4 className="text-4xl text-black my-6">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h4>
          <p className="text-xl my-6">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <span className="underline ">Read More</span>
        </div>
        <div className="flex flex-col w-[50%]">
          <div className="flex gap-4 items-center justify-center">
            <img src={image2} alt="" className="w-full my-6" />
            <div>
              {" "}
              <h4 className="text-xl text-black ">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h4>
              <p className="text-sm my-2">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <img src={image3} alt="" className="w-full my-6" />
            <div>
              {" "}
              <h4 className="text-xl text-black ">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h4>
              <p className="text-sm my-2">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <img src={image4} alt="" className="w-full my-6" />
            <div>
              {" "}
              <h4 className="text-xl text-black ">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h4>
              <p className="text-sm my-2">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latestnews;
