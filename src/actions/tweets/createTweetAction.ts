import { createTweetRepo } from "../../repositories/tweets/createTweetRepository";
import { ITweet } from "../../types/tweet.type";

export const createTweetAction = async (data: ITweet) => {

  try {
    // const { userId, tweet } = data;
    // data.userId = userId;
    // data.tweet = tweet;
    await createTweetRepo(data);    
    
    return {
      status: 200,
      message: "Create tweet success",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
