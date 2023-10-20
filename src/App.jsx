import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Content from "./components/content";
import "./App.css";

function App() {
  const [winner, setWinner] = useState("");
  const [items, setItem] = useState([]);

  useEffect(() => {
    var socketIo = io("http://127.0.0.1:5000");
    socketIo.on("othello", (data) => {
      setItem([...data.solutions]);
      setWinner(data.winner);
    });
  }, []);

  return (
    <>
      <div className="[grid-area:header] h-[90px]">
        <Header />
      </div>
      <main className="[grid-area:main] h-screen p-10">
        <Content items={items} winner={winner} />
      </main>
    </>
  );
}

export default App;
