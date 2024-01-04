import { winner_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of winner_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEngame = (newCheck) => {
  return newCheck.every((square) => square !== null);
};
