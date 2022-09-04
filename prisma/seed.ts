import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  const posts = await prisma.posts.findMany();
  console.log("posts", posts);
  await prisma.posts
    .create({
      data: {
        content:
          "this is my ocntent sdfkjhsdflkjhsflkjhsdlfkhsdfkhskdfjhklsdlfsjhjdfk",
        title: "this is fisrtst trisofs",
        description: "this is my first descriptno",
      },
    })
    .then(() => console.log("created 👍🏻"))
    .catch((err) => console.log("errror 👎🏼", console.error(err)));
}

seed();
