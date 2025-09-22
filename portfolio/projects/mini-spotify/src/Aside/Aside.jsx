import "./Aside.css";
export default function Aside() {
  return (
    <aside
      className="leftBar red-scroll-bar fixed top-[89px] bottom-[120px] bg-gray-900 rounded-xl
            flex flex-col items-center gap-[10px] 
            overflow-y-auto
        "
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div
            key={i}
          className="playlists-container bg-red-700 w-[75%] h-[150px]
            flex flex-col
            "
        >
          <div className="img-container h-[70px]">
            <img
              alt="playlist"
              src="mini-spotify/images/songPictures/cat1.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="playlist-paragraph-container w-full">
            <p className="playlist__paragraph text-white text-[12px] font-bold text-bold text-center w-full">Favourite</p>
            
            
          </div>
        </div>
      ))}
    </aside>
  );
}
