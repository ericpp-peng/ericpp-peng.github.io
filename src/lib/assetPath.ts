// Next.js prefixes Link URLs automatically; public files need the same prefix.
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
