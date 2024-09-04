import Logo from "../assets/images/logo";
import LogoBonus from "../assets/images/logo-bonus";

type ScoreBoardProps = { isBonus: boolean; score: number };

function ScoreBoard({ isBonus, score }: ScoreBoardProps) {
  return (
    <div className="max-h-[140px]  border-[3px] rounded-lg border-neutral-headerOutline flex gap-[1rem] md:py-4 md:px-5 py-4 px-4 justify-between">
      <div className="flex items-center md:size-auto ">
        {isBonus ? <LogoBonus /> : <Logo />}
      </div>

      <div className="px-5 py-2 text-center rounded-md md:px-8 bg-neutral-50">
        <p className="font-bold uppercase text-neutral-scoreText ">score</p>
        <p className="text-4xl font-bold sm:text-5xl md:text-6xl text-neutral-headerOutline ">
          {score}
        </p>
      </div>
    </div>
  );
}

export default ScoreBoard;
