export const urlEncoder = (url: string) =>
  encodeURIComponent(url)
    .replace(/%20/g, "-")
    .replace(/%3F/g, "")
    .replace(/%2C/g, "");
