
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Playlists from "./components/Playlists";
import Journal from "./components/Journal";
import Link from "next/link";


export default function Home() {
  return (
    <>
    {/* <Link href="/">
    <Header></Header>
    <Playlists></Playlists>
    </Link>
    

<Link href="/journal">
<Searchbar></Searchbar>
<Journal></Journal>
</Link> */}
<Header></Header>
<Playlists></Playlists>



</>
  )
}
