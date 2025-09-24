import './PlayRightSection.css'
export default function PlayRightSection() {
  return (
    <div
      className="play-right-section h-full w-[300px] min-[150px]
       flex justify-center items-center"
    >
      <div className="volume-container w-full h-full flex items-end">
        <div className="volume w-full bg-[var(--help-color2)] h-[10px] rounded-md overflow-hidden">
            <div className="w-[50%] h-full bg-white "></div>
        </div>
      </div>
    </div>
  );
}
