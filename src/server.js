import { mapOrder } from "./utilities/sorts.js";

import express from "express";
const app = express();

const hostname = "localhost";
const port = "8017";

app.get("/", (req, res) => {
   res.end("<h1>Express js succeeded</h1>");
});

app.listen(port, hostname, () => {
   console.log(`App is running on ${hostname}:${port}`);
});
