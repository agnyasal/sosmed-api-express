import { updateTweetRepo } from "../../repositories/tweets/updateTweetRepository";
import { ITweet } from "../../types/tweet.type";

export const updateTweetAction = async (id: number, body: ITweet) => {
  try {
    const tweet = await updateTweetRepo(id, body);
    return {
      status: 200,
      message: "Success Update",
      data: tweet,
    };
  } catch (error) {
    throw error;
  }
};
