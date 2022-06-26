import '../styles/ColorHistory.css';
import palette from '../assets/palette.png';

export default function ColorHistory({ colorHistory, historySize }: { colorHistory: string[], historySize: number }) {
  return (
    <>
      {colorHistory.length > 0 ?
        colorHistory.map((color, index) => {
          if (index < historySize) {
            return (
              <div
                key={index}
                className="ColorHistory__square"
                style={{ backgroundColor: color }}
              >
              </div>
            )
          }
        })
        :
        <div className="ColorHistory__empty-history">
          <img src={palette} alt="palette icon" />
          <p>Click on a square to get started!</p>
        </div>
      }
    </>
  )
}
