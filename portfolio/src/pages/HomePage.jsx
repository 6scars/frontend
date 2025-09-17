import stars from "./images/stars.mp4";

import {Header} from './Header.jsx'
import {Main} from './Main/Main.jsx'
import {Footer} from './Footer.jsx'

export function HomePage() {

  return (
    <>
      {/* Intro overlay */}
      <div className="intro flex items-center justify-center fixed inset-0 z-10">
        <p className="text-[1.2rem] max-md:text-[1rem] ">Marcin Michon Dev</p>
      </div>

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        id="background-video"
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src={stars} type="video/mp4" />
      </video>

      
      <Header />
      <Main />
      
    </>
  );
}
