import { prisma } from "~/db.server";

export const getPosts = () => {
  return prisma.posts
    .findMany({
      select: { created_at: true, title: true, id: true, description: true },
    })
    .then((posts) =>
      posts.map((post) => ({
        ...post,
        created_at: new Date(post.created_at).toLocaleDateString(),
      }))
    );
};

export const getPost = (id: number) => {
  return prisma.posts.findUnique({
    where: { id },
  });
};
