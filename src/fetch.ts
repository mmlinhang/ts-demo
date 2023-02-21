// 将axios封装为fetch
import axios from "axios";

function checkStatus(response: any) {
  // 隐身模式首次打开问题
  if (!response) {
    return;
  }
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 304 ||
    response.status === 404
  ) {
    return response;
  }
  let message: string | null = null;
  switch (response.status) {
    case 404:
      message = "访问路径不存在";
      break;
    case 500:
      message = "服务器错误";
      break;
    default:
      message = null;
  }
  return {
    code: response.status,
    message: message || response.statusText,
    data: response.statusText,
  };
}

function checkCode(response: any) {
  const res = response && response.data;
  const { code, data } = res;
  return res;
}

export default {
  post(url: string, headers: any, data: any) {
    return axios({
      method: "post",
      url,
      data: data,
      timeout: 60000,
      headers: headers,
    })
      .then(checkStatus)
      .then(checkCode);
  },
  get(url: string, headers: any, data?: any) {
    return axios({
      method: "get",
      url,
      params: data && data.params,
      timeout: 60000,
      headers: headers,
    })
      .then(checkStatus)
      .then(checkCode);
  },
  put(url: string, headers: any, data: any) {
    return axios({
      method: 'put',
      url,
      data: data,
      timeout: 60000,
      headers: headers,
    })
      .then(checkStatus)
      .then(checkCode);
  }
};
