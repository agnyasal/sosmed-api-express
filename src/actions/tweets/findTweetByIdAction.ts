import { findTweetById } from "../../repositories/tweets/findTweetById";

export const findTweetByIdAction = async (id: number) => {
  try {
    const tweet = await findTweetById(id);
    if (!tweet) {
      return {
        status: 400,
        message: "Tweet not found",
      };
    }
    return {
      status: 200,
      message: "success",
      data: tweet,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
