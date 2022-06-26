import { useEffect, useState } from "react";
import ColorHistory from "./ColorHistory";
import Controls from "./Controls";
import ButtonSquare from "./ButtonSquare";
import colorButtons from "../interfaces/colorButtons";
import "../styles/ColorBoard.css";

export default function ColorBoard() {

  const [colorHistory, setColorHistory] = useState<string[]>(() => {
    const colorHistoryJson = localStorage.getItem("colorHistory");
    const colorHistoryList = colorHistoryJson && JSON.parse(colorHistoryJson);
    return colorHistoryList || []
  });
  const [colorButtons, setColorButtons] = useState<colorButtons>(() => {
    const colorButtonsJson = localStorage.getItem("colorButtons");
    const colorButtonList = colorButtonsJson && JSON.parse(colorButtonsJson);
    return colorButtonList || { colorTopLeft: "#FFD76A", colorTopRight: "#D91E9B", colorBottomLeft: "#41BED8", colorBottomRight: "#A24A9B" }

  });
  const [historySize, setHistorySize] = useState<number>(10);

  useEffect(() => {
    localStorage.setItem("colorHistory", JSON.stringify(colorHistory.slice(0, 40)))
  }, [colorHistory]);

  useEffect(() => {
    localStorage.setItem("colorButtons", JSON.stringify(colorButtons))
  }, [colorButtons])

  
  return (
    <div className="ColorBoard">
      <Controls
        colorButtons={colorButtons}
        setColorButtons={setColorButtons}
        historySize={historySize}
        setHistorySize={setHistorySize}
      />
      <div className="ColorBoard__body">

        <ButtonSquare
          buttonClass="ColorBoard__body-square-TL"
          color={colorButtons.colorTopLeft}
          onClick={() => setColorHistory(prev => [colorButtons.colorTopLeft, ...prev])}
        />
        <ButtonSquare
          buttonClass="ColorBoard__body-square-TR"
          color={colorButtons.colorTopRight}
          onClick={() => setColorHistory(prev => [colorButtons.colorTopRight, ...prev])}
        />
        <ButtonSquare
          buttonClass="ColorBoard__body-square-BL"
          color={colorButtons.colorBottomLeft}
          onClick={() => setColorHistory(prev => [colorButtons.colorBottomLeft, ...prev])}
        />
        <ButtonSquare
          buttonClass="ColorBoard__body-square-BR"
          color={colorButtons.colorBottomRight}
          onClick={() => setColorHistory(prev => [colorButtons.colorBottomRight, ...prev])}
        />

        <div className="ColorBoard__body-square-center">
          <ColorHistory colorHistory={colorHistory} historySize={historySize} />
        </div>
      </div>
    </div>
  )
}
