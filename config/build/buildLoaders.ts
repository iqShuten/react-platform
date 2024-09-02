import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typesriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [typesriptLoader];
}
