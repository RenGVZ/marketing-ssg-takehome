import ReactDOM from "react-dom"
import App from "./App"
import { Props as BlogProps } from "./pages/BlogPost"

declare global {
  interface Window {
    __BLOG_PROPS__: BlogProps
  }
}

if (typeof window !== "undefined") {
  ReactDOM.hydrate(
    <App {...window.__BLOG_PROPS__} />,
    document.getElementById("root")
  )
}
