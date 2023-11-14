import ReactDOM from "react-dom"
import { BlogProps } from "./types"
import { BlogPost } from "./pages/BlogPost"

declare global {
  interface Window {
    __BLOG_PROPS__: BlogProps
  }
}

if (typeof window !== "undefined") {
  ReactDOM.hydrate(
    <BlogPost {...window.__BLOG_PROPS__} />,
    document.getElementById("root")
  )
}
