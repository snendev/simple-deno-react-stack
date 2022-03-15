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

Advance to the next commit to create a client bundle for dynamic functionality on the client.
