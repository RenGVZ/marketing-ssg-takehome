import createCache from "@emotion/cache";
import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";

export const cache = createCache({ key: "emotion-cache" });
export const emotionServer = createEmotionServer(cache);
export { EmotionCacheProvider };
