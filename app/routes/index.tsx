import Logo from "~/sources/images/logo.svg";
import type { LoaderFunction } from "@remix-run/node";
import { getHebrewDate } from "~/he-date.server";
import { useLoaderData } from "@remix-run/react";
import { PostCards } from "~/post-cards";
import { Marks } from "~/marks";
import { getPosts } from "~/models/posts";

export const loader: LoaderFunction = async () => {
  return {
    hebrewDate: getHebrewDate(),
    posts: await getPosts(),
  };
};

const Heading = () => (
  <h1 className="mt-[8vh] mb-[12vh] font-caravan text-7.5xl font-black leading-1 text-black sm:text-8xl md:text-center md:text-10xl ">
    ה<span className="text-greenSecondary">אִ</span>ישׂ שאוהב את{" "}
    <span className="text-greenSecondary">אִ</span>רצו
  </h1>
);

const Description = () => (
  <p className="font-frankRe text-4xl text-black">
    <span className="font-caravan text-6xl text-greenSecondary">מה זה?</span>{" "}
    אני מאוד אוהב את המדינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים
    קטנים זה יעשה לי טוב. פשוט אני מרגיש שאני חייב לספר ולשתף את הדעה שלי כי זה
    יכול לעזור לי בזה <span className="feat-swsh">ט</span>{" "}
  </p>
);

export default function Index() {
  const { hebrewDate, posts } = useLoaderData();
  return (
    <div>
      <header className="flex flex-row flex-row-reverse flex-wrap-reverse items-center justify-end gap-x-4 bg-beigeDarker py-2 px-4">
        <span className="ml-10 font-frankRe text-sm font-normal text-black">
          {hebrewDate}
        </span>
        <nav className="flex gap-x-4">
          <a
            href="/#blog"
            className="flex items-center gap-x-0.5 font-caravan text-lg text-zinc-900"
          >
            <span className="tracking-widest opacity-90">כתיבה</span>
          </a>
          <a
            href="/#blog"
            className="flex items-center gap-x-0.5 font-caravan text-lg text-zinc-900"
          >
            <span className="tracking-widest opacity-90">חנות</span>
          </a>
        </nav>
        <img
          src={Logo}
          width="40px"
          alt="Logo of website. Black Background in geographic form of Israel country. On it, double alef hebrew letters which mean Ha Ish - the Man."
          className="absolute left-3 top-0.5"
        />
      </header>
      <div className="relative min-h-screen bg-cover p-2 pb-0 md:p-8 md:pt-3 md:pb-0 lg:p-20 lg:pt-3 lg:pb-0 2xl:p-28 2xl:pt-3">
        <Heading />
        <main className="mx-auto grid max-w-[1500px] grid-cols-1 grid-rows-2 content-center items-center gap-12 md:grid-cols-2 md:grid-rows-1">
          <Description />
          <Marks />
        </main>
        <div className="m-auto mt-12 mb-14 h-[1px] w-[100%] max-w-[1700px] bg-black md:mt-24" />
        <PostCards posts={posts} />
      </div>
      <footer className="mt-20 flex h-9 items-center justify-end gap-x-5 bg-beigeDarker px-6 py-2 font-frankRe">
        <a
          href="https://twitter.com/ha_ish_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-black underline hover:text-blue-500"
        >
          Twitter
        </a>
        <span className="text-black">2022</span>
      </footer>
    </div>
  );
}
