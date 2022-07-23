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
import Logo from "~/sources/images/logo.svg";
import type { LoaderFunction } from "@remix-run/node";
import { getHebrewDate } from "~/he-date.server";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = () => {
  return getHebrewDate();
};

const Post = () => {
  return (
    <div className="px-2 py-6 shadow shadow-post hover:cursor-pointer hover:bg-lime-100 hover:shadow-postHover md:px-6 md:py-8">
      <h3 className="mb-4 font-caravan text-2xl text-emerald-900 md:text-3xl">
        <span className="text-2xl">♦ </span>תפסיקו להיות בטלפון בנהיגה
      </h3>
      <p className="mb-4 font-frankRe text-2xl md:text-3xl">
        אינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים קטנים
      </p>
      <div className="flex flex-row items-center">
        <span className="font-frankRe text-xl text-black opacity-60">
          30.06.2022
        </span>
        <span className="mr-4 font-frankRe text-4xl">☺</span>
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <section>
      <h2 className="mb-6 font-caravan text-3xl text-primary">
        <span className="font-frankRe text-5xl">⁕</span> כתיבה:
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

const Marks = () => (
  <div className="grid h-[30vw] max-h-[650px] min-h-[300px] w-[34vw] min-w-[340px] max-w-[700px] grid-cols-4 grid-rows-6 justify-center justify-items-center gap-1 bg-primary p-3 md:col-start-2 md:mr-auto md:p-4 lg:row-span-2 lg:mx-auto">
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
);

const Heading = () => (
  <h1 className="row-start-2 font-caravan text-7xl font-black text-primary md:row-start-1 md:text-8xl xl:text-8xl 2xl:text-9xl">
    ה<span className="text-emerald-800">אִ</span>ישׂ שאוהב את{" "}
    <span className="text-emerald-800">אִ</span>רצו
  </h1>
);

const Description = () => (
  <p className="m-w-[700px] lg- col-span-2 px-1 font-frankRe text-3xl leading-8 text-black md:leading-9 lg:col-span-1 lg:row-start-2 lg:text-4xl lg:leading-10">
    <span className="font-frankRe text-6xl text-emerald-800">מה זה?</span> אני
    מאוד אוהב את המדינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים קטנים
    זה יעשה לי טוב. פשוט אני מרגיש שאני חייב לספר ולשתף את הדעה שלי כי זה יכול
    לעזור לי בזה <span className="feat-swsh">ט</span>{" "}
  </p>
);

export default function Index() {
  const hebrewDate = useLoaderData();
  return (
    <main className="relative min-h-screen bg-cover p-4 md:p-8 md:pt-3 lg:p-14 lg:pt-3 2xl:p-28 2xl:pt-3">
      <div className="flex flex-row justify-between">
        <span className="font-frankRe text-lg font-normal text-black">
          ⁅ {hebrewDate} ⁆
        </span>
        <img src={Logo} width="40px" />
      </div>
      <div className="grid-rows-[repeat(3, auto)] m-auto mt-[6vh] grid max-w-[1700px] grid-cols-1 justify-center gap-8 md:grid-cols-2 md:gap-10">
        <Marks />
        <Heading />
        <Description />
      </div>
      <div className="m-auto mt-12 mb-14 h-[1px] w-[100%] max-w-[1700px] bg-primary md:mt-24" />
      <Posts />
    </main>
  );
}
