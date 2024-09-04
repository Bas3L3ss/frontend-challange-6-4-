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
  const isActive = choiceName === currentChoice;

  return (
    <button
      id={`choiceButton-${choiceName}`}
      className={`${
        isActive ? "bg-black" : `${color}`
      }  md:p-4 p-3 absolute rounded-full shadow-lg`}
      onClick={() => handleClick(choiceName, color)}
      aria-pressed={isActive} // Indicates the button's active state
      aria-label={`Choose ${choiceName}`} // Describes the button for screen readers
    >
      <span className="flex items-center justify-center  md:w-[120px]  w-[80px] rounded-full aspect-square bg-white  shadow-lg">
        <Svg />
      </span>
    </button>
  );
}

export default ChoiceButton;
