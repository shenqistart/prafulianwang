let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let util = require("./util.js");
let app = express();
let session = require("express-session");
app.listen(9002);
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname)));
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9999");
  res.header("Access-Control-Allow-Credentials",true);
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  if(req.method=="OPTIONS") res.sendStatus(200);/*让options请求快速返回   发请求体的都会发一个options试探一下*/
  else  next();
});
app.use(function (req,res,next) {//先都放在了中间件的req上
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
app.get("/product/:id",function (req,res) {
  let id = req.params.id;
  let product = req.productData.find(item=>item.productId==id);
  res.json(product);
});
//获取商品列表（offset,limit,hasmore） 返回:
//{
//    hasMore:
//    lists:[]
// }
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