import express from "express";

const app = express();
app.use(express.json());

import userRouter from "./routes/user.route";
import messageRouter from "./routes/message.route";

app.use('/api/v1/user', userRouter);
app.use('/api/v1/message', messageRouter);

export {
  app
};
