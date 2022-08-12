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
import Gedi from "~/sources/images/gedi.jpg";
import Flam from "~/sources/images/flam.jpg";
import Dead from "~/sources/images/dead.jpg";
import Rail from "~/sources/images/rail.jpg";
import Logo from "~/sources/images/logo.svg";
import type { LoaderFunction } from "@remix-run/node";
import { getHebrewDate } from "~/he-date.server";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = () => {
  return getHebrewDate();
};

const posts = [1, 2, 3, 4];

const images = [
  { src: Gedi, position: "top" },
  { src: Flam, position: "top" },
  { src: Dead, position: "top" },
  { src: Rail, position: "top" },
];

const Post = ({ index }: { index: number }) => {
  return (
    <div className="bg-beigeDarker hover:cursor-pointer hover:bg-beige hover:shadow-postHover">
      <img
        src={images[index].src}
        height="300px"
        className={`h-[300px] w-full object-cover object-${images[index].position}`}
      />
      <div className="p-10">
        <h3 className="mb-4 w-max border-b-2 border-greenSecondary font-caravan text-2xl tracking-wide text-greenSecondary">
          תפסיקו להיות בטלפון בנהיגה
        </h3>
        <p className="mb-4 font-frankRe text-2xl">
          אינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים קטנים
        </p>
        <span className="font-caravan text-base tracking-wider text-greenSecondary">
          30.06.2022
        </span>
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <section>
      <h2 className="mb-14 text-center font-caravan text-4xl tracking-50 text-greenSecondary">
        כתיבה:
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post, index) => (
          <Post index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

const Marks = () => (
  <div className="grid h-[30vw] max-h-[650px] min-h-[300px] w-[34vw] min-w-[340px] max-w-[700px] grid-cols-4 grid-rows-6 justify-center justify-items-center gap-1 bg-black p-3 md:col-start-2 md:p-4 lg:row-span-2">
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
  <h1 className="mt-[8vh] mb-[12vh] text-center font-caravan text-10xl font-black leading-1 text-black">
    ה<span className="text-greenPrimary">אִ</span>ישׂ שאוהב את{" "}
    <span className="text-greenPrimary">אִ</span>רצו
  </h1>
);

const Description = () => (
  <p className="max-w-[50%] font-frankRe text-4xl text-black">
    <span className="font-caravan text-6xl text-greenPrimary">מה זה?</span> אני
    מאוד אוהב את המדינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים קטנים
    זה יעשה לי טוב. פשוט אני מרגיש שאני חייב לספר ולשתף את הדעה שלי כי זה יכול
    לעזור לי בזה <span className="feat-swsh">ט</span>{" "}
  </p>
);

export default function Index() {
  const hebrewDate = useLoaderData();
  return (
    <main className="relative min-h-screen bg-cover p-4 md:p-8 md:pt-3 lg:p-20 lg:pt-3 2xl:p-28 2xl:pt-3">
      <div className="flex flex-row justify-between">
        <span className="font-frankRe text-lg font-normal text-black">
          ⁅ {hebrewDate} ⁆
        </span>
        <img src={Logo} width="40px" />
      </div>
      <Heading />
      <div className="flex flex-row content-center items-center gap-x-12">
        <Description />
        <Marks />
      </div>
      <div className="m-auto mt-12 mb-14 h-[1px] w-[100%] max-w-[1700px] bg-black md:mt-24" />
      <Posts />
    </main>
  );
}
