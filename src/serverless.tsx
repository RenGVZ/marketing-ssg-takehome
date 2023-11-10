import express from "express";
import serverless from "serverless-http";

import { BlogPost, Props as BlogPostProps } from "./pages/BlogPost";
import { client } from "./services/cms";

import { buildHtml } from "./utils/buildHtml";

const app = express();

app
  .use(
    `/public`,
    express.static("../public", { maxAge: 365 * 24 * 60 * 60 * 1000 })
  )
  .get("/blog/posts/:slug", async (req, res) => {
    const data = await client.getBlogPost<BlogPostProps>(req.params.slug);
    const html = buildHtml(<BlogPost {...data} />);
    res.status(200).header("Content-Type", "text/html").send(html);
  });

export const handler = serverless(app);
