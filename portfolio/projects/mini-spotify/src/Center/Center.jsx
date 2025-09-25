import Music from './Music.jsx'
import Description from './Description.jsx'
import './Center.css'

import songs from "../../public/data/songs.json";
import authors from "../../public/data/authors.json";


export default function Center({song, author , setSong, setAuthor}) {

  return (
    <main
      className="Center fixed left-[116px] top-[89px] right-0 bottom-[120px] rounded-md 
        flex items-center gap-3  "
    >
      <Music songs={songs} authors={authors} setSong={setSong} setAuthor={setAuthor}/>
      {song ? <Description song={song} author={author}/> : ''}
      
    </main>
  );
}
