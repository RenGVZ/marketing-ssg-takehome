import bodyParser from "body-parser";
import express from "express";
import { BlogPost } from "./schemas";

const app = express()
  .use(bodyParser.json())

  .get("/blog/:slug", (req, res) => res.send(new BlogPost(req.params.slug)));

app.listen(3001, () => {
  console.log("cms started on http://localhost:3001");
});
