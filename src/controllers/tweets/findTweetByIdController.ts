import { NextFunction, Request, Response } from "express";
import { findTweetByIdAction } from "../../actions/tweets/findTweetByIdAction";

export const findTweetByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await findTweetByIdAction(Number(id));

    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
