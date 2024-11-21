import peppermintLogo from "../assets/peppermintLogo.svg";
import battery from "../assets/battery.svg";
import caution from "../assets/caution.svg";
import languages from "../assets/languages.svg";
import settings from "../assets/settings.svg";
import line from "../assets/line.svg";
import useCurrentTime from "../CustomHooks/useTime";

const Navbar = () => {
  const time = useCurrentTime();
  return (
    <div className="h-14 flex justify-between items-end ">
      <img src={peppermintLogo} alt="" className="h-[2.3rem]" />

      <div className="flex items-center justify-center gap-[5rem]">
        <div className="flex justify-between gap-4">
          <div className="text-peppermint-200 flex gap-2 items-center justify-center ">
            <img src={caution} alt="h-8" />
            <span>Errors</span>
          </div>
          <img src={line} alt="" />
          <div className="text-peppermint-200 flex gap-2 items-center justify-center">
            <img src={languages} alt="h-8" />
            <span>Languages</span>
          </div>
          <img src={line} alt="" />
          <div className="text-peppermint-100 flex gap-2 items-center justify-center ">
            <img src={settings} alt="h-8" />
            <span>Settings</span>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="  text-peppermint-200 flex gap-2 items-center justify-center ">
            <img src={battery} />
            <span className="font-bold">98%</span>
          </div>
          <div className="text-peppermint-200 text-sm">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
