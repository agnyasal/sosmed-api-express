import { NextFunction, Request, Response } from "express";
import { updateTweetAction } from "../../actions/tweets/updateTweetAction";

export const updateTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const tweet = await updateTweetAction(Number(id), req.body);
    res.status(tweet.status).send(tweet);
  } catch (error) {
    next(error);
  }
};
