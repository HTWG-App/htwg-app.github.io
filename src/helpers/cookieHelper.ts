/**
 * Creates a cookie.
 * @param options
 * @returns {string}
 */
export function cookieCreator(options: {
  key: string;
  value: string;
  expiration: number;
}): string {
  const { key, value, expiration } = options;
  const d = new Date();
  d.setTime(d.getTime() + expiration * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  return `${key}=${value};${expires};path=/`;
}

/**
 * Returns the value of a cookie.
 * @param key
 * @returns {string|null}
 */
export function cookieReader(key: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);
  let val = null;
  if (parts.length === 2) {
    val = parts.pop()?.split(";")?.shift();
  }
  return val || null;
}
