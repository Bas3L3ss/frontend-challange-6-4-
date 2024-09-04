type RingsProps = {
  isWinner: boolean;
};

function Rings1({ isWinner }: RingsProps) {
  if (!isWinner) {
    return null;
  }
  return (
    <div className=" absolute translate-y-5 z-[-50] p-20 rounded-full md:size-96 size-72 aspect-square bg-slate-500/10 flex items-center justify-center">
      <div className="absolute rounded-full bg-slate-500/35 md:size-72 size-56"></div>
      <div className="absolute rounded-full bg-slate-500/40 md:size-56 size-36"></div>
    </div>
  );
}
function Rings2({ isWinner }: RingsProps) {
  if (isWinner) {
    return null;
  }
  return (
    <div className=" absolute translate-y-5 z-[-50] p-20 rounded-full md:size-96 size-72 aspect-square bg-slate-500/10 flex items-center justify-center">
      <div className="absolute rounded-full bg-slate-500/35 md:size-72 size-56"></div>
      <div className="absolute rounded-full bg-slate-500/40 md:size-56 size-36"></div>
    </div>
  );
}
function Rings3() {
  return (
    <div className=" absolute translate-y-5 z-[-50] p-20 rounded-full md:size-96 size-72 aspect-square bg-slate-500/10 flex items-center justify-center">
      <div className="absolute rounded-full bg-slate-500/35 md:size-72 size-56"></div>
      <div className="absolute rounded-full bg-slate-500/40 md:size-56 size-36"></div>
    </div>
  );
}

export { Rings1, Rings2, Rings3 };
