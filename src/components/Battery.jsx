const Battery = () => {
  return (
    <div className="mt-10 text-peppermint-500">
      {/* BatteryData */}
      <div>
        <span className="font-bold text-2xl ">Battery Data</span>

        <div className="flex flex-row gap-[6rem] justify-start">
          <div className="flex flex-col gap-2 mt-5 text-sm text-peppermint-200">
            <span>Battery voltage (V): 26.22</span>
            <span>Battery current (A): 3.51</span>
            <span>Battery state (Eq,cycles): 30.00</span>
          </div>

          <div className="flex flex-col gap-2 mt-5 text-sm text-peppermint-200">
            <span>Temperature (Co): 26o</span>
            <span>BMS Temperature (Co): 26o</span>
            <span>State of health: 26.22</span>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="w-full h-[0.07px] bg-peppermint-300/30 mt-10 "></div>

      {/* cellVoltages */}

      <div className="mt-5 w-full">
        <div>
          <span className="font-bold text-2xl ">Cell voltages</span>

          <div className="flex flex-row gap-[10rem] justify-start items-center">
            <div className="flex flex-col gap-2 mt-5 text-sm text-peppermint-200">
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
            </div>

            <div className="h-[100px] w-[1px] bg-peppermint-300/30 mt-10"></div>

            <div className="flex flex-col gap-2 mt-5 text-sm text-peppermint-200">
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
            </div>

            <div className="h-[100px] w-[1px] bg-peppermint-300/30 mt-10"></div>

            <div className="flex flex-col gap-2 mt-5 text-sm text-peppermint-200">
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
            </div>

            <div className="h-[100px] w-[1px] bg-peppermint-300/30 mt-10"></div>

            <div className="flex flex-col gap-2 mt-5 text-sm text-peppermint-200">
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
              <span>Cell 1: 3277.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battery;
