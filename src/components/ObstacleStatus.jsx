import verticalLine from "../assets/verticalLine.svg";
import wallvisualisation from "../assets/wallvisualisation.png";
import SensorCard from "./SensorCard";

const ObstacleStatus = () => {
  return (
    <div className="flex mt-10">
      <div className="w-[70%] flex flex-col gap-10">
        <span className="text-peppermint-500 text-lg">Sensors</span>
        <div className="grid grid-cols-3 gap-[1rem] pr-[2rem]">
          <SensorCard value={"Range"} />
          <SensorCard value={"Camera"} />
          <SensorCard value={"USS"} />
          <SensorCard value={"Cliff Lider"} />
          <SensorCard value={"Bottom Lider"} />
          <SensorCard value={"3D Lider"} />
          <SensorCard value={"Virtual Wall"} />
        </div>
      </div>
      <img src={verticalLine} alt="" />
      <div className="w-[30%] pl-8 relative">
        <span className="text-peppermint-500 text-lg ">Walls</span>
        <div className="flex flex-col justify-center mt-10 ">
          <span className="absolute text-lg font-bold text-peppermint-500 top-8 right-[51%]">
            FRONT
          </span>
          <span className="absolute text-lg font-bold text-peppermint-500 left-10 bottom-0">
            LEFT
          </span>
          <span className="absolute text-lg font-bold text-peppermint-500 right-24 bottom-0">
            RIGHT
          </span>
          <img src={wallvisualisation} alt="" className="w-[20rem]" />
        </div>
      </div>
    </div>
  );
};

export default ObstacleStatus;
