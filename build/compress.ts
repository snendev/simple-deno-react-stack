import { gzipFile } from "https://deno.land/x/compress@v0.3.6/mod.ts";

import walkDirectory from "./walkDirectory.ts"

// When possible, Oak (our webserver library) will serve gzipped versions of assets.
// https://deno.land/x/oak@v10.4.0/send.ts#L69
// This is why we use `context.send` in `src/server/staticRouter.ts`! 
// Gzipping reduces file sizes and browsers will supply Accept-Encoding headers when they support gzipped content.
// So all we have to do is create the gzipped files and viola!

/**
 * Creates a gzipped version of the source file at the given location.
 *
 * @param path The path to the file's directory.
 * @param name The filename to compress.
 */
async function compressFile(path: string, name: string): Promise<void> {
  const currentPath = `${path}/${name}`;
  await gzipFile(currentPath, `${currentPath}.gz`);
}

export default async function compressStaticFiles(path: string) {
  await walkDirectory(path, compressFile)
}
