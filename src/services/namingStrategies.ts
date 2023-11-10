const buildNamingStrategy =
  (
    keyMatcher: (key: string) => boolean,
    keyReplacer: (key: string) => string
  ) =>
  (json: string) =>
    JSON.parse(json, (_, value) =>
      Object.prototype.toString.call(value) === "[object Object]"
        ? Object.entries(value).reduce(
            (acc, [k, v]) => ({
              ...acc,
              [keyMatcher(k) ? keyReplacer(k) : k]: v,
            }),
            {}
          )
        : value
    );

export const snakeToCamel = buildNamingStrategy(
  (key) => key.includes("_"),
  (key) => key.replace(/[_][0-9]/g, (group) => group.slice(-1).toUpperCase())
);
