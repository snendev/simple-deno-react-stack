import { Router } from "../deps/oak.ts";
import { contentType } from "../deps/media-types.ts";

import type { DBData } from "../types.ts";

const DATA: DBData[] = [
  { label: "first-value", value: 0 },
  { label: "second-value", value: 1 },
  { label: "third-value", value: 2 },
]

const apiRouter = new Router();

apiRouter.get("/api/data", (context) => {
  context.response.type = contentType(".json");
  context.response.body = JSON.stringify(DATA);
});

export default apiRouter;
