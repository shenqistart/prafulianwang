import axios from "axios";
axios.defaults.baseURL="http://localhost:9001";
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

//登陆{username,password}
// success:"",fail:"不存在的用户名",user:{}
// {success:"登陆成功",user}
// {success:"",fail:"账号或密码错误",user:{}}
export let login=(data)=>{
  return axios.post(`/login`,data);
};
//注册{username,password}
// {fail:"注册失败,已经存在的用户名"}
//{success:"注册成功"}
// {fail:"注册失败"}
export let reg=(data)=>{
  console.log(data,axios.post(`/reg`,data),'333');
  return axios.post(`/reg`,data);
};
//通过用户id获取购物车信息
// {product:req.productData[item.productId],count:item.count}
export let getCartProductList=(id)=>{
  return axios.get(`/CartProductList/${id}`);
};

//更新购物车信息
export let updateCartProduct = (data)=>{
  return axios.post('/updateCart',data);
};

//更新购物车后重新获取购物车内容
export let getNewCart = (userId)=>{
  return axios.get(`/getNewCart/${userId}`);
};