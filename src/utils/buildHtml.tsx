import React from "react";
import { renderToString } from "react-dom/server";

import { EmotionCacheProvider, cache, emotionServer } from "./emotion";
import * as favicons from "./favicons";

export function buildHtml(content: React.ReactNode) {
  const chunks = emotionServer.extractCriticalToChunks(
    renderToString(
      <EmotionCacheProvider value={cache}>{content}</EmotionCacheProvider>
    )
  );
  return `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charSet='utf-8'>
  <meta
    name='viewport'
    content='width=device-width, initial-scale=1, shrink-to-fit=no'
  >
  <link
    rel='icon'
    href='${favicons.base}'
  >
  <link
    rel='apple-touch-icon'
    sizes='180x180'
    href='${favicons.appleTouch}'
  >
  <link
    rel='icon'
    type='image/png'
    sizes='32x32'
    href='${favicons.size32}'
  >
  <link
    rel='icon'
    type='image/png'
    sizes='16x16'
    href='${favicons.size16}'
  >
  ${emotionServer.constructStyleTagsFromChunks(chunks)}
</head>
    <body>
      <div id='root'>${chunks.html}</div>
    </body>
  </html>
`;
}
