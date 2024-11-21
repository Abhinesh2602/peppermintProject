import SensorCard from "./SensorCard";

const Traction = () => {
  return (
    <div className="mt-10 flex flex-row w-[60%] justify-between">
      <div className="">
        <div className="text-2xl font-medium p-[1rem] box-content  text-peppermint-500">
          TractionInfo
        </div>
        <ul className="text-lg text-peppermint-500 flex flex-col gap-2  p-5">
          <li>Bus voltage (V)</li>
          <li>Motor current (A)</li>
          <li>Temperature (C)</li>
          <li>Accel (m/s2)</li>
          <li>Deccel (m/s2)</li>
        </ul>
      </div>
      <div className="flex gap-[3rem]">
        <div className="w-[15rem]">
          <div className="text-2xl font-medium p-[1rem] box-content rounded-t-lg text-peppermint-500 bg-peppermint-700 flex items-center gap-5">
            <SensorCard type={"traction"} />
            Left drive
          </div>
          <ul className="text-lg text-peppermint-500 flex flex-col gap-2 rounded-b-lg bg-peppermint-700/30 p-5">
            <li>26.04</li>
            <li>0.02</li>
            <li>34.10</li>
            <li>0.35</li>
            <li>0.50</li>
          </ul>
        </div>

        <div className="w-[15rem]">
          <div className="text-2xl font-medium p-[1rem] box-content rounded-t-lg text-peppermint-500 bg-peppermint-700 flex items-center gap-5">
            <SensorCard type={"traction"} />
            Right drive
          </div>
          <ul className="text-lg text-peppermint-500 flex flex-col gap-2 rounded-b-lg bg-peppermint-700/30 p-5">
            <li>26.30</li>
            <li>-0.02</li>
            <li>33.90</li>
            <li>0.35</li>
            <li>0.50</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Traction;
