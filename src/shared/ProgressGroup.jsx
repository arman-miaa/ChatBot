

const ProgressGroup = ({ icon }) => {
  return (
    <div className="flex items-center gap-4 bg-[#af3b3f3d] border border-[#e5424723] rounded-2xl p-6 py-10 w-full">
      <div className="bg-[#6a30323d] border-2 border-[#e5424761] rounded-2xl p-2 shrink-0">
        <img src={icon} alt="" className="w-8 h-8 object-cover" />
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        {/* First progress bar: full width */}
        <progress
          className="progress w-full progress-red md:h-[10px]"
          value="100"
          max="100"
        ></progress>
        {/* Second and third: fixed or percentage widths */}
        <progress
          className="progress w-1/2 bg-[#e5424775] md:h-[10px]"
          value="0"
          max="100"
        ></progress>
        <progress
          className="progress w-1/3 bg-[#e5424775] md:h-[10px]"
          value="0"
          max="100"
        ></progress>
      </div>
    </div>
  );
};


export default ProgressGroup