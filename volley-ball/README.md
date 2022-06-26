# Volley-Ball game

The Volley-Ball game is a match between two teams and takes two inputs - the probability that each team wins the point when they serve.
When pressing "start", the program will print the evolution of the game based on the given probabilities.
The only requirement (like all games) is that both probabilities cannot equal 1.

## Getting started

1. Fork this repo and clone a copy on your local machine.

2. Install the dependencies: run `npm i` from the volley-ball folder.

3. Start the app: run `npm start` from the volley-ball folder to run the app in a development mode.


## Running tests

To run the tests: run `npm test`from the volley-ball folder.

Three test suites (unit tests) have been created:
- APP.test.js to test that the client is rendering correctly
- volleyBall.test.js to test the four functions of the program (isPoint, isSetFinished, isVictory, volleyBall)
