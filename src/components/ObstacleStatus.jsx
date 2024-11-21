const ObstacleStatus = () => {
  return (
    <div className="flex mt-10">
      <div className="w-[70%] flex flex-col gap-10">
        <span className="text-peppermint-500 text-lg">Sensors</span>
        <div className="flex gap-10">
          <SensorCard value={"Range"} />
          <SensorCard value={"Range"} />
          <SensorCard value={"Range"} />
        </div>
      </div>
      <div className="w-auto">
        <span className="text-peppermint-500 text-lg">Walls</span>
      </div>
    </div>
  );
};

const SensorCard = ({ value }) => {
  return (
    <div className="p-4 flex justify-start items-center font-bold bg-peppermint-600 rounded-lg text-peppermint-500 gap-2">
      <div>light</div>
      <span>{value}</span>
    </div>
  );
};

export default ObstacleStatus;
