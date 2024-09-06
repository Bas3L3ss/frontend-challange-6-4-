import { useEffect, useState } from "react";
import BgPentagon from "../assets/images/bg-pentagon";
import BgTriangle from "../assets/images/bg-triangle";
import IconPaper from "../assets/images/icon-paper";
import IconRock from "../assets/images/icon-rock";
import IconScissors from "../assets/images/icon-scissors";
import { BonusModeChoices, NormalModeChoices } from "../Gamefunc";
import ChoiceButton from "./ChoiceButton";
import IconLizard from "../assets/images/icon-lizard";
import IconSpock from "../assets/images/icon-spock";
import { Rings1, Rings2, Rings3 } from "./Rings";
import PopSound from "../assets/pop.mp3";

type Step1Props = {
  isBonusMode: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setChoice: React.Dispatch<
    React.SetStateAction<
      "rock" | "paper" | "scissors" | "lizard" | "spock" | undefined
    >
  >;
  Choice: "rock" | "paper" | "scissors" | "lizard" | "spock" | undefined;
  setChoiceColor: React.Dispatch<React.SetStateAction<string>>;
};
type Step2Props = {
  choice: BonusModeChoices | undefined | NormalModeChoices;
  choiceColor: string;
};
type Step3Props = {
  choice: BonusModeChoices | undefined | NormalModeChoices;
  choiceColor: string;
  houseChoice: "rock" | "paper" | "scissors" | "lizard" | "spock";
};
type Step4Props = {
  isWinner: boolean;
  choice: BonusModeChoices | undefined | NormalModeChoices;
  choiceColor: string;
  houseChoice: "rock" | "paper" | "scissors" | "lizard" | "spock";
  ConcludeGame: () => void;
};

function Step1({
  isBonusMode,
  setChoice,
  setStep,
  Choice,
  setChoiceColor,
}: Step1Props) {
  const [isConfirmable, setIsConfirmable] = useState<boolean>(false);

  const handleClick = (
    input: NormalModeChoices | BonusModeChoices,
    color: string
  ) => {
    new Audio(PopSound).play();
    if (Choice !== input) {
      setChoice(input);
      setChoiceColor(color);
    } else {
      setChoice(undefined);
      setChoiceColor("");
    }
  };

  const proceed = () => {
    new Audio(PopSound).play();

    setStep(2);
  };

  useEffect(() => {
    if (Choice != undefined) {
      setIsConfirmable(true);
    } else {
      setIsConfirmable(false);
    }
  }, [Choice]);

  if (isBonusMode) {
    return (
      <div className="relative md:-mt-[5rem] -mt-[7rem] md:w-[550px] w-[330px] mx-auto ">
        <div className="absolute md:top-[2rem] top-[4rem]  md:right-[12rem] right-[5.5rem]">
          <ChoiceButton
            Svg={IconPaper}
            color=" bg-primary-paperStart"
            handleClick={handleClick}
            choiceName="paper"
            currentChoice={Choice}
          />
        </div>
        <div className="absolute md:top-[2rem] top-[4rem] md:left-[4rem] -left-4">
          <ChoiceButton
            Svg={IconSpock}
            color=" bg-primary-cyanStart"
            handleClick={handleClick}
            choiceName="spock"
            currentChoice={Choice}
          />
        </div>
        <div className="absolute md:-top-[5rem] -top-[3rem] md:left-[13rem] left-[8rem]  ">
          <ChoiceButton
            Svg={IconScissors}
            color=" bg-primary-scissorsStart"
            handleClick={handleClick}
            choiceName="scissors"
            currentChoice={Choice}
          />
        </div>
        <div className="absolute md:bottom-[5rem] bottom-[4rem] md:right-[15rem] right-[8rem]">
          <ChoiceButton
            Svg={IconRock}
            color=" bg-primary-rockStart"
            handleClick={handleClick}
            choiceName="rock"
            currentChoice={Choice}
          />
        </div>
        <div className="absolute md:bottom-[5rem] bottom-[4rem] md:left-[7rem] left-[1rem]">
          <ChoiceButton
            Svg={IconLizard}
            color=" bg-primary-lizardStart"
            handleClick={handleClick}
            choiceName="lizard"
            currentChoice={Choice}
          />
        </div>

        <div className="flex justify-center ">
          <BgPentagon />
        </div>
        <button
          className={`${
            isConfirmable ? "absolute" : "hidden"
          }  left-[50%] translate-x-[-40%]  top-[9rem] rounded-md font-semibold uppercase bg-white p-2`}
          onClick={proceed}
        >
          confirm
        </button>
      </div>
    );
  } else {
    return (
      <div className="relative w-[350px]  -mt-[10px] mx-auto ">
        <div className="absolute -top-[4rem]">
          <ChoiceButton
            Svg={IconPaper}
            color="bg-primary-paperStart"
            handleClick={handleClick}
            choiceName="paper"
            currentChoice={Choice}
          />
        </div>

        <div className="absolute bottom-[5.5rem] md:left-[6rem] left-[7rem]">
          <ChoiceButton
            Svg={IconRock}
            color="bg-primary-rockStart"
            handleClick={handleClick}
            choiceName="rock"
            currentChoice={Choice}
          />
        </div>
        <div className="absolute   right-[8rem]  -top-[4rem] ">
          <ChoiceButton
            Svg={IconScissors}
            color="bg-primary-scissorsStart"
            handleClick={handleClick}
            choiceName="scissors"
            currentChoice={Choice}
          />
        </div>
        <div className="flex justify-center ">
          <BgTriangle />
        </div>
        <button
          className={`${
            isConfirmable ? "absolute" : "hidden"
          }  left-[50%] translate-x-[-50%] -top-[8rem] rounded-md font-semibold uppercase bg-white py-2 px-4`}
          onClick={proceed}
        >
          confirm
        </button>
      </div>
    );
  }
}
function Step2({ choice, choiceColor }: Step2Props) {
  return (
    <div className="relative grid justify-between grid-cols-2 -mt-24 ">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-5 font-bold text-white uppercase">You picked</p>
        <div
          className={`  ${choiceColor}  md:p-4 p-3  rounded-full shadow-lg w-fit`}
        >
          <div className="flex items-center justify-center  md:w-[120px] w-[80px] rounded-full aspect-square bg-white  shadow-lg">
            {(choice == "lizard" && <IconLizard />) ||
              (choice == "rock" && <IconRock />) ||
              (choice == "scissors" && <IconScissors />) ||
              (choice == "spock" && <IconSpock />) ||
              (choice == "paper" && <IconPaper />)}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="mb-5 font-bold text-white uppercase">the house picked</p>
        <div
          className={`  bg-neutral-darkText  md:p-4 p-3  rounded-full shadow-lg w-fit`}
        >
          <div className="flex items-center justify-center  md:w-[120px] w-[80px] rounded-full aspect-square bg-neutral-darkText  shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}
function Step3({ choice, choiceColor, houseChoice }: Step3Props) {
  return (
    <div className="relative grid justify-between grid-cols-2 -mt-24 ">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-5 font-bold text-white uppercase">You picked</p>
        <div
          className={`  ${choiceColor}  md:p-4 p-3  rounded-full shadow-lg w-fit`}
        >
          <div className="flex items-center justify-center  md:w-[120px] w-[80px] rounded-full aspect-square bg-white  shadow-lg">
            {(choice == "lizard" && <IconLizard />) ||
              (choice == "rock" && <IconRock />) ||
              (choice == "scissors" && <IconScissors />) ||
              (choice == "spock" && <IconSpock />) ||
              (choice == "paper" && <IconPaper />)}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="mb-5 font-bold text-white uppercase">the house picked</p>
        <div
          className={`  ${choiceColor}  md:p-4 p-3  rounded-full shadow-lg w-fit`}
        >
          <div className="flex items-center justify-center  md:w-[120px] w-[80px] rounded-full aspect-square bg-white  shadow-lg">
            {(houseChoice == "lizard" && <IconLizard />) ||
              (houseChoice == "rock" && <IconRock />) ||
              (houseChoice == "scissors" && <IconScissors />) ||
              (houseChoice == "spock" && <IconSpock />) ||
              (houseChoice == "paper" && <IconPaper />)}
          </div>
        </div>
      </div>
    </div>
  );
}
function Step4({
  isWinner,
  houseChoice,
  choice,
  choiceColor,
  ConcludeGame,
}: Step4Props) {
  let resultText = isWinner ? "You Win" : "You Lose";
  resultText = choice === houseChoice ? "draw" : resultText;

  return (
    <>
      <div className="relative grid justify-between grid-cols-2 -mt-24 ">
        <div className="absolute left-[50%]  translate-x-[-50%]  top-[50%] text-center  w-max">
          <p className="hidden mb-4 text-5xl font-bold text-white uppercase md:block ">
            {resultText}
          </p>
          <button
            className="hidden p-2 font-bold uppercase bg-white rounded-md md:inline"
            onClick={ConcludeGame}
          >
            Play Again
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-5 font-bold text-white uppercase">You picked</p>
          <Rings1 isWinner={isWinner} />
          {choice === houseChoice && <Rings3 />}

          <div
            className={`  ${choiceColor} md:p-4 p-3  rounded-full shadow-lg w-fit`}
          >
            <div className="flex items-center justify-center  md:w-[120px] w-[80px] rounded-full aspect-square bg-white  shadow-lg">
              {(choice == "lizard" && <IconLizard />) ||
                (choice == "rock" && <IconRock />) ||
                (choice == "scissors" && <IconScissors />) ||
                (choice == "spock" && <IconSpock />) ||
                (choice == "paper" && <IconPaper />)}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {choice !== houseChoice && <Rings2 isWinner={isWinner} />}
          {choice === houseChoice && <Rings3 />}
          <p className="mb-5 font-bold text-white uppercase">
            the house picked
          </p>
          <div
            className={`  ${
              (houseChoice == "lizard" && "bg-primary-lizardStart") ||
              (houseChoice == "rock" && "bg-primary-rockStart") ||
              (houseChoice == "scissors" && "bg-primary-scissorsStart") ||
              (houseChoice == "spock" && "bg-primary-cyanStart") ||
              (houseChoice == "paper" && " bg-primary-paperStart")
            } md:p-4 p-3   rounded-full shadow-lg w-fit`}
          >
            <div className="flex items-center justify-center  md:w-[120px] w-[80px] rounded-full aspect-square bg-white  shadow-lg">
              {(houseChoice == "lizard" && <IconLizard />) ||
                (houseChoice == "rock" && <IconRock />) ||
                (houseChoice == "scissors" && <IconScissors />) ||
                (houseChoice == "spock" && <IconSpock />) ||
                (houseChoice == "paper" && <IconPaper />)}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden mx-auto translate-x-[2%] text-center mt-14 w-max">
        <p className="flex mb-4 text-5xl font-bold text-white uppercase ">
          {resultText}
        </p>
        <button
          className="p-2 font-bold uppercase bg-white rounded-md"
          onClick={ConcludeGame}
        >
          Play Again
        </button>
      </div>
    </>
  );
}

export { Step1, Step2, Step3, Step4 };
