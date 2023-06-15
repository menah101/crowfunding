import Cookies from "js-cookie";
const accessTokenKey = "crow_access_token";
const refreshTokenKey = "crow_refresh_token";
const objCookies = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};
/**
 * Function save token
 * @param {string} access_token 
 * @param {string} refresh_token 
 */
export const saveToken = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objCookies,
    });
    Cookies.set(refreshTokenKey, refresh_token, {
      ...objCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};

/**
 * Function get token
 * @param {string} access_token 
 * @param {string} refresh_token 
 */
export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};

/**
 * Function logout user
 */
export const logOut = () => {
  const access_token = Cookies.get(accessTokenKey);
  if (access_token) {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};