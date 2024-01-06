import { getTweetsByUserIdRepo } from "../../repositories/tweets/getTweetsByUserId";

export const getTweetsByUserIdAction = async (userId: number) => {
  try {
    const tweets = await getTweetsByUserIdRepo(userId);
    if (!tweets) {
      return {
        status: 400,
        message: "data not found",
      };
    }
    return {
      status: 200,
      message: "success get data",
      data: tweets,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
