import { useState } from 'react'

import Header from "./Header/Header.jsx";
import Aside from "./Aside/Aside.jsx";
import Center from "./Center/Center.jsx";
import Play from "./Play/Play.jsx";
import "./App.css";



export default function MiniSpotify() {
  const [song, setSong] = useState(null);
  const [author, setAuthor] = useState(null);

  



  return (
    <>
      <Header />
      <Aside />
      <Center song={song} author={author} setSong={setSong} setAuthor={setAuthor} />
      {song ? <Play song={song} author={author} /> : ''}


    </>
  );
}
