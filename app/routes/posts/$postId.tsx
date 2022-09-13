import { useParams } from "react-router";
import { images } from "~/image-stack";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { marked } from "marked";
import { getPost } from "~/models/posts";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  "theme-color": "black",
});

export const loader: LoaderFunction = async ({ params }) => {
  const post = await getPost(Number(params.postId));
  const html = marked.parse(post?.content || "");
  return { html };
};

export default function Post() {
  const { postId } = useParams();
  const image = Number(postId) ? images[Number(postId)] : null;
  const { html } = useLoaderData();

  return (
    <div>
      {image ? (
        <img
          src={image.src}
          className="mx-auto mb-4 h-[300px] w-full object-cover md:h-[400px]"
        />
      ) : null}
      <section className="p-2 md:p-12">
        <h1 className="font-caravan text-7xl text-greenSecondary md:text-9xl">
          תפסיקו להיות בטלפון בנהיגה
        </h1>
        <div className="mb-14 mt-10 h-[6px] w-[1000px] max-w-full bg-greenSecondary" />
        <div
          className="mx-auto max-w-[900px] text-justify font-frankRe text-2xl text-black paragraph:my-12 md:text-3xl md:leading-12"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </div>
  );
}
