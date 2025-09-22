import Music from './Music.jsx'
import Description from './Description.jsx'
import './Center.css'
export default function Center() {
  return (
    <main
      className="Center fixed left-[116px] top-[89px] right-0 bottom-[120px] rounded-md 
        flex items-center gap-3  "
    >
      <Music />
      <Description />
    </main>
  );
}
