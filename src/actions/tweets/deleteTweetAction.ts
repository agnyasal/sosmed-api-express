import { deleteTweetRepository } from "../../repositories/tweets/deleteTweetRepository";
import { getAllTweets } from "../../repositories/tweets/getAllTweets";

export const deleteTweetAction = async (id: number) => {
  try {
    await deleteTweetRepository(id);

    const tweets = await getAllTweets();
    return {
      status: 200,
      message: "success",
      data: tweets,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
