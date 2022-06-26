import ColorPicker from './ColorPicker';
import ReactSlider from 'react-slider';
import controls from '../interfaces/controls';
import '../styles/Controls.css';

export default function Controls({ colorButtons, setColorButtons, historySize, setHistorySize }: controls) {

  return (
    <div className="Controls">
      <div className="Controls__pickers" >
        <ColorPicker buttonKey="colorTopLeft" color={colorButtons.colorTopLeft} setColor={setColorButtons} />
        <ColorPicker buttonKey="colorTopRight" color={colorButtons.colorTopRight} setColor={setColorButtons} />
        <ColorPicker buttonKey="colorBottomLeft" color={colorButtons.colorBottomLeft} setColor={setColorButtons} />
        <ColorPicker buttonKey="colorBottomRight" color={colorButtons.colorBottomRight} setColor={setColorButtons} />
      </div>
      <div className="Controls__limit">
        <input
          type="number"
          value={historySize}
          onChange={(e) => setHistorySize(parseInt(e.target.value))}
          min={2}
          max={40}
        />
        <ReactSlider
          value={historySize}
          onChange={(value) => setHistorySize(value)}
          className="Controls__limit-slider"
          trackClassName="Controls__limit-slider-track"
          thumbClassName="Controls__limit-slider-thumb"
          min={2}
          max={40}
        />
      </div>
    </div>
  )
}
