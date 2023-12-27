import { prisma } from "../../helper/prisma";

export const getAllTweets = async () => {
  try {
    const allTweets = await prisma.tweets.findMany();
    return allTweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
