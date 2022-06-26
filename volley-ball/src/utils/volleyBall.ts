// Three variables are key to this program - isPoint, isSetFinished, isVictory
// - isPoint captures if a team won a point
// - isSetFinished checks to see if a set is complete
// - isVictory checks to see if a team has sufficient sets to win a game
// Whether or not a team wins the point depends on a random number and the input probability for the team (see lines 89 to 92)


export default function volleyBall(prob1: number, prob2: number) {
  let listScores = ["0-0"], // Array of strings that will be displayed at the end of the game
    listOfSets: number[][] = [], // Collection of arrays that represent the points for each set that has ended
    currentSet = [0, 0], // Array that represent the score of the current set being played
    team1Serves = true; // Boolean to keep track of which team is serving

  while (!isVictory(listOfSets)) {    // Loop runs for each set

    team1Serves = listOfSets.length % 2 === 0 ? true : false;
    const setString = listOfSets.map((el) => el.join("-"));   // Used at the end of the while loop below

    while (!isSetFinished(currentSet, listOfSets.length)) {   // Loop runs for each point 
      const pointTeam1 = currentSet[0];
      const pointTeam2 = currentSet[1];
      if (team1Serves) {
        if (isPoint(prob1)) {
          currentSet = [pointTeam1 + 1, pointTeam2];
          team1Serves = true;
        } else {
          currentSet = [pointTeam1, pointTeam2 + 1];
          team1Serves = false;
        }
      } else {
        if (isPoint(prob2)) {
          currentSet = [pointTeam1, pointTeam2 + 1];
          team1Serves = false;
        } else {
          currentSet = [pointTeam1 + 1, pointTeam2];
          team1Serves = true;
        }
      }
      listScores.push([setString.join(" "), currentSet.join("-")].join(" "));   // Updates the "score" array after each point

    }
    listOfSets.push(currentSet);    // Updates the "listOfSets" array after each set
    currentSet = [0, 0];
  }

  return listScores;
}


export function isVictory(listOfSets: Array<number[]>) {    // Returns a boolean representing the end of a game
  if (listOfSets.length < 3) {
    return false;
  } else if (listOfSets.length === 5) {
    return true;
  }
  const setCount = listOfSets.reduce((acc, current) => {    // Equals 3 if victory and 3 sets played // Equals 2 if victory and 4 sets played
    if (current[0] < current[1]) {
      return acc - 1;
    }
    return acc + 1;
  }, 0);

  if (listOfSets.length === 3) {
    return Math.abs(setCount) === 3 ? true : false;
  }
  return Math.abs(setCount) === 2 ? true : false;
}

export function isSetFinished(    // Returns a boolean representing a set being finished or not
  currentPoint: Array<number>,
  numberOfSet: number
) {
  const scoreTeam1 = currentPoint[0];
  const scoreTeam2 = currentPoint[1];
  if (numberOfSet < 4) {
    if (scoreTeam1 < 25 && scoreTeam2 < 25) {
      return false;
    }
    return Math.abs(scoreTeam1 - scoreTeam2) >= 2 ? true : false;
  }

  if (scoreTeam1 < 15 && scoreTeam2 < 15) {
    return false;
  }
  return Math.abs(scoreTeam1 - scoreTeam2) >= 2 ? true : false;
}

export function isPoint(prob: number) {   // Returns a boolean representing the victory of a point
  const probInfluence = Math.random();
  return probInfluence > 1 - prob ? true : false;
}
