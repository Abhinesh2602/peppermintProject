const SensorCard = ({ type, value }) => {
  if (type === "traction") {
    return (
      <div
        className={`
            w-[8px] h-[28px] 
            rounded-full
            bg-[#8AFE53]
            relative
            before:absolute 
            before:inset-0
            before:rounded-full
            before:shadow-[0_0_8px_2px_#8AFE53]
            before:content-['']
          `}
      ></div>
    );
  }

  return (
    <div className="relative p-4 w-[full] flex justify-start items-center font-bold bg-peppermint-600 rounded-lg text-peppermint-500 gap-6">
      <div
        className={`
            w-[8px] h-[28px] 
            rounded-full
            bg-[#8AFE53]
            relative
            before:absolute 
            before:inset-0
            before:rounded-full
            before:shadow-[0_0_8px_2px_#8AFE53]
            before:content-['']
          `}
      ></div>
      <div>{value}</div>
    </div>
  );
};

export default SensorCard;
