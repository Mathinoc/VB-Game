import React from 'react';
import colorButtons from '../interfaces/colorButtons';
import '../styles/ColorPicker.css';

export default function ColorPicker({ buttonKey, color, setColor }: { buttonKey: string, color: string, setColor: React.Dispatch<React.SetStateAction<colorButtons>> }) {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setColor(prev => {
      return { ...prev, [`${buttonKey}`]: e.target.value }
    })
  }

  return (
    <div className="ColorPicker">
      <input type="color" value={color} onChange={handleChange} />
      <input type="text" value={color} onChange={handleChange} />
    </div>
  )
}
