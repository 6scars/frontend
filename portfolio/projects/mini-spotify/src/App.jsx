import { useState, useEffect } from 'react'

import Header from "./Header/Header.jsx";
import Aside from "./Aside/Aside.jsx";
import Center from "./Center/Center.jsx";
import Play from "./Play/Play.jsx";
import "./App.css";


import songs from "../public/data/songs.json";
import authors from "../public/data/authors.json";


const songg = songs[0]
const authorr = authors[0]


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
