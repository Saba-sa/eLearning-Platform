const Heading = ({ beforeText = "", afterText = "", detail = "" }) => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-text-blue">
        {beforeText}
        <span className="text-calanderbg"> {afterText}</span>
      </h2>
      <p className="text-xl my-6 text-text-color w-[50%] m-auto">{detail}</p>
    </div>
  );
};

export default Heading;
