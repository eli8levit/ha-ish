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
import Plant from "~/sources/images/plant.png";
import { LoaderFunction } from "@remix-run/node";
import { getHebrewDate } from "~/he-date.server";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = () => {
  return getHebrewDate();
};

const Post = () => {
  return (
    <div className="shadow px-6  py-8 shadow-post hover:bg-lime-100 hover:shadow-postHover">
      <h3 className="mb-4 font-serif text-3xl font-bold text-black">
        תפסיקו להיות בטלפון בנהיגה
      </h3>
      <p className="mb-4 font-ser text-xl">
        אינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים קטנים{" "}
      </p>
      <div className="flex flex-row items-center">
        <span className="font-ser text-primary opacity-60">30.06.2022</span>
        <span className="mr-12">⟵</span>
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <section>
      <h2 className="mb-6 font-serif text-3xl font-normal text-primary">
        כתיבה:
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default function Index() {
  const hebrewDate = useLoaderData();
  return (
    <main className="relative min-h-screen bg-cover p-28 pb-0 pt-3">
      <span className="font-ser text-sm font-normal text-gray-800">
        {hebrewDate}
      </span>
      <div className="m-auto mt-[10vh] grid max-w-[1800px] grid-cols-2 justify-center gap-4">
        <div>
          <h1 className="font-serif text-9xl font-bold text-primary">
            ה<span className="text-emerald-800">א</span>יש שאוהב את{" "}
            <span className="text-emerald-800">א</span>רצו
          </h1>
          <p className="m-w-[600px] mt-3 px-1 font-ser text-2xl font-light text-gray-800">
            <strong className="text-emerald-800">מה זה?</strong> אני מאוד אוהב
            את המדינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים קטנים זה
            יעשה לי טוב. פשוט אני מרגיש שאני חייב לספר ולשתף את הדעה שלי כי זה
            יכול לעזור לי בזה 🇮🇱{" "}
          </p>
        </div>
        <div className="mr-auto grid h-[30vw] max-h-[650px] w-[34vw] max-w-[700px]  grid-cols-4 grid-rows-6 justify-center  justify-items-center gap-1 bg-primary p-3">
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
      <div className="m-auto mt-24 mb-14 h-[2px] w-[100%] bg-primary" />
      <Posts />
      <img src={Plant} width="250px" className="m-auto mt-24" />
    </main>
  );
}
