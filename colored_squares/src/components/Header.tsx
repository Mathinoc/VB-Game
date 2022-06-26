import square from "../assets/palette.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className='Header'>
      <img src={square} alt="application icon" />
      <h1 className='Header__title'>Colored Squares</h1>
    </div>
  )
}
