import TableGame from "./tableGame";
export default function board({
  row,
  column,
  timeElapsed,
  visitedNodes,
  table,
  title = "Board",
  player,
}) {
  return (
    <>
      <article className="p-2 flex-shrink-0 bg-slate-700 w-[400px] h-[600px] rounded-2xl text-justify font-light">
        <h2 className="text-center font-bold">{title}</h2>
        <p>
          Player: <span className="font-bold">{player}</span>
        </p>
        <p>
          Row: <span className="text-green-400">{row}</span>
        </p>
        <p>
          Col: <span className="text-green-400">{column}</span>
        </p>
        <p>
          Time Elapsed: <span className="text-green-400">{timeElapsed}</span>{" "}
          segundos
        </p>
        <p className="mb-10">
          Visited Nodes: <span className="text-green-400">{visitedNodes}</span>
        </p>

        <TableGame table={table} />
      </article>
    </>
  );
}
