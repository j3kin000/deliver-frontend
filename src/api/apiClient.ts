import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

const apiClient = axios.create({
  baseURL,
  withCredentials: true, // Set credentials to 'include'
});

apiClient.interceptors.request.use(
  async (request) => {
    const authorization = localStorage.getItem("access_token");
    if (authorization !== "null") {
      request.headers.setAuthorization(`Bearer ${authorization}`);
    } else {
      delete request.headers["Authorization"];
    }
    // if (process.env.NODE_ENV === "development") {
    //   console.log("requestId", request.headers);
    //   console.log("request.method", request.method);
    //   if (request?.baseURL)
    //     console.log("request.url", request?.baseURL + request?.url);
    //   console.log("request.data", JSON.stringify(request.data));
    //   console.log("request.headers", JSON.stringify(request.headers));
    // }
    return request;
  },
  async (error) => {
    console.log("request.error", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  async (response) => {
    // if (process.env.NODE_ENV === "development") {
    //   console.log("requestId", response.config.headers.requestId);
    //   console.log("response.headers", JSON.stringify(response.headers));
    //   console.log(
    //     "response.request.headers",
    //     JSON.stringify(response.config.headers)
    //   );
    //   console.log("response.status", response.status);
    //   console.log("response.data", JSON.stringify(response.data));
    // }

    return response;
  },
  async (error) => {
    if (process.env.NODE_ENV === "development") {
      console.log("request.error", error);
    }
    return Promise.reject(error?.response?.data?.message);
  }
);

export default apiClient;
