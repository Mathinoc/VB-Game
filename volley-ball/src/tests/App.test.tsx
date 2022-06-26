import { render, screen } from '@testing-library/react';
import App from '../App';

describe('renders the page', () => {
  it("Should renders titles, labels and button", ()=>{
    render(<App />);
    const title = screen.getByText(/volleyball game/i);
    expect(title).toBeInTheDocument();
    const team1 = screen.getByText(/Porbability team 1 wins/i);
    expect(team1).toBeInTheDocument();
    const team2 = screen.getByText(/Porbability team 2 wins/i);
    expect(team2).toBeInTheDocument();
    const startButton = screen.getByRole("button", {name:"Start Game"});
    expect(startButton).toBeInTheDocument();
  })
});
