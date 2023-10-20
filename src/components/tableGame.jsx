export const Checker = ({ color }) => (
  <svg
    fill={color}
    viewBox="0 0 512 512"
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    className="mx-auto my-1"
  >
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
  </svg>
);
export default function tableGame({ table }) {
  return (
    <>
      <div className="bg-green-700 grid grid-cols-8 text-center p-2">
        {table.map((column) => {
          return column.map((item) => {
            return (
              <div className=" border border-slate-600 p-1 min-h-[34px] mix-w-[39px]">
                {item === "W" ? (
                  <Checker color={"#fff"} />
                ) : item === "B" ? (
                  <Checker color={"#000"} />
                ) : (
                  ""
                )}
              </div>
            );
          });
        })}
      </div>
    </>
  );
}
