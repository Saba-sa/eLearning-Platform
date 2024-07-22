import temp from "../assets/Vector (1).png";
const Herominibanner = ({
  imageName = temp,
  imageColor = "#FFFFFF",
  bannerHeading = "Lorem, ipsum dolor",
  bannerDetail = "Lorem ipsum dolor sit amet consectetur adip",
}) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-white/50 rounded-lg shadow-lg backdrop-blur-sm border border-white/30">
      <div className={`bg-${imageColor} rounded-md`}>
        <img src={imageName} alt="" />
      </div>
      <div className="flex flex-col">
        <p>{bannerHeading}</p>
        <p>{bannerDetail}</p>
      </div>
    </div>
  );
};

export default Herominibanner;
