import './Play.css'
export default function Play() {
  return (
    <div
      className="play fixed bottom-0 left-0 right-0 bg-black h-[120px]
      flex justify-between
    "
    >
      <div className="play-left-section bg-white h-full w-[300px] min-w-[300px] max-w-[300px] flex">
        <div className="song-image-container"></div>
        <img alt="song-image" src="/mini-spotify/images/songPictures/cat1.jpg" className="song__image w-5 h-5"/>
        <div>
          <p>LIFETIMES</p>
          <p>Katy Parry</p>
        </div>
      </div>
      <div className="play-center-section bg-blue-500 h-full w-[400px] min-w-[200px] max-w-[600px]"></div>
      <div className="play-right-section bg-amber-500 h-full w-[300px] min-[150px]"></div>
    </div>
  );
}
