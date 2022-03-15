/**
 * Applies handleFile recursively to each entry in the directory tree.
 *
 * @param path The current directory being walked.
 * @param handleFile The callback to invoke for files found while walking the tree.
 */
export default async function walkDirectory(
  path: string,
  handleFile: (path: string, name: string) => Promise<void>
): Promise<void> {
  for await (const { name, isDirectory, isFile } of Deno.readDir(path)) {
    if (isDirectory) await walkDirectory(`${path}/${name}`, handleFile)
    if (isFile) await handleFile(path, name)
  }
}
