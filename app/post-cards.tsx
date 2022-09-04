import { Link } from "@remix-run/react";
import { images } from "~/image-stack";

type Post = {
  id: number;
  created_at: string;
  updated_at?: string;
  content?: string;
  slug?: string;
  title: string;
};

const Card = ({ post }: { post: Post }) => {
  console.log("post", post);
  return (
    <Link
      to="/posts/1"
      className="bg-beigeDarker hover:cursor-pointer hover:bg-beige hover:shadow-postHover"
    >
      <img
        src={images[post.id - 1].src}
        height="300px"
        className={`h-[200px] w-full object-cover md:h-[300px] object-${
          images[post.id - 1].position
        }`}
      />
      <div className="p-4 md:p-10">
        <h3 className="mb-4 border-b-2 border-greenSecondary font-caravan text-2xl tracking-wide text-greenSecondary">
          {post.title}
        </h3>
        <p className="mb-4 font-frankRe text-2xl">
          אינה שלנו. אם אני אצליח לתקן ולשפר כאן אפילו כמה דברים קטנים
        </p>
        <span className="font-caravan text-base tracking-wider text-greenSecondary">
          {post.created_at}
        </span>
      </div>
    </Link>
  );
};

interface Props {
  posts: Post[];
}

export const PostCards = ({ posts = [] }: Props) => {
  console.log("possts", posts);
  return (
    <section className="mx-auto max-w-[1800px]">
      <h2 className="mb-14  text-center font-caravan text-4xl text-greenSecondary md:text-5xl">
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
