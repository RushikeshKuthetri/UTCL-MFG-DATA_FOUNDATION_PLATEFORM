import { ROOT_URL_FRONTEND } from "../../base";

let openWindows = {
  mimics: "",
  cbm: "",
  opt: "",
  processopt: "",
  trends: "",
  datadownload: "",
  reports: "",
  tagutility: ""
};
const openurl = (url, isGrafana) => {
  openWindows[!isGrafana ? url : "trends"] = !isGrafana
    ? window.open(ROOT_URL_FRONTEND + url)
    : window.open(url);
};
export const openWindow = (url, isGrafana) => {
  if (openWindows[!isGrafana ? url : "trends"].closed) {
    openWindows[!isGrafana ? url : "trends"] = "";
  }
  // if (!openWindows[url]) {
  openurl(url, isGrafana);
  // } else {
  //   alert("Already Open");
  // }
};
