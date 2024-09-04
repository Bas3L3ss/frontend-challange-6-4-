import { BonusModeChoices, NormalModeChoices } from "../Gamefunc";

type ChoiceButtonProps = {
  color: string;
  Svg: React.ElementType;
  handleClick: (
    input: NormalModeChoices | BonusModeChoices,
    color: string
  ) => void;
  choiceName: BonusModeChoices;
  currentChoice: BonusModeChoices | NormalModeChoices | undefined;
};

function ChoiceButton({
  choiceName,
  color,
  Svg,
  currentChoice,
  handleClick,
}: ChoiceButtonProps) {
  return (
    <button
      id={`choiceButton-${choiceName}`}
      className={`${
        choiceName === currentChoice ? "bg-black" : `${color}`
      }  md:p-4 p-3 absolute rounded-full shadow-lg  `}
      onClick={() => handleClick(choiceName, color)}
    >
      <span className="flex items-center justify-center  md:w-[120px]  w-[80px] rounded-full aspect-square bg-white  shadow-lg">
        <Svg />
      </span>
    </button>
  );
}

export default ChoiceButton;
