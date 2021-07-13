import { RequestUtils } from "../utils";

import { API_HOST } from "../sysconfig";

async function request({ url, params, method, body }) {
  try {
    const headers = {};
    const parameters = { ...params };
    let link = url;

    if (url?.indexOf("http") === -1) {
      link = API_HOST + url;
    }
    if (parameters) {
      const parameterStr = RequestUtils.convertObjectToParameter(parameters);
      if (parameterStr.length > 0)
        link += (link.indexOf("?") >= 0 ? "&" : "?") + parameterStr;
    }

    const res = await fetch(link, {
      method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: typeof body === "object" ? JSON.stringify(body) : body,
    });

    const result = await res.json();

    return result;
  } catch (err) {
    return {
      error: err,
      data: [],
      message: err.message || " Hệ thống đã xảy ra lỗi .",
    };
  }
}

export async function GET(props) {
  return request({ ...props, method: "GET" });
}

export async function POST(props) {
  return request({ ...props, method: "POST" });
}

export default {
  GET,
  POST,
};
