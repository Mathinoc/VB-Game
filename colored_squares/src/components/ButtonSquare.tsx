
export default function ButtonSquare({ buttonClass, color, onClick }: { buttonClass: string, color: string, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={buttonClass}
      style={{ backgroundColor: color }}
    >
    </button>
  )
}
