import { prisma } from "../../helper/prisma";

export const getTweetsByUserIdRepo = async (userId: number) => {
  try {
    const tweets = await prisma.tweets.findMany({
      where: {
        userId,
      },
      include: {
        user: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    return tweets;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
