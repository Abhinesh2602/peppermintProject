import { useContext } from "react";
import { PeppermintContext } from "../PepperMintContext";

const SettingBtn = ({ btnText }) => {
  const { handleClick, activeComponent } = useContext(PeppermintContext);
  const isActive = activeComponent === btnText;

  return (
    <button
      className={`py-3 px-4 rounded-lg font-medium ${
        isActive
          ? "bg-peppermint-700 text-peppermint-500/70"
          : "border-2 border-peppermint-400 text-peppermint-400"
      }`}
      onClick={() => handleClick(btnText)}
    >
      {btnText}
    </button>
  );
};
export default SettingBtn;
