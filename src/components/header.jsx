export default function Header() {
  return (
    <header className="p-5 justify-around flex bg-slate-900 h-full items-center">
      <picture>
        <img src="/othello.png" width={"50px"} alt="" />
      </picture>
      <h2 className="font-semibold text-lg">
        Othello <strong>IA</strong>
      </h2>
      <div></div>
    </header>
  );
}
