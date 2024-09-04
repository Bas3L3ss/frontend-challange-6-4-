export type NormalModeChoices = "rock" | "paper" | "scissors";
export type BonusModeChoices =
  | "rock"
  | "paper"
  | "scissors"
  | "lizard"
  | "spock";

const normalChoices: NormalModeChoices[] = ["rock", "paper", "scissors"];
const bonusChoices: BonusModeChoices[] = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock",
];

export const getRandomChoice = (
  isBonus: boolean
): BonusModeChoices | NormalModeChoices => {
  if (!isBonus) {
    return normalChoices[Math.floor(Math.random() * normalChoices.length)];
  } else {
    return bonusChoices[Math.floor(Math.random() * bonusChoices.length)];
  }
};

export const NormalModeGame = (
  player1: NormalModeChoices | undefined,
  player2: NormalModeChoices
): boolean => {
  if (player1 === undefined) return false;
  if (player1 === player2) return false; // Draw

  const outcomes: Record<NormalModeChoices, NormalModeChoices> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return outcomes[player1] === player2;
};

export const BonusModeGame = (
  player1: BonusModeChoices | undefined,
  player2: BonusModeChoices
): boolean => {
  if (player1 === undefined) return false;
  if (player1 === player2) return false;

  const outcomes: Record<BonusModeChoices, BonusModeChoices[]> = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  return outcomes[player1].includes(player2);
};
