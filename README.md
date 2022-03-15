This is the first stage in a sample web application built with Deno and React 18.

This can be run with `./run.sh`, which is comprised of a single call to deno: `deno --unstable run --allow-read --allow-net ./src/server/server.ts`.

The project is organized into the following directories:
- `/assets` - a folder for images and other assets
- `/src` - a folder for all code
  - `/client` - a folder for all React code
    - `/app` - a subfolder where core application code can exist
    - `/server` - a server entrypoint including an HTML wrapper. the files in this directory stream the rendered HTML to the browser using React 18.
  - `/deps` - a folder that helps direct all local code to the correct remote dependencies (on both client and server)
  - `/server` - a folder where we define server behavior and render the React tree

The webserver is defined with SSR and serves a mix of API routes, static files, and client app routes.
It aims to show how React can be used to create reusable components for rendering dynamic pages.
It leverages React 18's support for server-rendered Suspense, lazy-loaded code resources, and suspensefully fetched data.
