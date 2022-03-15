import { Application } from "../deps/oak.ts";

import render from "../client/server/render.tsx";

import apiRouter from "./apiRouter.ts";
import staticRouter from "./staticRouter.ts";

const app = new Application();

app.use(async (context, next) => {
  try {
    return await next();
  } catch (error) {
    console.error(error);
    context.throw(500);
  }
});

// handle api routes
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
// handle static resource requests
app.use(staticRouter.routes());
app.use(staticRouter.allowedMethods());
// define any other routers, redirects, etc.

// handle everything else as an app route
app.use(async (context) => {
  const nodeStream = await render(context.request.url);
  context.response.body = nodeStream;
});

console.log("Listening...");
app.listen(`:${Deno.env.get("PORT") ?? "8080"}`);
