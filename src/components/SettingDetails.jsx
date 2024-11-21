import leftArrow from "../assets/leftArrow.svg";
import line from "../assets/line.svg";
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
      <div className=" flex justify-start gap-12 ">
        <SettingBtn btnText={"General"} selected={false} />
        <SettingBtn btnText={"Electronics"} selected={false} />
        <SettingBtn btnText={"Battery"} selected={false} />
        <SettingBtn btnText={"Obstacle Status"} selected={true} />
        <SettingBtn btnText={"Sensor Status"} selected={false} />
        <SettingBtn btnText={"USS Data"} selected={false} />
        <SettingBtn btnText={"Traction"} selected={false} />
      </div>
    </div>
  );
};
