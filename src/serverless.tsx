import express from "express";
import serverless from "serverless-http";
import path from "path";

import { BlogPost } from "./pages/BlogPost";
import { BlogProps } from "./types";
import { client } from "./api/cms";

import { buildHtml } from "./utils/buildHtml";

const app = express();
const publicPath = path.resolve(__dirname, "../../../public");

app
  .use(
    `/public`,
    express.static(publicPath, { maxAge: 365 * 24 * 60 * 60 * 1000 })
  )
  .get("/blog/posts/:slug", async (req, res) => {
    const data = await client.getBlogPost<BlogProps>(req.params.slug);
    const html = buildHtml(<BlogPost {...data} />);
    res.status(200).header("Content-Type", "text/html").send(html);
  });

export const handler = serverless(app);
