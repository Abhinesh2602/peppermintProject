import leftArrow from "../assets/leftArrow.svg";
import line from "../assets/line.svg";

export const SettingDetails = () => {
  return (
    <div className="flex gap-6 mt-[3rem] mb-[3rem]  items-center">
      <div className="flex justify-center items-center gap-2">
        <img src={leftArrow} alt="" className="h-[0.7rem] " />
        <span className="text-base text-peppermint-400">Home</span>
      </div>
      <img src={line} alt="line" />
      <div className="font-normal text-2xl text-peppermint-100">Settings</div>
    </div>
  );
};
