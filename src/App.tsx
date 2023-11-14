import React from "react"
import { BlogPost, Props as BlogProps } from "./pages/BlogPost"
import { cache, EmotionCacheProvider } from "./utils/emotion"

interface AppProps extends BlogProps {}

const App = (props: AppProps) => {
  return (
    <EmotionCacheProvider value={cache}>
      <BlogPost {...props} />
    </EmotionCacheProvider>
  )
}

export default App
