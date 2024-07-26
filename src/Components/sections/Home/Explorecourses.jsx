import Heading from "../../Heading";
import { data } from "../../../data/Courses";
import { useState } from "react";

const Explorecourses = () => {
  const [getcourses, setgetcourses] = useState(6);
  const courses = data.slice(0, getcourses);
  console.log(getcourses, courses);
  const Bringmore = () => {
    if (data.length - getcourses !== 2) {
      setgetcourses(getcourses + 6);
    } else {
      setgetcourses(getcourses + 2);
    }
  };
  return (
    <section className="bg-gray-100 py-20">
      <div className="container m-auto px-8 text-center">
        <Heading
          beforeText="See what you can learn with"
          afterText="Coursera"
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col items-center gap-6 h-96 w-[30%] bg-primary-light p-8 rounded-lg text-left"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-4 text-left">
                <div className="flex items-center justify-center bg-gray-400 p-2 rounded-xl w-[10%] h-10 overflow-hidden">
                  <img
                    src={course.companey}
                    alt="Company Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{course.title}</h3>
              </div>
              <p className="font-bold text-left">
                level: <span className="font-semibold">{course.level}</span>
              </p>
            </div>
          ))}
        </div>
        {getcourses === data.length ? (
          <button
            className="bg-subgray text-white my-8 py-4 px-8 rounded-lg"
            onClick={Bringmore}
          >
            All courses are shown
          </button>
        ) : (
          <button
            className="bg-primary text-white my-8 py-4 px-8 rounded-lg"
            onClick={Bringmore}
          >
            View 6 more
          </button>
        )}
      </div>
    </section>
  );
};

export default Explorecourses;
