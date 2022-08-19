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
import { Link, useLoaderData } from "@remix-run/react";
import { images } from "~/image-stack";
import { getPosts } from "~/entry.server";

export const loader: LoaderFunction = async () => {
  return {
    hebrewDate: getHebrewDate(),
    posts: await getPosts(),
  };
};

const posts = [1, 2, 3, 4];

const Post = ({ index }: { index: number }) => {
  return (
    <Link
      to="/posts/1"
      className="bg-beigeDarker hover:cursor-pointer hover:bg-beige hover:shadow-postHover"
    >
      <img
        src={images[index].src}
        height="300px"
        className={`h-[200px] w-full object-cover md:h-[300px] object-${images[index].position}`}
      />
      <div className="p-4 md:p-10">
        <h3 className="mb-4 border-b-2 border-greenSecondary font-caravan text-2xl tracking-wide text-greenSecondary">
          תפסיקו להיות בטלפון בנהיגה
        </h3>
        <p className="mb-4 font-frankRe text-2xl">
          אינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים קטנים
        </p>
        <span className="font-caravan text-base tracking-wider text-greenSecondary">
          30.06.2022
        </span>
      </div>
    </Link>
  );
};

const Posts = () => {
  return (
    <section>
      <h2 className="mb-14 text-center font-caravan text-4xl text-greenSecondary md:text-5xl">
        כתיבה
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post, index) => (
          <Post index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

const Marks = () => (
  <div className="mx-auto grid h-[30vw] max-h-[650px] min-h-[300px] w-[34vw] min-w-[340px] max-w-[700px] grid-cols-4 grid-rows-6 justify-center justify-items-center gap-1 bg-black p-3 md:col-start-2 md:mx-0 md:p-4 lg:row-span-2">
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
  <h1 className="mt-[8vh] mb-[12vh] font-caravan text-8half font-black leading-1 text-black md:text-center md:text-10xl">
    ה<span className="text-greenPrimary">אִ</span>ישׂ שאוהב את{" "}
    <span className="text-greenPrimary">אִ</span>רצו
  </h1>
);

const Description = () => (
  <p className="font-frankRe text-4xl text-black">
    <span className="font-caravan text-6xl text-greenPrimary">מה זה?</span> אני
    מאוד אוהב את המדינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים קטנים
    זה יעשה לי טוב. פשוט אני מרגיש שאני חייב לספר ולשתף את הדעה שלי כי זה יכול
    לעזור לי בזה <span className="feat-swsh">ט</span>{" "}
  </p>
);

export default function Index() {
  const { hebrewDate, posts } = useLoaderData();
  console.log("posts", posts);
  return (
    <main className="relative min-h-screen bg-cover p-2 md:p-8 md:pt-3 lg:p-20 lg:pt-3 2xl:p-28 2xl:pt-3">
      <div className="flex flex-row justify-between">
        <span className="font-frankRe text-lg font-normal text-black">
          ⁅ {hebrewDate} ⁆
        </span>
        <img src={Logo} width="40px" />
      </div>
      <Heading />
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 grid-rows-2 content-center items-center gap-12 md:grid-cols-2 md:grid-rows-1">
        <Description />
        <Marks />
      </div>
      <div className="m-auto mt-12 mb-14 h-[1px] w-[100%] max-w-[1700px] bg-black md:mt-24" />
      <Posts />
    </main>
  );
}
