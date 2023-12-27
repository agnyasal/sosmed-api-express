import { prisma } from "../../helper/prisma";

export const findTweetById = async (id: number) => {
  try {
    const tweet = await prisma.tweets.findUnique({
      where: { id },
    });

    return tweet;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
