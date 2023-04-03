import express from "express";
import { connectDB, getDB } from "~/config/mongodb";
import { env } from "~/config/environtment";
import { BoardModel } from "~/models/board.model.";

connectDB()
   .then(() => console.log("Connected successfully to DB server"))
   .then(() => bootServer())
   .catch((error) => {
      console.log(error);
      process.exit(1);
   });

const bootServer = () => {
   const app = express();

   app.get("/test", async (req, res) => {
      res.end("<h1>Express js succeeded</h1>");
   });

   app.listen(env.APP_PORT, env.APP_HOST, () => {
      console.log(`App is running on ${env.APP_HOST}:${env.APP_PORT}`);
   });
};
