import Heading from "../../Heading";
import feature1 from "../../../assets/feature1.png";
import feature2 from "../../../assets/feature2.png";
import feature3 from "../../../assets/feature3.png";
import feature4 from "../../../assets/feature4.png";
import feature5 from "../../../assets/feature5.png";
import menu from "../../../assets/menu.png";
import users from "../../../assets/users.png";
import copy from "../../../assets/copy.png";
const Features = () => {
  return (
    <section className="container m-auto text-center my-36">
      <Heading
        beforeText="Our "
        afterText="Features"
        detail=" This very extraordinary feature, can make learning activities more efficient"
      />
      <div className="flex justify-center items-center gap-8 px-20">
        <div className="w-[60%]">
          <div className="w-full">
            <img src={feature1} alt="feature 1" />
          </div>
        </div>
        <div className="text-left w-[35%]">
          <h2 className="text-4xl font-bold text-text-blue mb-14">
            A<span className="text-calanderbg"> user interface </span>
            designed for the classroom
          </h2>
          <ul className="flex flex-col gap-8 text-lg text-subgray ">
            <li className="flex items-center gap-6 ">
              <div className="shadow-xl p-4 rounded-full">
                <img src={menu} alt="menu icon" />
              </div>
              <p>
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </li>
            <li className="flex items-center gap-6">
              <div className="shadow-xl p-4 rounded-full">
                <img src={copy} alt="copy icon" />
              </div>
              <p>TA’s and presenters can be moved to the front of the class.</p>
            </li>
            <li className="flex items-center gap-6">
              <div className="shadow-xl p-4 rounded-full">
                <img src={users} alt="users icon" />
              </div>
              <p>
                Teachers can easily see all students and class data at one time.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center gap-8 px-20">
        <div className="text-left w-[30%] pl-16">
          <h2 className="text-4xl font-bold text-text-blue mb-6">
            <span className="text-calanderbg">Tools </span>
            For Teachers And Learners
          </h2>
          <p className="text-lg text-subgray">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>
        <div className="w-[40%]">
          <div className="w-full">
            <img src={feature2} alt="feature 1" />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly gap-24 items-center px-20">
        <div className="w-[55%] pl-12">
          <div className="w-full align-self-end">
            <img src={feature3} alt="feature 1" />
          </div>
        </div>
        <div className="text-left w-[30%]">
          <h2 className="text-4xl font-bold text-text-blue mb-14">
            One-on-One
            <span className="text-calanderbg"> Discussions </span>
          </h2>
          <p className="text-lg text-subgray">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly gap-24 items-center px-20">
        <div className="text-left w-[30%]">
          <h2 className="text-4xl font-bold text-text-blue mb-14">
            <span className="text-calanderbg"> Class Management </span>
            Tools for Educators
          </h2>
          <p className="text-lg text-subgray">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>
        <div className="w-[55%] pl-12">
          <div className="w-full align-self-end">
            <img src={feature4} alt="feature 1" />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly gap-24 items-center px-20 mt-12">
        <div className="w-[55%] pl-12">
          <div className="w-full align-self-end">
            <img src={feature5} alt="feature 1" />
          </div>
        </div>
        <div className="text-left w-[30%]">
          <h2 className="text-4xl font-bold text-text-blue mb-14">
            One-on-One
            <span className="text-calanderbg"> Discussions </span>
          </h2>
          <p className="text-lg text-subgray">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>
      <div className="my-20">
        <button className="px-6 py-4 border-2 rounded-full   border-primary text-primary font-bold">
          See more features
        </button>
      </div>
    </section>
  );
};

export default Features;
