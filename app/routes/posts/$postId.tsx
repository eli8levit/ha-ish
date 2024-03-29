import { useParams } from "react-router";
import { images } from "~/image-stack";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { marked } from "marked";
import { getPost } from "~/models/posts";
import { useLoaderData } from "@remix-run/react";
import type { SinglePost } from "~/types";

export const meta: MetaFunction = ({ params, data }) => {
  return {
    "theme-color": "black",
    title: `${data.post.title} - האיש`,
    description: data.post.description,
    "og:title": data.post.title,
    "og:description": data.post.description,
    "og:image": images[Number(params.postId)].src,
    "twitter:card": "summary_large_image",
    "twitter:title": data.post.title,
    "twitter:description": data.post.description,
    "twitter:image": images[Number(params.postId)].src,
  };
};

type LoaderData = {
  post: SinglePost | null;
  html: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const post: SinglePost | null = await getPost(Number(params.postId));
  const html = marked.parse(post?.content || "");
  return { html, post };
};

export default function Post() {
  const { postId } = useParams();
  const image = Number(postId) ? images[Number(postId)] : null;
  const { html, post } = useLoaderData<LoaderData>();

  return (
    <div>
      {image ? (
        <div
          className={`h-[400px] w-full bg-[url('/57.jpeg')] bg-[length:300px] bg-repeat`}
        ></div>
      ) : null}
      <div className="flex">
        <a
          href="/#blog"
          className="group mr-auto block flex items-center font-frankRe text-3xl text-greenSecondary hover:text-greenPrimary"
        >
          <span className="ml-2 ">חזרה</span>
          <svg
            className="stroke-greenSecondary group-hover:stroke-greenPrimary "
            width="87"
            height="39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 19h83M14 2.5 4 19l10 18" strokeWidth="6" />
          </svg>
        </a>
      </div>
      <section className="p-2 md:p-12">
        <h1 className="break-all font-caravan text-7xl text-greenSecondary md:text-9xl">
          {post?.title}
        </h1>
        <div className="mb-14 h-[6px] w-[1000px] max-w-full bg-greenPrimary" />
        <div
          className="mx-auto max-w-[900px] break-all text-justify font-frankRe text-2xl text-black paragraph:my-12 md:text-3xl md:leading-12"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </div>
  );
}
