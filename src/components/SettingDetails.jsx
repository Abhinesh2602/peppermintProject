import leftArrow from "../assets/leftArrow.svg";
import line from "../assets/line.svg";
import bottomLine from "../assets/bottomLine.svg";
import SettingBtn from "./SettingBtn";

export const SettingDetails = () => {
  return (
    <div>
      <div className="flex gap-6 mt-[4rem] mb-[3rem]  items-center">
        <div className="flex justify-center items-center gap-2">
          <img src={leftArrow} alt="" className="h-[0.7rem] " />
          <span className="text-base text-peppermint-400">Home</span>
        </div>
        <img src={line} alt="line" />
        <div className="font-normal text-2xl text-peppermint-100">Settings</div>
      </div>
      <div className=" flex justify-start gap-8 ">
        <SettingBtn btnText={"General"} />
        <SettingBtn btnText={"Electronics"} />
        <SettingBtn btnText={"Battery"} />
        <SettingBtn btnText={"Obstacle Status"} />
        <SettingBtn btnText={"Sensor Status"} />
        <SettingBtn btnText={"USS Data"} />
        <SettingBtn btnText={"Traction"} />
      </div>
      <img src={bottomLine} alt="" className="mt-6" />
    </div>
  );
};
