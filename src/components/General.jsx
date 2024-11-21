const General = () => {
  return (
    <div className="mt-10 w-[60%] flex justify-between gap-auto">
      <div className="flex flex-col gap-0 text-peppermint-500">
        <span className="text-lg">Machine ID</span>
        <span className="text-2xl font-bold">SD0450202</span>
      </div>

      <div className="flex flex-col gap-0 text-peppermint-500/90">
        <span className="text-lg">Peppermint version</span>
        <span className="text-2xl font-bold">3.1.2</span>
      </div>

      <div className="flex flex-col gap-0 text-peppermint-500/90">
        <span className="text-lg">Peppermint skateboard version</span>
        <span className="text-2xl font-bold">5.4</span>
      </div>
    </div>
  );
};

export default General;
