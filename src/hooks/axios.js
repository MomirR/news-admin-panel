// import React from "react";
import axiosMain from "axios";
//news.thinksmart.rs/api
export const withTokenAxios = axiosMain.create({
  baseURL: "https://news.thinksmart.rs/api",
  headers: { Authorization: localStorage.getItem("token") }
});
export const axios = axiosMain.create({
  baseURL: "https://news.thinksmart.rs/api"
});
