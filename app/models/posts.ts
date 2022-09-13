import { prisma } from "~/db.server";

export const getPosts = () => {
  return prisma.posts.findMany({
    select: { created_at: true, title: true, id: true },
  });
};

export const getPost = (id: number) => {
  return prisma.posts.findUnique({
    where: { id },
  });
};
