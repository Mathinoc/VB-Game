import { useRef, useState } from 'react';
import './App.css';
import volleyBall from './utils/volleyBall';

function App() {
  const [gameOutCome, setGameOutCome] = useState<string[]>();
  const prob1 = useRef<HTMLInputElement>(null);
  const prob2 = useRef<HTMLInputElement>(null);

  function startGame(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const probabiltyTeam1 = parseFloat(prob1.current!.value);
    const probabiltyTeam2 = parseFloat(prob2.current!.value);
    const gameResult = volleyBall(probabiltyTeam1, probabiltyTeam2)
    setGameOutCome(gameResult);
    console.log(gameResult)
  }

  return (
    <div className="App">
      <h1>VolleyBall Game</h1>
      <form className="App__form" onSubmit={startGame} >
        <div className="App__form-elements">
          <div className="App__individual-input" >
            <label htmlFor="prob1"> Porbability team 1 wins</label>
            <input ref={prob1} id="prob1" type="number" min="0" max="1" step=".05" />
          </div>
          <div className="App__individual-input">
            <label htmlFor="prob2"> Porbability team 2 wins</label>
            <input ref={prob2} id="prob2" type="number" min="0" max="1" step=".05" />
          </div>
        </div>
        <button type="submit">Start Game</button>
      </form>

      <div className="App__display-game-outcome">
        {gameOutCome &&
          gameOutCome.map((set, index) => (
            <div className="App__display-set" key={index} >
              {set}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
