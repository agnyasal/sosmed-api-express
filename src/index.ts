import express from "express";
import { NextFunction, Request, Response } from "express";
import cors from "cors";
import userRouters from "./routers/usersRouters";
import tweetsRouters from "./routers/tweetsRouters";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouters);
app.use("/tweets", tweetsRouters);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
