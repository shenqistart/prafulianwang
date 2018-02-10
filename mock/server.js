let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let util = require("./util.js");
let app = express();
<<<<<<< HEAD


app.listen(9001);
app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname)));
=======
let session = require("express-session");
app.listen(9001);
app.use(bodyParser.json());
app.use(session({
  resave:true,    //每次重新保存
  saveUninitialized:false,
  secret:'hhh',
}));
app.use(express.static(path.resolve(__dirname,'../dist')));//在目录下的dist文件件中找文件
>>>>>>> a34bf4cf7a3517dc6b7ba03f3acd248b2e28f102
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9999");
  res.header("Access-Control-Allow-Credentials",true);
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
<<<<<<< HEAD
  if(req.method=="OPTIONS") res.sendStatus(200);
  else  next();
});
app.use(function (req,res,next) {
  //先都放在了中间件的req上
=======
  if(req.method=="OPTIONS") res.sendStatus(200);/*让options请求快速返回   发请求体的都会发一个options试探一下*/
  else  next();
});
app.use(function (req,res,next) {//先都放在了中间件的req上
>>>>>>> a34bf4cf7a3517dc6b7ba03f3acd248b2e28f102
  util.getData("./data/product.json",(data)=>{
    req.productData = data;
    req.productPhone = data.filter(item=>item.productClass=="phone");
    req.productHousehold = data.filter(item=>item.productClass=="household");
    req.productEarPhone = data.filter(item=>item.productClass=="earPhone");
    req.productComputer = data.filter(item=>item.productClass=="computer");
    req.productHot = data.filter(item=>item.isHot);
    req.productCheap = data.filter(item=>item.isCheap);
    next();
  },res);
});
app.use(function (req,res,next) {
  util.getData("./data/sliders.json",(data)=>{
    // console.log(data);
    req.slidersData = data;
    next();
  },res);
});
<<<<<<< HEAD

=======
app.use(function (req,res,next) {
  util.getData("./data/user.json",(data)=>{
    // console.log(data);
    req.userData = data;
    next();
  },res);
});
//获取某一个商品的详情信息{
//    productId:1,productTitle:"小米（MI）MIX2 6GB+64GB 移动联通电信4G手机 全网通 双卡双待",
//    productInfo:"该商品支持分期购买",
//    productImg:"http://localhost:9000/img/products/phone.jpg",
//    productPrice:1000,
//    productHot:1000,
//    productQuality:100,
//    productClass:{
//      levelOne:0,
//      levelTwo:0,
//    },
// }
>>>>>>> a34bf4cf7a3517dc6b7ba03f3acd248b2e28f102
app.get("/product/:id",function (req,res) {
  let id = req.params.id;
  let product = req.productData.find(item=>item.productId==id);
  res.json(product);
});
<<<<<<< HEAD

=======
//获取商品列表（offset,limit,hasmore） 返回:
//{
//    hasMore:
//    lists:[]
// }
>>>>>>> a34bf4cf7a3517dc6b7ba03f3acd248b2e28f102
app.get('/products/:productClass',function (req,res) {
  switch (req.params.productClass){
    case "phone":
      res.json(req.productPhone);
      break;
    case "computer":
      res.json(req.productComputer);
      break;
    case "earphone":
      res.json(req.productEarPhone);
      break;
    case "household":
      res.json(req.productHousehold);
      break;
    case "hot":
      res.json(req.productHot);
      break;
    case "cheap":
      res.json(req.productCheap);
      break;
    default:
      res.json({});
      break;
  }
});
//获取轮播图信息
app.get('/sliders',function (req,res) {
  res.json(req.slidersData);
});
//获取首页商品列表  {"phone":[],"computer":[],"household":[],"earPhone":[]}
app.get('/homeHot',function (req,res) {
  let obj = {};
  let phone=[...req.productPhone];
  let earPhone=[...req.productEarPhone];
  let computer=[...req.productComputer];
  let household=[...req.productHousehold];
  phone=phone.sort((a,b)=>(b.productHot-a.productHot)).slice(0,3);
  earPhone=earPhone.sort((a,b)=>(b.productHot-a.productHot)).slice(0,3);
  computer=computer.sort((a,b)=>(b.productHot-a.productHot)).slice(0,3);
  household=household.sort((a,b)=>(b.productHot-a.productHot)).slice(0,3);
  obj={phone,earPhone,computer,household};
  res.json(obj)
});
//更新热门商品的算法
function updateNewHot(ary) {
  let newAry=[];
  let obj={};
  while(Object.keys(obj).length<3) {
    let index = Math.round(Math.random()*(ary.length-1));
    if(obj[index]===index)continue;
    obj[index] = index;
    newAry.push(ary[index]);
  }
  return newAry;
}
//重新更新首页热门商品
app.get('/updateHomeHot',function (req,res) {
  let obj = {};
  let phone=req.productPhone.filter(item=>item.productHot>1000);
  let earPhone=req.productEarPhone.filter(item=>item.productHot>1000);
  let computer=req.productComputer.filter(item=>item.productHot>1000);
  let household=req.productHousehold.filter(item=>item.productHot>1000);
  phone = updateNewHot(phone);
  earPhone = updateNewHot(earPhone);
  computer = updateNewHot(computer);
  household = updateNewHot(household);
  obj={phone,earPhone,computer,household};
  res.json(obj);
});
<<<<<<< HEAD
=======
//购物车添加商品
app.post("/addproducttocar",function (req,res) {
  let {productId,count,userId} = req.body;
  let user =req.userData.find(item=>item.userId == userId);
  let product = user.cart.find(item=>item.productId == productId);
  if(product){
    product.count = count;
  }else{
    user.cart.push({productId,count});
  }
  console.log(JSON.stringify(req.userData));
  // util.setData("./data/user.json",)
  util.setData("./data/user.json",req.userData,()=>{
    res.json({user,success:"添加成功"});
  },()=>{
    res.json({fail:"添加失败"});
  })
});
//更新购物车内容
app.post("/updatecar",function (req,res) {
  let {productList,userId} = req.body;
  let user =req.userData.find(item=>item.userId == userId);
  user.cart=[...productList];
  // console.log(JSON.stringify(req.userData));
  // util.setData("./data/user.json",)
  util.setData("./data/user.json",req.userData,()=>{
    res.json({user,success:"更新成功"});
  },()=>{
    res.json({fail:"更新失败"});
  })
});
//更新后重新获取购物车内容
app.get("/getNewCart/:userId",function (req,res) {
  let user = req.userData.find(item=>item.userId=req.params.userId);
  res.json(user);
});
//获取购物车信息
app.get('/CartProductList/:id',function (req,res) {
  let id = req.params.id;
  let user = req.userData.find(item=>item.userId == id);
  if(!user){res.json({fail:"没有找到该用户"});}
  let productList = user.cart.map(item=>{
    return {product:req.productData[item.productId],count:item.count};
  });
  res.json(productList);
});
let crypto = require('crypto');
//用户登陆
app.post('/login',function (req,res) {
  let{username,password} = req.body;
  let user= req.userData.find(item=>item.userName==username);
  if(!user){
    res.json({success:"",fail:"不存在的用户名",user:{}});
  }
  if(user.password== crypto.createHash('md5').update(password).digest('base64')){
    res.json({success:"登陆成功",user,fail:""})
  }else{
    res.json({success:"",fail:"账号或密码错误",user:{}});
  }
});
//用户注册:
app.post('/reg',function (req,res) {
  let obj = {};
  let{username,password} = req.body;
  if(req.userData.find(item=>item.userName==username)){
    res.json({fail:"注册失败,已经存在的用户名"});
    return ;
  }
  obj.userName=username;
  password = crypto.createHash('md5').update(password).digest('base64');
  obj.password = password;
  obj.userId = new Date().getTime();
  obj.userImg="http://localhost:9001/img/users/default.png";
  obj.userSex = 0;
  obj.cart=[];
  req.userData.push(obj);
  util.setData("./data/user.json",req.userData,()=>{
    res.json({success:"注册成功"});
  },()=>{
    res.json({fail:"注册失败"})
  });

});
//修改用户信息
>>>>>>> a34bf4cf7a3517dc6b7ba03f3acd248b2e28f102
