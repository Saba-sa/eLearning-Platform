import cloud1 from "../../assets/file.png";
import cloud2 from "../../assets/calander.png";
import cloud3 from "../../assets/people.png";
const Cloudproperties = () => {
  const data = [
    {
      id: 1,
      image: cloud1,
      text: "Online Billing, Invoicing, & Contracts",
      color: "filebg",
      detail:
        "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    },
    {
      id: 2,
      image: cloud2,
      text: "Easy Scheduling & Attendance Tracking",
      color: "calanderbg",
      detail:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      id: 3,
      image: cloud3,
      color: "peoplebg",
      text: "Customer Tracking",
      detail:
        "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
    },
  ];

  return (
    <section className="container my-28 m-auto px-8 text-center ">
      <div>
        <h2 className="text-3xl font-bold text-text-blue">
          All-In-One <span className="text-calanderbg">Cloud Software</span>
        </h2>
        <p className="text-xl my-6 text-text-color w-[50%] m-auto">
          We provide comprehensive cloud solutions tailored to your specific
          needstions tailored to your specific needstions tailored to your
          specific needs.
        </p>
      </div>
      <div className="flex text-center gap-8  mt-20  justify-center">
        {data.map((item) => {
          const { id, image, text, detail, color } = item;
          return (
            <div
              key={id}
              className="shadow-2xl p-8 flex flex-col items-center gap-4 rounded-xl relative pt-20 w-[30%]"
            >
              <div
                className={`absolute -top-9 ${
                  color === "filebg"
                    ? "bg-filebg"
                    : color === "calanderbg"
                    ? "bg-calanderbg"
                    : "bg-peoplebg"
                } rounded-full  flex items-center  w-[60px] justify-center p-3 py-5`}
              >
                <img src={image} alt={text} className="w-[80%]" />
              </div>
              <h3 className="text-text-blue text-2xl font-semibold">{text}</h3>
              <p>{detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cloudproperties;
