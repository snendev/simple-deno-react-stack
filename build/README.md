# Build scripts

This directory houses some simple build scripts to help build the web bundle.

## build.ts

This file bundles client files using [esbuild](https://esbuild.github.io). The
configuration is set up to minimize bundle size when code splitting by letting
the browser import remote resources, but no further optimization is specified.
It also calls the palette builder.

## compress.ts

This exports a single function which compresses all files in the directory path
passed as argument. This is used to compress all `/dist` assets.
