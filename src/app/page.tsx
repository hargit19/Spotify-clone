
import Header from "./components/Header";
import Playlists from "./components/Playlists";
import Bottom from "./components/Bottom";
import Search from "./components/Search";
import Library from "./components/Library";
import Journal from "./journal/page";
import Searchbar from "./searchbar/page"


export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen flex bg-black">
        
<div className="w-1/4">
<Search></Search>
    <Library></Library>
    <Bottom></Bottom>
</div>
<div className="w-[73%]">
{/* <Header></Header> */}
<Searchbar></Searchbar>
{/* <Playlists></Playlists> */}
<Journal></Journal>
</div>

        </div>
    </main>
  )
}
