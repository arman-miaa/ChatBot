

const ProgressGroup = ({icon}) => {
  return (
    <div className="flex items-center gap-4 bg-[#af3b3f3d] border border-[#e542473d] rounded-2xl p-6 py-10">
      <div className="bg-[#6a30323d] border-2 border-[#e542478a] rounded-2xl p-2">
        <img src={icon} alt="" className="w-8 h-8 object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <progress
          className="progress w-56 progress-red h-[10px]"
          value="100"
          max="100"
        ></progress>{" "}
        <progress
          className="progress w-36 bg-[#e5424775] h-[10px]"
          value="0"
          max="100"
        ></progress>{" "}
        <progress
          className="progress w-22 bg-[#e5424775] h-[10px]"
          value="0"
          max="100"
        ></progress>
      </div>
    </div>
  );
}

export default ProgressGroup