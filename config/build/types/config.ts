export type BuildMode = "production" | "development";

export interface BuildPath {
  entry: string;
  build: string;
  html: string;
}

export interface buildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
}
