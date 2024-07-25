import Heading from "../../Heading";
import toc1 from "../../../assets/toc1.png";
import toc2 from "../../../assets/toc2.png";
import teacher from "../../../assets/teacher.png";
import bigCircle from "../../../assets/bigCircle.png";
import smallCircle from "../../../assets/smallCircle.png";
import topReactangle from "../../../assets/topReactangle.png";
import bottomReactangle from "../../../assets/bottomReactangle.png";
const Totc = () => {
  return (
    <section className="container m-auto p-4 text-center">
      <Heading
        beforeText="What is"
        afterText="TOTC?"
        detail="TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
      />
      <div className="flex items-center justify-center gap-12 my-12 relative text-white">
        <div className="w-[30%]">
          <img src={toc1} alt="TOTC Illustration" className="w-full" />
          <div className="absolute bg-overlay top-0 h-full w-[30%] flex items-center justify-center">
            <div>
              <p className="font-bold text-2xl">FOR INSTRUCTORS</p>
              <button className="px-8 py-4 border rounded-full mt-4">
                Start a class today
              </button>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <img src={toc2} alt="TOTC Illustration" className="w-full" />
          <div className="absolute bg-overlay top-0 h-full w-[30%] flex items-center justify-center">
            <div>
              <p className="font-bold text-2xl">FOR STUDENTS</p>
              <button className="px-8 py-4 bg-primary rounded-full mt-4">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-12 pt-12">
        <div className="flex flex-col  w-[40%] text-left relative">
          <img
            src={bigCircle}
            alt="big circle"
            className="absolute w-[10%] -left-6 -top-3 z-0"
          />
          <img
            src={smallCircle}
            alt="big circle"
            className="absolute  z-0 right-36 bottom-10"
          />
          <div className="z-10">
            <h2 className="text-3xl font-bold text-text-blue">
              Everything you can do in a physical classroom,
              <span className="text-calanderbg"> you can do with TOTC</span>
            </h2>
            <p className="text-xl my-6 text-text-color m-auto">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
          </div>
          <p className="underline text-text-color">learn more</p>
        </div>
        <div className=" w-[30%] relative">
          <img
            src={topReactangle}
            alt="top rectangle"
            className="absolute z-0 -top-6 -left-6 w-[30%]"
          />
          <div className="absolute top-0 z-10">
            <img
              src={teacher}
              alt="teacher teaching the class"
              className="w-full  "
            />
          </div>
          <img
            src={bottomReactangle}
            alt="bottom rectangle"
            className="absolute z-0 -bottom-24 -right-6 w-[30%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Totc;
