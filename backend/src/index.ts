import 'dotenv/config';
import { app } from "./app";
import { connectDb } from "./db";

const port = process.env.PORT || 8000;

const startServer = () => {
  connectDb();
  app.listen(port, () => {
    console.log(`App is running on PORT: ${port}!`)
  });
};

startServer();
