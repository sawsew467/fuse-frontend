import nookies from "nookies";

const getCookiesByKey = (context: any, key: string) =>
  nookies.get(context)[key];

const setCookiesByKey = (context: any, key: string, value: any) => {
  nookies.set(context, key, "value", value);
};

const deleteCookiesByKey = (ctx: any, key: string, option: object) =>
  nookies.destroy(ctx, key, option);

export { getCookiesByKey, setCookiesByKey, deleteCookiesByKey };
