let fs = require("fs");
let getData = function (url,success,res) {
  fs.readFile(url,"utf-8",function (err,data) {
    if(err){
      console.log(err);
      res.sendStatus(404);
      res.end("资源文件找不到");
      return;
    }
    success(JSON.parse(data));
  });
};
let setData = function (url,data,success,fail) {
  fs.writeFile(url,JSON.stringify(data),err=>{
    if(err){
      fail(err);
      return;
    }
    success();
  })
};
module.exports={
  getData,
  setData
};