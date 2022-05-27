export const generateToastId = (): string =>
  Math.random().toString(36).substring(2, 9);
