import express from "express";
import serverless from "serverless-http";
import path from "path";
import App from "./App";

import { Props as BlogPostProps } from "./pages/BlogPost";
import { client } from "./services/cms";

import { buildHtml } from "./utils/buildHtml";

const app = express();
const publicPath = path.resolve(__dirname, "../../../public");

app
  .use(
    `/public`,
    express.static(publicPath, { maxAge: 365 * 24 * 60 * 60 * 1000 })
  )
  .get("/blog/posts/:slug", async (req, res) => {
    const data = await client.getBlogPost<BlogPostProps>(req.params.slug);
    const html = buildHtml(<App {...data} />);
    res.status(200).header("Content-Type", "text/html").send(html);
  });

export const handler = serverless(app);
