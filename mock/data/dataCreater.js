let util = require("../util");
let creator = function () {
  let ary = [];
  for (let i = 0; i<100; i++) {
    let obj = {};
    obj.productId=i;
    obj.isHot = i%2===0?true:false;
    obj.isCheap= i%3===0?true:false;
    obj.productHot=Math.round(Math.random()*(1500-500)+500);
    obj.productQuality = Math.round(Math.random()*100);
    let productClass =Math.round(Math.random()*3);
    switch (productClass){
      case 0:
        obj.productTitle="小米（MI）NOTE3 6GB+64GB 移动联通电信4G手机 全网通 双卡双待";
        obj.productInfo="该商品支持分期购买";
        obj.productImg="http://localhost:9001/img/products/phone.jpg";
        obj.productPrice=Math.round(Math.random()*(2000-500)+500);
        obj.productClass="phone";
        break;
      case 1:
        obj.productTitle="小米圈铁耳机 Pro (黑色）";
        obj.productInfo="该商品支持分期购买";
        obj.productImg="http://localhost:9001/img/products/earphone.jpg";
        obj.productPrice=Math.round(Math.random()*500);
        obj.productClass="earPhone";
        break;
      case 2:
        obj.productTitle="小米笔记本Air 13.3 带独立显卡的高性能的轻薄笔记本 配置 i7 处理器 / i5处理器";
        obj.productInfo="该商品支持分期购买";
        obj.productImg="http://localhost:9001/img/products/computer.jpg";
        obj.productPrice=Math.round(Math.random()*(10000-3000)+3000);
        obj.productClass="computer";
        break;
      case 3:
        obj.productTitle="米家扫地机器人 行之有据，我会规划家里的清扫路径";
        obj.productInfo="该商品支持分期购买";
        obj.productImg="http://localhost:9001/img/products/household.jpg";
        obj.productPrice=Math.round(Math.random()*(1000-500)+500);
        obj.productClass="household";
        break;
    }
    ary.push(obj);
  }
  return ary;
};


util.setData("./product.json",creator(),()=>{
  console.log("成了");},(err)=>{
  console.log("失败了");
});

