import { NextFunction, Request, Response } from "express";
import { allTweetsAction } from "../../actions/tweets/allTweetsAction";

export const allTweetsContoller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await allTweetsAction();

    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
