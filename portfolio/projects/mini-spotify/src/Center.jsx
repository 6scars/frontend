import Music from './Center/Music.jsx'
import Description from './Center/Description.jsx'
export default function Center() {
  return (
    <main
      className="fixed left-[116px] top-[89px] right-0 bottom-[120px] rounded-md 
        flex items-center gap-3  "
    >
      <Music />
      <Description />
    </main>
  );
}
