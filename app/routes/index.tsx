import AnimalsMark from "~/sources/images/mark-ananas.png";
import ShipMark from "~/sources/images/marks/67.png";
import BirdMark from "~/sources/images/marks/30.jpeg";
import KnessetMark from "~/sources/images/marks/23.jpeg";
import BenZviMark from "~/sources/images/marks/17.jpeg";
import EilatMark from "~/sources/images/marks/66.jpeg";
import GazellsMark from "~/sources/images/marks/25.jpeg";
import Jerusalem from "~/sources/images/marks/40.jpeg";
import TelAvivUnMark from "~/sources/images/marks/54.jpeg";
import TelAviv40 from "~/sources/images/marks/31.jpeg";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-lime-50 p-20">
      <div className="m-auto mt-[10vh] grid max-w-[2000px] grid-cols-2  justify-center gap-4">
        <div>
          <h1 className=" font-serif text-8xl text-primary">
            ה<span className="text-emerald-800">א</span>יש שאוהב את{" "}
            <span className="text-emerald-800">א</span>רצו
          </h1>
          <p className="mt-3 px-1 font-ser text-2xl text-zinc-700">
            אראה את פני מאדים, כך או כך, וזו תהיה חוויה נדירה. דומני שהמחזה של
            הגופים השמיימים מבעד לטלסקופ מדוייק, כמו גם טיול מסביב לעולם, צריכים
            להיות חלק מחינוך ליברלי.
          </p>
        </div>
        <div className="mr-auto grid h-[30vw] w-[34vw]  grid-cols-4 grid-rows-6 justify-center  justify-items-center gap-1 bg-primary p-3">
          <img src={BenZviMark} className="row-span-4 h-full object-cover" />
          <img src={AnimalsMark} className=" h-full object-cover" />
          <img src={KnessetMark} className="row-span-2 h-full object-cover" />
          <img src={ShipMark} className="row-span-4 h-full object-cover" />
          <img src={GazellsMark} className="row-span-3 h-full object-cover" />
          <img
            src={TelAviv40}
            className="col-start-3 row-start-4 h-full object-cover"
          />
          <img src={BirdMark} className="h-full object-cover" />
          <img
            src={EilatMark}
            className="col-start-1 row-span-2 h-full object-cover"
          />
          <img
            src={TelAvivUnMark}
            className="col-start-2 col-end-4 row-start-5 row-end-7 h-full w-full object-cover object-top"
          />
          <img
            src={Jerusalem}
            className="col-start-4  row-span-2 h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
