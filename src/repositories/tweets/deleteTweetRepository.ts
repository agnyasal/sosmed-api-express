import { prisma } from "../../helper/prisma";

export const deleteTweetRepository = async (id: number) => {
  try {
    const result = await prisma.tweets.delete({
      where: { id },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
