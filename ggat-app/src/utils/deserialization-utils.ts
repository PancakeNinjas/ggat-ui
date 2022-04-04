export function deserializeArray<T>(array: any, deserialize: (input: any) => T): T[] | undefined {
  return Array.isArray(array) ? array.map(deserialize) : undefined;
}
