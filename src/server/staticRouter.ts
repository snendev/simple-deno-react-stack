import { Router } from "../deps/oak.ts";

// handle static asset requests (ts, js, sourcemaps, css, images, etc)

const staticRouter = new Router();

// images, videos, etc.
staticRouter.get(
  "/assets/(.+)",
  async (context, next) => {
    const { 0: path } = context.params;
    try {
      await context.send({
        root: `${Deno.cwd()}/assets`,
        path,
      });
    } catch (_error) {
      next();
    }
  },
);

// any requests that match a file in `/dist` should be served statically
staticRouter.get(
  "/(.+)",
  async (context, next) => {
    const { 0: path } = context.params;
    try {
      await context.send({
        root: `${Deno.cwd()}/dist`,
        path,
      });
    } catch (_error) {
      next();
    }
  },
);

export default staticRouter;
