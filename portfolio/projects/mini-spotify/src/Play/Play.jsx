import "./Play.css";
export default function Play() {
  return (
    <div
      className="play fixed bottom-0 left-0 right-0 bg-black h-[120px]
      flex justify-between
    "
    >
      <div className="play-left-section h-full w-[300px] min-w-[300px] max-w-[300px] flex">
        <div className="song-image-container w-[70px] h-full border-1
          flex
        ">
          <img
            alt="song-image"
            src="/mini-spotify/images/songPictures/cat1.jpg"
            className=" h-full w-full object-cover rounded-md"
          />
        </div>

        <div className="title-authors border-1 flex-1 
          flex flex-col
        ">
          <a className="title text-white cursor-pointer hover:underline">LIFETIMES</a>
          <a className="authors text-[var(--help-color)] cursor-pointer hover:underline ">Katy Parry</a>
        </div>
      </div>
      <div className="play-center-section bg-blue-500 h-full w-[400px] min-w-[200px] max-w-[600px]
        flex flex-col items-center
      ">
        <div className="w-full flex-1 flex justify-center items-center gap-5">
        <a><img alt="start-music" src="/mini-spotify/images/logos/previousSong.svg" className="w-10 h-full cursor-pointer" /></a>
        <a><img alt="start-music" src="/mini-spotify/images/logos/startSong.svg" className="w-10 h-full cursor-pointer" /></a>
        <a><img alt="start-music" src="/mini-spotify/images/logos/nextSong.svg" className="w-10 h-full cursor-pointer" /></a>
        </div>
        <div className="w-full flex-1 flex justify-center items-center">
            <input className="bg-white h-10 w-full" placeholder="input"/>
        </div>
      </div>
      <div className="play-right-section bg-amber-500 h-full w-[300px] min-[150px]"></div>
    </div>
  );
}
