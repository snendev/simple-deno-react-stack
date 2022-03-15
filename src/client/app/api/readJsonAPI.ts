import suspendData from "./suspendData.ts";

// During a server-side render, a typical data request won't work, so we need to build a full href in that case.
// It might seem a little silly to send an HTTP request to itself, but it avoids the need to diverge code paths between client and server.
// Optimizing this cost away is good, but we ignore it since this exists for demonstrative purposes.
// Use a React-recommended data fetching solution like react-query or apply a solution specific to your purposes instead.
// If a HOST env variable is defined, use that; otherwise, we are probably in development, so reference the local server.
function getDenoHost() {
  return Deno.env.get("HOST") ?? `http://localhost:${Deno.env.get("PORT") ?? "8080"}`
}

const HOST = typeof Deno === "undefined" ? "" : getDenoHost()

/**
 * Makes a request to a JSON endpoint and returns the data suspensefully.
 * Uses suspendData under the hood and allows you to assert the response type using the generic argument.
 * 
 * @param endpoint The path to the server API endpoint.
 * @param args Any argument path elements to append to the endpoint.
 * @returns The result of applying `response.json()` to the fetch response.
 */
export default function readJsonAPI<T>(
  endpoint: string,
  ...args: string[]
): T {
  const pathname = `${HOST}/api/${endpoint}${args.length > 0 ? "/" : ""}${args.join('/')}`;

  return suspendData(
    pathname,
    async () => {
      const response = await fetch(pathname);
      return await response.json() as T;
    },
  );
}
