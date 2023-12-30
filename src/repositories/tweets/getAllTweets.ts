import { prisma } from "../../helper/prisma";

export const getAllTweets = async () => {
  try {
    const allTweets = await prisma.tweets.findMany({
      include: {
        user: true,
      },
    });
    return allTweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
