import { prisma } from "../../helper/prisma";
import { ITweet } from "../../types/tweet.type";

export const updateTweetRepo = async (id: number, body: ITweet) => {
  try {
    const result = await prisma.tweets.update({
      where: { id },
      data: body,
    });

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
