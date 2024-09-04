import React from "react";
import IconClose from "../assets/images/icon-close";
import ImageRuleBonus from "../assets/images/image-rules-bonus";
import ImageRules from "../assets/images/image-rules";
import ImageRuleBonusMobile from "../assets/images/image-rules-bonus-mobile";
import ImageRulesMobile from "../assets/images/image-rules-mobile";
type ModalProps = {
  isModalOn: boolean;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  isBonus: boolean;
  setIsBonusMode: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
};
function Modal({
  isModalOn,
  setIsModalOn,
  setIsBonusMode,
  isBonus,
  score,
}: ModalProps) {
  if (isModalOn) {
    return (
      <div
        className={`   fixed md:absolute  
         w-full h-full md:bg-black/50 z-50  top-0 left-0`}
      >
        <div
          className={`md:block flex flex-col gap-[2rem] absolute  
             bg-white  md:top-[50%] h-full md:size-auto w-full md:left-[50%] rounded-md p-8 md:translate-x-[-50%] md:translate-y-[-50%]`}
        >
          <div className="flex justify-center mt-10 mb-5 md:mt-0 md:justify-between ">
            <p className="text-2xl font-bold uppercase text-neutral-darkText">
              Rules
            </p>
            <button
              className="hidden md:block"
              onClick={() => setIsModalOn(false)}
            >
              <IconClose />
            </button>
          </div>
          <div className="flex justify-center mb-7">
            {isBonus ? (
              <>
                <div className="hidden md:block">
                  <ImageRuleBonus />
                </div>
                <div className="block md:hidden">
                  <ImageRuleBonusMobile />
                </div>
              </>
            ) : (
              <>
                <div className="hidden md:block">
                  <ImageRules />
                </div>
                <div className="block md:hidden">
                  <ImageRulesMobile />
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center text-sm font-bold ">
            {score >= 10 && (
              <button
                onClick={() => {
                  setIsBonusMode(!isBonus);
                }}
              >
                {isBonus ? "Normal Mode" : "Bonus Mode"}
              </button>
            )}
          </div>
          <button
            className={`md:hidden absolute left-[50%] translate-x-[-50%] ${
              isBonus ? "bottom-8" : "bottom-5 "
            }`}
            onClick={() => setIsModalOn(false)}
          >
            <IconClose />
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
