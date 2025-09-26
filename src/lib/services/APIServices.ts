import axios from "axios";
import { BASE_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${
      JSON.parse(sessionStorage.getItem("userData") || "{}").token
    }`,
    withCredentials: true,
    // 'content-type': 'multipart/form-data'
  },
  timeout: 30000,
  timeoutErrorMessage: "Network timeout, please try again later",
  // withCredentials: true,
});

export const SignInAPI = (payload: any) => {
  const url = BASE_URL + `/users/signin`;
  return axiosInstance.post(url, payload);
};

export const SignUpAPI = (payload: any) => {
  const url = BASE_URL + `/users/signup`;
  return axiosInstance.post(url, payload);
};

export const CreateProjectAPI = (payload: any) => {
  const url = BASE_URL + `/projects/create`;
  return axiosInstance.post(url, payload);
};

export const CreateTaskAPI = (payload: any) => {
  const url = BASE_URL + `/tasks/create`;
  return axiosInstance.post(url, payload);
};

export const AddCommentAPI = (payload: any) => {
  const url = BASE_URL + `/comments/create`;
  return axiosInstance.post(url, payload);
};

export const GetProjectAPI = () => {
  const url = BASE_URL + `/projects/get-projectsby-userid`;
  return axiosInstance.get(url);
};

export const GetAllProjectsAPI = () => {
  const url = BASE_URL + `/projects/get-projects`;
  return axiosInstance.get(url);
};

export const GetAllUsersAPI = () => {
  const url = BASE_URL + `/users/get-all-users`;
  return axiosInstance.get(url);
};

export const GetMyTasksAPI = () => {
  const url = BASE_URL + `/tasks/assigned-for`;
  return axiosInstance.get(url);
};

export const GetMySeachedTasksAPI = (searchQuery) => {
  const url = BASE_URL + `/tasks/search-tasks/?query=${searchQuery}`;
  return axiosInstance.get(url);
};

export const GetMyNotificationsAPI = () => {
  const url = BASE_URL + `/notifications/get-notifications`;
  return axiosInstance.get(url);
};

export const UpdateTaskStatusAPI = (payload) => {
  const url = BASE_URL + `/tasks/update-status`;
  return axiosInstance.put(url,payload);
};

export const MarkAsReadStatusAPI = (id) => {
  const url = BASE_URL + `/notifications/check-notification/${id}`;
  return axiosInstance.put(url);
};

export const RemoveCommentsAPI = (cmtId) => {
  const url = BASE_URL + `/comments/remove-cmt/${cmtId}`;
  return axiosInstance.delete(url);
};
