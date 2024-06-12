import Header from "./components/Header";
import BBSCardList from "./components/BBSCardList";
import { BBS } from "./types/types";

const getAllBBS = async ()=> {
  const response = await fetch('http://localhost:3000/api/post', {
    cache : 'no-store',
  });

  const allBBS: BBS[] = await response.json(); // GETメソッドで受け取ったNextResponseインスタンスの.json()メソッドでjsonデータを取り出し

  return allBBS;
}

export default async function Home() {

  const allBBS: BBS[] = await getAllBBS();

   return (
    <main className="">

      <Header/>
        <BBSCardList allBBS={allBBS}/>
    </main>
  );
}
