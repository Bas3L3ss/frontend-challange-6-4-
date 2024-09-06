import { useEffect, useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import Modal from "./components/Modal";
import Game from "./components/Game";
import { BonusModeChoices, NormalModeChoices } from "./Gamefunc";
import FlipPaper from "./assets/paper-flip.mp3";
import {
  getScoreFromLocalStorage,
  saveScoreToLocalStorage,
} from "./ScoreFetch";

function App() {
  const [step, setStep] = useState<number>(1);
  const [score, setScore] = useState<number>(getScoreFromLocalStorage());
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [isBonusMode, setIsBonusMode] = useState<boolean>(false);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [choice, setChoice] = useState<
    BonusModeChoices | NormalModeChoices | undefined
  >(undefined);

  const scoreCalculate = (isWinner: boolean) => {
    let scoreCurrent = score;
    if (isWinner) {
      setScore(score + 1);
      scoreCurrent = score + 1;
    }
    saveScoreToLocalStorage(scoreCurrent);
  };

  useEffect(() => {
    setChoice(undefined);
    setStep(1);
  }, [isBonusMode]);

  useEffect(() => {
    new Audio(FlipPaper).play();
  }, [isModalOn, isBonusMode]);

  return (
    <div className="h-[100vh] w-[100vw] pt-5 md:pt-10 relative overflow-hidden  ">
      <h1 className="sr-only">Rock Paper Scissors</h1>
      <Modal
        isModalOn={isModalOn}
        setIsModalOn={setIsModalOn}
        isBonus={isBonusMode}
        setIsBonusMode={setIsBonusMode}
        score={score}
      />
      <div className="md:w-[65%] sm:w-[80%] w-[90%] mx-auto ">
        <ScoreBoard isBonus={isBonusMode} score={score} />
        <Game
          step={step}
          setStep={setStep}
          isWinner={isWinner}
          setIsWinner={setIsWinner}
          choice={choice}
          setChoice={setChoice}
          isBonusMode={isBonusMode}
          scoreCalculate={scoreCalculate}
        />
      </div>
      <button
        className=" md:z-50 fixed md:bottom-5 md:right-16   bottom-4 right-[50%] translate-x-[50%] text-neutral-200 font-bold border  px-6 rounded-md py-[0.2rem]"
        onClick={() => {
          new Audio();
          setIsModalOn(!isModalOn);
        }}
      >
        RULES
      </button>
    </div>
  );
}

export default App;
