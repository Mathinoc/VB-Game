import "@testing-library/jest-dom";
import volleyBall, { isVictory, isSetFinished, isPoint } from "../utils/volleyBall";

describe("Delete Button", () => {
  it("Should return a boolean indicating point victory", () => {
    expect(typeof isPoint(0.6)).toEqual("boolean");
    expect(isPoint(0)).toEqual(false);
    expect(isPoint(1)).toEqual(true);
  })
  it("Should return a boolean indicating end of set", () => {
    expect(typeof isSetFinished([10,24],5)).toEqual("boolean");
    expect(isSetFinished([10,24],3)).toEqual(false);
    expect(isSetFinished([10,25],3)).toEqual(true);
    expect(isSetFinished([25,25],3)).toEqual(false);
    expect(isSetFinished([24,25],3)).toEqual(false);
    expect(isSetFinished([25,27],3)).toEqual(true);
    expect(isSetFinished([14,15],5)).toEqual(false);
    expect(isSetFinished([14,16],5)).toEqual(true);
  })
  it("Should return a boolean indicating end of game", () => {
    expect(typeof isVictory([[15,25],[24,26]])).toEqual("boolean");
    expect(isVictory([[15,25],[24,26]])).toEqual(false);
    expect(isVictory([[15,25],[24,26],[24,26]])).toEqual(true);
    expect(isVictory([[15,25],[24,26],[23,25]])).toEqual(true);
    expect(isVictory([[15,25],[24,26],[28,26]])).toEqual(false);
    expect(isVictory([[15,25],[24,26],[27,25],[28,26],[14,16]])).toEqual(true);
    expect(isVictory([[15,25],[24,26],[27,25],[28,26]])).toEqual(false);
  })
  it("Should return an array containing each point", () => {
    expect(typeof volleyBall(0.5,0.5)).toEqual("object");
    expect(volleyBall(0.5,0.5).length).toBeGreaterThan(75);
    expect(volleyBall(0.5,0.5)[0]).toEqual("0-0");
  })
})