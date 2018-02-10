import axios from "axios";
axios.defaults.baseURL="http://localhost:9002";
axios.interceptors.response.use((res)=>res.data);
//获取轮播图
export let getSliders = ()=>{
  return axios.get("/sliders");
};
//获取首页热品
export let getHomeHot = ()=>{
  return axios.get("/homeHot");
};
//下拉更新首页热品
export let updateHomeHot=()=>{
  return axios.get("/updateHomeHot");
};
//根据不同类型，获取商品列表
export let getProducts=(type)=>{
  return axios.get(`/products/${type}`);
};
//获取单个商品列表
export let getOneProduct=(id)=>{
  return axios.get(`/product/${id}`);
};
