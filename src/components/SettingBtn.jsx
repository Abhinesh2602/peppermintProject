const SettingBtn = ({ btnText, selected }) => {
  if (selected) {
    return (
      <button className="py-3 px-4 bg-peppermint-400  rounded-lg text-peppermint-500/70 font-medium">
        {btnText}
      </button>
    );
  }

  return (
    <button className="py-3 px-4 border-2 border-peppermint-400  rounded-lg text-peppermint-400">
      {btnText}
    </button>
  );
};

export default SettingBtn;
