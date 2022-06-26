export default function volleyBall(prob1: number, prob2: number) {
  let listScores = ["0-0"], setStack: number[][] = [], currentSet = [0, 0], team1Serves = true;
  while (!isVictory(setStack)) {
    while (!isSetFinished(currentSet, setStack.length)) {
      const pointTeam1 = currentSet[0];
      const pointTeam2 = currentSet[1];
      if (team1Serves) {
        isPoint(prob1) ?
          currentSet = [pointTeam1 + 1, pointTeam2]
          :
          currentSet = [pointTeam1, pointTeam2 + 1]
      } else {
        isPoint(prob2) ?
          currentSet = [pointTeam1, pointTeam2 + 1]
          :
          currentSet = [pointTeam1 + 1, pointTeam2]
      }
      team1Serves = !team1Serves;
      const setString = setStack.map(el => el.join("-"));
      listScores.push([setString.join(" "), currentSet.join("-")].join(" "));
    }
    setStack.push(currentSet);
    currentSet = [0, 0];
  }
  return listScores
}

export function isVictory(setStack: Array<number[]>) {
  if (setStack.length < 3) {
    return false
  } else if (setStack.length === 5) {
    return true
  }
  const setCount = setStack.reduce((acc, current) => {

    if (current[0] < current[1]) {
      return acc - 1
    }
    return acc + 1
  }, 0)
  if (setStack.length === 3) {
    return Math.abs(setCount) === 3 ? true : false
  }
  return Math.abs(setCount) === 2 ? true : false
}

export function isSetFinished(currentPoint: Array<number>, numberOfSet: number) {

  const scoreTeam1 = currentPoint[0], scoreTeam2 = currentPoint[1];
  if (numberOfSet < 4) {

    if (scoreTeam1 < 25 && scoreTeam2 < 25) {

      return false;
    }
    return Math.abs(scoreTeam1 - scoreTeam2) >= 2 ? true : false
  }

  if (scoreTeam1 < 15 && scoreTeam2 < 15) {
    return false
  }
  return Math.abs(scoreTeam1 - scoreTeam2) >= 2 ? true : false
}

export function isPoint(prob: number) {
  const probInfluence = Math.random();
  return probInfluence > (1 - prob) ? true : false;
}