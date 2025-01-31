const Loader = () => {
  return (
    <div className=" bg-neutral-950 text-green-500 font-mono text-sm rounded-md">
      {/* Animated Text */}
      <div className="inline-block whitespace-nowrap overflow-hidden  border-green-500 animate-[typeAndDelete_4s_steps(11)_infinite,blinkCursor_0.5s_step-end_infinite]">
        Loading...
      </div>
    </div>
  );
};
export default Loader;