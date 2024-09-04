import React, { useEffect, useState } from "react";
import { Step1, Step2, Step3, Step4 } from "./Steps";
import {
  BonusModeChoices,
  BonusModeGame,
  getRandomChoice,
  NormalModeChoices,
  NormalModeGame,
} from "../Gamefunc";
import PopSound from "../assets/pop.mp3";

type GameProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isWinner: boolean;
  setIsWinner: React.Dispatch<React.SetStateAction<boolean>>;
  choice: BonusModeChoices | NormalModeChoices | undefined;
  setChoice: React.Dispatch<
    React.SetStateAction<
      "rock" | "paper" | "scissors" | "lizard" | "spock" | undefined
    >
  >;
  isBonusMode: boolean;
  scoreCalculate: (isWinner: boolean) => void;
};

function Game({
  choice,
  isBonusMode,
  isWinner,
  setChoice,
  setIsWinner,
  setStep,
  step,
  scoreCalculate,
}: GameProps) {
  const [choiceColor, setChoiceColor] = useState<string>("");
  const [houseChoice, SetHouseChoice] = useState<
    BonusModeChoices | NormalModeChoices
  >("lizard");

  const ConcludeGame = () => {
    new Audio(PopSound).play();
    setStep(1);
    setChoice(undefined);
    setChoiceColor("");
    setIsWinner(false);
    scoreCalculate(isWinner);
  };

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => {
        setStep(3);
      }, 1500);

      return () => clearTimeout(timer); // Clean up timeout to avoid memory leaks
    }
  }, [step, setStep]);

  useEffect(() => {
    if (step === 3) {
      const houseChoice = getRandomChoice(isBonusMode);
      SetHouseChoice(houseChoice);

      if (isBonusMode) {
        setIsWinner(BonusModeGame(choice, houseChoice));
      } else {
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
          if (
            houseChoice === "rock" ||
            houseChoice === "paper" ||
            houseChoice === "scissors"
          ) {
            setIsWinner(NormalModeGame(choice, houseChoice));
          }
        }
      }

      setStep(4);
    }
  }, [step, isBonusMode, choice, setIsWinner, setStep]);

  useEffect(() => {
    setChoiceColor("");
  }, [isBonusMode]);

  // useEffect(() => {
  //   console.log(step);
  // }, [step]);

  return (
    <div className="mt-44">
      {step === 1 && (
        <Step1
          setChoice={setChoice}
          isBonusMode={isBonusMode}
          setStep={setStep}
          setChoiceColor={setChoiceColor}
          Choice={choice}
        />
      )}
      {step === 2 && <Step2 choice={choice} choiceColor={choiceColor} />}
      {step === 3 && (
        <Step3
          houseChoice={houseChoice}
          choice={choice}
          choiceColor={choiceColor}
        />
      )}
      {step === 4 && (
        <Step4
          houseChoice={houseChoice}
          isWinner={isWinner}
          choice={choice}
          choiceColor={choiceColor}
          ConcludeGame={ConcludeGame}
        />
      )}
    </div>
  );
}

export default Game;
