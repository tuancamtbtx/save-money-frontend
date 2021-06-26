import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "./auth";

declare var global;
global.headers = {
  Accept: "application/json",
};
global.authToken = "";

export function setGlobalAuthToken(authToken):void {
  if (authToken) {
    global.authToken = authToken;
  }
}
export function setGlobalHeaders(headers):void {
  if (headers) {
    global.headers = {
      ...global.headers,
      ...headers,
    };
  }
}

export const getHeaders:any = authToken => {
  const currentToken = process.browser ? getToken() : authToken
  setGlobalAuthToken(currentToken)
  global.headers = {
    ...global.headers,
    Authorization: 'jwt'//global.authToken,
  }
  return global.headers
}

const getAttributes = (props = {}) => ({
  cache: true,
  headers: getHeaders(null),
  ...props
})


const customAxios = func => (url, ...args) => {
  return new Promise((resolve, reject) => {
    func(url, ...args)
      .then(({ data, status }) => {
        resolve({ data, status, success: true })
      })
      .catch(e => {
        if (e.response) {
          const { data, status } = e.response
          resolve({ data, status, error: true })
        } else {
          reject(e)
        }
      })
  })
}
export default {
  get: (url, args = {}) => {
    return customAxios(axios.get)(url, getAttributes(args))
  },
  post: (url, data, args = {}) =>
    customAxios(axios.post)(url, data, getAttributes(args)),
  patch: (url, data, args = {}) =>
    customAxios(axios.patch)(url, data, getAttributes(args)),
  put: (url, data, args) =>
    customAxios(axios.put)(url, data, getAttributes(args)),
  delete: (url, args) => customAxios(axios.delete)(url, getAttributes(args))
}
