import { prisma } from "../../helper/prisma";
import { ITweet } from "../../types/tweet.type";

export const createTweetRepo = async (data: ITweet) => {
  try {
    const { userId, tweet } = data;
    const createTweet = await prisma.tweets.create({
      data: {
        userId,
        tweet,
      },
    });

    return createTweet;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
