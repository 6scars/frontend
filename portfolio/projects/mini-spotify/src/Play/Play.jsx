import { useEffect, useState, useRef } from "react";
import PlayCenterSection from "./PlayCenterSection.jsx";
import PlayRightSection from "./PlayRightSection.jsx";
import "./Play.css";
export default function Play() {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const a = audioRef.current;

    const onLoaded = ()=>{
      setDuration(a.duration || 0)
    }
    const onPlay = () => setPlay(true);
    const onEnded = () =>setPlay(false);
    const onCurrent = () => {setCurrent(a.currentTime)};


    a.addEventListener("loadedmetadata", onLoaded);
    a.addEventListener("play", onPlay);
    a.addEventListener("ended", onEnded);
    a.addEventListener("timeupdate", onCurrent);

    return () => {
      a.removeEventListener("loadedmetadata", onLoaded);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("ended", onEnded);
      a.addEventListener("timeupdate", onCurrent);
      
    };
  }, []);

  function handlePlay() {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      setPlay(true);
      a.play();
    } else {
      setPlay(false);
      a.pause();
    }
  }

  const progressBar = (current / duration) * 100;

  return (
    <div
      className="play fixed bottom-0 left-0 right-0 bg-black h-[120px]
      flex justify-between
    "
    >
      <div className="play-left-section h-full w-[300px] min-w-[300px] max-w-[300px] flex">
        <div
          className="song-image-container w-[70px] h-full border-1
          flex
        "
        >
          <img
            alt="song-image"
            src="/mini-spotify/images/songPictures/cat1.jpg"
            className=" h-full w-full object-cover rounded-md"
          />
        </div>

        <div
          className="title-authors border-1 flex-1 
          flex flex-col
        "
        >
          <a className="title text-white cursor-pointer hover:underline">
            LIFETIMES
          </a>
          <a className="authors text-[var(--help-color)] cursor-pointer hover:underline ">
            Katy Parry
          </a>
        </div>
      </div>
      <PlayCenterSection
        audioRef={audioRef}
        handlePlay={handlePlay}
        play={play}
        duration={duration}
        current={current}
        setCurrent={setCurrent}
        progressBar={progressBar}
      />

      <PlayRightSection />

    </div>
  );
}
