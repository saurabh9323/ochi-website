import { FaArrowUpLong } from "react-icons/fa6";

const LandinPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 border-t-2">
      <div className="textStructure mt-40 px-20">
        {[" We Create", " EYE OPENING", "Presentations"].map((item, i) => {
          return (
            <div className="masker " key={i}>
              <div className="w-fit flex items-end overflow-hidden">
                {i === 1 && (
                  <div className="mr-5 w-[8vw] rounded-md h-[5vw] -top-[0.8vw] relative bg-green-500"></div>
                )}
                <h1 className="text-[7.5vw] uppercase leading-[6.6vw] tracking-tighter  font-medium font-['FoundersGrotesk']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, i) => {
          return (
            <p
              key={i}
              className="font-light text-md tracking-tighter leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex gap-5">
          <div className="px-5 py-2 font-light text-sm rounded-full border-[2px]  border-zinc-500">
            START THE PROJECT
          </div>
          <div className="w-8 h-8 rounded-full border-[2px] border-zinc-500 flex items-center justify-center">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandinPage;
