import { getAllTweets } from "../../repositories/tweets/getAllTweets";

export const allTweetsAction = async () => {
  try {
    const allTweets = await getAllTweets();
    return {
      status: 200,
      message: "success",
      data: allTweets,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
