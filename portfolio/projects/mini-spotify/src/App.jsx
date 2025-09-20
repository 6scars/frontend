import { useState } from "react";
import "./App.css";

export default function MiniSpotify() {
  return (
    <>
      <header className="fixed top-0  bg-blue-800"></header>
      <aside className="leftBar fixed top-[89px] bottom-[120px] bg-gray-900 rounded-xl"></aside>

      <main
        className="fixed left-[116px] top-[89px] right-0 bottom-[120px] rounded-md 
        flex items-center gap-3  "
      >
        {/* music */}
        <div
          className="space-y-4 bg-amber-900 flex-[2] h-full min-w-[500px] overflow-y-auto  rounded-md
          relative
        "
        >
          <div
            className="main-type w-full bg-gray-500 sticky top-0 
            flex gap-10"
          >
            <button>MUSIC</button>
            <button>PODCASTS</button>
          </div>
          <div className="main-songs ">
            <div className="play-lists gap-2 grid grid-cols-3">
              {Array.from({ length: 4 }).map((_, i) => {
                return (
                  <div key={i} className="playlist">
                    <div className="playlist-image-container">
                      <img
                        className="playlist__image"
                        src={`mini-spotify/images/cat${i + 1}.jpg`}
                      ></img>
                    </div>
                    <div className="playlist-title-container">
                      <p className="playlist__title">title</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="songs">
              <div className="songs-title-container text-white font-bold">
                <p className="songs__title">Preapared for You</p>
              </div>
              <div className="songs-container bg-blue-500 h-full">
                {Array.from({ length: 10 }).map(() => {
                  return (
                    <div className="song-container-outer flex justify-center">
                      <div className="song-container-inner border-1 rounded-xl ">
                        <div className="song-image-container h-[75%] ">
                          <img
                            className="song__image"
                            src="mini-spotify/images/cat1.jpg"
                          ></img>
                        </div>
                        <div className="authors-container  h-[25%] text-gray-700 font-bold flex items-center">
                          <p className="authors">
                            Oliver Francis, XXXtentacions
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="songs">
              <div className="songs-title-container text-white font-bold">
                <p className="songs__title">Preapared for You</p>
              </div>
              <div className="songs-container bg-blue-500 h-full">
                {Array.from({ length: 10 }).map(() => {
                  return (
                    <div className="song-container-outer flex justify-center">
                      <div className="song-container-inner border-1 rounded-xl ">
                        <div className="song-image-container h-[75%] ">
                          <img
                            className="song__image"
                            src="mini-spotify/images/cat1.jpg"
                          ></img>
                        </div>
                        <div className="authors-container  h-[25%] text-gray-700 font-bold flex items-center">
                          <p className="authors">
                            Oliver Francis, XXXtentacions
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="songs">
              <div className="songs-title-container text-white font-bold">
                <p className="songs__title">Preapared for You</p>
              </div>
              <div className="songs-container bg-blue-500 h-full">
                {Array.from({ length: 10 }).map(() => {
                  return (
                    <div className="song-container-outer flex justify-center">
                      <div className="song-container-inner border-1 rounded-xl ">
                        <div className="song-image-container h-[75%] ">
                          <img
                            className="song__image"
                            src="mini-spotify/images/cat1.jpg"
                          ></img>
                        </div>
                        <div className="authors-container  h-[25%] text-gray-700 font-bold flex items-center">
                          <p className="authors">
                            Oliver Francis, XXXtentacions
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div
          className="bg-yellow-800 h-full flex-1 min-w-[500px] overflow-y-auto
          grow
        "
        >
          {Array.from({ length: 100 }).map((_, i) => {
            return (
              <p key={i} className="text-white">
                Song {i}
              </p>
            );
          })}
        </div>
      </main>

      <play className="fixed bottom-0 left-0 right-0 bg-white h-[120px]"></play>
    </>
  );
}
