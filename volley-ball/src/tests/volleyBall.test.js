import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import volleyBall, { isVictory, isSetFinished, isPoint } from "../utils/volleyBall";
import mocks from './mocks.js';

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
    expect(isSetFinished([25,27],3)).toEqual(true);
    expect(isSetFinished([14,15],5)).toEqual(false);
  })
  it("Should return a boolean indicating end of game", () => {
    expect(typeof isVictory([[15,25],[24,26]])).toEqual("boolean");
    expect(isVictory([[15,25],[24,26]])).toEqual(false);
    expect(isVictory([[15,25],[24,26],[24,26]])).toEqual(true);
    expect(isVictory([[15,25],[24,26],[28,26]])).toEqual(false);
    expect(isVictory([[15,25],[24,26],[27,25],[28,26],[14,16]])).toEqual(true);
    expect(isVictory([[15,25],[24,26],[27,25],[28,26],[14,15]])).toEqual(false); // error to fix here
  })
})