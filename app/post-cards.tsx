import { Link } from "@remix-run/react";
import { images } from "~/image-stack";
import type { SinglePost } from "~/types";

export type props = {
  posts: SinglePost[];
};

const Card = ({ post }: { post: SinglePost }) => {
  const image = images[post.id - 1];
  return (
    <Link
      to="/posts/1"
      className="bg-beigeDarker hover:cursor-pointer hover:bg-beige hover:shadow-postHover"
    >
      <img
        src={image.src}
        height="300px"
        className={`h-[200px] w-full object-cover md:h-[300px] object-${image.position}`}
        alt={image.alt}
      />
      <div className="p-4 md:p-6">
        <h3 className="mb-4 border-b-2 border-greenPrimary font-caravan text-2xl tracking-wide text-greenSecondary">
          {post.title}
        </h3>
        <p className="mb-4 font-frankRe text-2.5xl">{post.description}</p>
        <span className="mt-auto font-frankRe text-lg font-bold text-greenSecondary 2xl:text-xl">
          {new Date(post.created_at).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
};

export const PostCards = ({ posts = [] }: props) => {
  return (
    <section className="mx-auto max-w-[1800px]">
      <h2
        id="blog"
        className="mb-14 text-center font-caravan text-4xl text-greenSecondary md:text-5xl"
      >
        כתיבה
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
};
