import { parse } from "https://deno.land/std@0.120.0/flags/mod.ts";
import * as esbuild from "https://deno.land/x/esbuild@v0.14.11/mod.js";

import compressStaticFiles from "./compress.ts"

const { minify: shouldMinify, sourcemap } = parse(Deno.args);

// The entrypoints to compile
// Useful if different application bundles are needed, e.g. if we want to ship a legacy bundle.
const entryPoints = [
  "src/client/entrypoint.tsx",
];

console.log(`Bundling ${entryPoints.length} files...`);

const config: esbuild.BuildOptions = {
  entryPoints,
  // import all typescript files in the app
  loader: {
    ".ts": "ts",
    ".tsx": "tsx",
  } as const,
  // use ESM syntax in exported bundle
  format: "esm" as const,
  bundle: true,
  // enable code-splitting https://esbuild.github.io/api/#splitting
  // this helps minimize the application bundle size since each route can import only the code it needs
  // this also does not bundle remote resources (AKA any depedency code)!
  splitting: true,
  // use the most modern ECMA syntax!
  target: "esnext",
  // whether to minify the output JS code
  minify: !!shouldMinify,
  // whether to output sourcemaps that define links between compiled JS code and the original source code
  sourcemap: !!sourcemap,
  // transforms our JSX using the relevant factories
  // we could choose to preserve the JSX instead, but we would need to maintain the relevant pragmas
  // https://www.gatsbyjs.com/blog/2019-08-02-what-is-jsx-pragma/
  jsx: "transform" as const,
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  // output directory
  outdir: "dist",
  // a set of import patterns to avoid bundling
  external: [],
};

await esbuild.build(config);
console.log(`Succesfully bundled ${entryPoints.join(", ")}.`);
esbuild.stop();

// Now, compress all files in /dist for performance.
console.log("Compressing static resources...")
await compressStaticFiles("dist");

console.log("Done!")
