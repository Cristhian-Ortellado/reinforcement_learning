import { useState } from "react";
import Board from "./board";
export default function content({ items, winner }) {
  const handleClick = () => {
    fetch(
      `http://127.0.0.1:5000/?cut_level_black=${cutLevelBlack}&max_time_black=${maxTimeBlack}&alpha_beta_black=${alphaBetaBlack}&cut_level_white=${cutLevelWhite}&max_time_white=${maxTimeWhite}&alpha_beta_white=${alphaBetaWhite}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  //   white
  const [cutLevelWhite, setCutLevelWhite] = useState("");
  const [maxTimeWhite, setMaxTimeWhite] = useState("");
  const [alphaBetaWhite, setAlphaBetaWhite] = useState("");

  //black
  const [cutLevelBlack, setCutLevelBlack] = useState("");
  const [maxTimeBlack, setMaxTimeBlack] = useState("");
  const [alphaBetaBlack, setAlphaBetaBlack] = useState("");

  return (
    <>
      <h1 className="text-center text-5xl font-light">Start Application</h1>

      <div className="flex gap-10 justify-center">
        <div className="flex gap-5 flex-col items-center py-5">
          <h2 className="text-4xl">White Player</h2>
          <label htmlFor="">Cut Level</label>
          <input
            type="text"
            name="cut_level_white"
            onInput={(e) => setCutLevelWhite(e.target.value)}
            className="border border-slate-200 rounded w-32 text-slate-900"
          />

          <label htmlFor="">Max Time (seconds)</label>
          <input
            type="text"
            onInput={(e) => setMaxTimeWhite(e.target.value)}
            name="max_time_white"
            className="border border-slate-200 rounded w-32 text-slate-900"
          />

          <label htmlFor="">Alpha/Beta </label>
          <input
            type="text"
            name="alpha_beta_white"
            onInput={(e) => setAlphaBetaWhite(e.target.value)}
            className="border border-slate-200 rounded w-32 text-slate-900"
          />
        </div>

        <div className="flex gap-5 flex-col items-center py-5">
          <h2 className="text-4xl">Black Player</h2>
          <label htmlFor="">Cut Level</label>
          <input
            type="text"
            name="cut_level_black"
            onInput={(e) => setCutLevelBlack(e.target.value)}
            className="border border-slate-200 rounded w-32 text-slate-900"
          />

          <label htmlFor="">Max Time (seconds)</label>
          <input
            type="text"
            onInput={(e) => setMaxTimeBlack(e.target.value)}
            name="max_time_black"
            className="border border-slate-200 rounded w-32 text-slate-900"
          />

          <label htmlFor="">Alpha/Beta </label>
          <input
            type="text"
            name="alpha_beta_black"
            onInput={(e) => setAlphaBetaBlack(e.target.value)}
            className="border border-slate-200 rounded w-32 text-slate-900"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="flex justify-center rounded px-5 bg-slate-600 w-56"
          onClick={handleClick}
        >
          Play
        </button>
      </div>

      {winner ? <h2 className="text-3xl">The winner is :{winner}</h2> : ""}
      <div className="mx-auto flex  bg-transparent h-[650px] gap-5 overflow-x-scroll scroll-smooth py-5 border mt-5 pb-32 rounded px-2">
        {items.map((element) => {
          return <Board {...element} key={element.id} />;
        })}
      </div>
    </>
  );
}
