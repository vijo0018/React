/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

//https://auralinna.blog/post/2019/global-http-request-and-response-handling-with-the-axios-interceptor/
//TSX to include react components
export default () => {
    const axiosInstance = axios.create({
        baseURL: window.location.origin,
    });

    axiosInstance.defaults.headers["Content-Type"] = "application/json";
    axiosInstance.defaults.headers["X-Requested-With"] = "XMLHttpRequest";

    const requestHandler = (request: AxiosRequestConfig) => {
        return request;
    };

    const errorHandler = (error: AxiosError) => {
        if (error.response?.status === 503) {
            //503 SERVICE UNAVAILABLE
        } else if (error.response?.status === 401) {
            //unauthorized
        } else if (error?.message && error?.response) {
          //display error?
        }
        return Promise.reject({ ...error });
    };

    const successHandler = (response: AxiosResponse) => {
        return response;
    };

    axiosInstance.interceptors.request.use((request) => requestHandler(request));
    axiosInstance.interceptors.response.use(
        (response) => successHandler(response),
        (error) => errorHandler(error),
    );

    return axiosInstance;
};
