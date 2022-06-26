import colorButtons from "./colorButtons"

export default interface controls {
  colorButtons: colorButtons,
  setColorButtons: React.Dispatch<React.SetStateAction<colorButtons>>,
  historySize: number,
  setHistorySize: React.Dispatch<React.SetStateAction<number>>
}