const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "capdoi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ex 卝 বয়ফ্রেন্ডヅ",
  prefix:true,
  description: "",
  category: "Random-img",
  usages: "capdoi",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
  var link = [
  "https://i.imgur.com/9w7x2Cw.jpg",
"https://i.imgur.com/H9MgP90.jpg",
"https://i.imgur.com/eY2MzuE.jpg",
"https://i.imgur.com/zRKlBUV.jpg",
"https://i.imgur.com/Lawlwhq.jpg",
"https://i.imgur.com/vzEokbK.jpg",
"https://i.imgur.com/tWj0I7E.jpg",
"https://i.imgur.com/d1x0S2w.jpg",
"https://i.imgur.com/NHYAVTZ.jpg",
"https://i.imgur.com/o0ngwMQ.jpg",
"https://i.imgur.com/sNVf0Ef.jpg",
"https://i.imgur.com/9k9UUfH.jpg",
"https://i.imgur.com/Tt8Zli4.jpg",
"https://i.imgur.com/grcKilR.jpg",
"https://i.imgur.com/j7eVikx.jpg",
"https://i.imgur.com/kYUQbSL.jpg",
"https://i.imgur.com/ctYttNQ.jpg",
"https://i.imgur.com/B0I5gsy.jpg",
"https://i.imgur.com/QMpSGPH.jpg",
"https://i.imgur.com/Mk26CWB.jpg",
"https://i.imgur.com/nKXzlIp.jpg",
"https://i.imgur.com/CScNOr6.jpg",
"https://i.imgur.com/NapZe2o.jpg",
"https://i.imgur.com/9neTirL.jpg",
"https://i.imgur.com/I2Z0Tup.jpg",
"https://i.imgur.com/HcTgLiQ.jpg",
"https://i.imgur.com/GHN5xbJ.jpg",
"https://i.imgur.com/PtHTPl5.jpg",
"https://i.imgur.com/w68tmXc.jpg",
"https://i.imgur.com/CVYc6OD.jpg",
"https://i.imgur.com/EDOdweV.jpg",
"https://i.imgur.com/8Z1EigX.jpg",
"https://i.imgur.com/80NSZp6.jpg",
"https://i.imgur.com/fq3re7r.jpg",
"https://i.imgur.com/NUg856l.jpg",
"https://i.imgur.com/gklngd5.jpg",
"https://i.imgur.com/dVh9i2n.jpg",
"https://i.imgur.com/Cwl2Gt9.jpg",
"https://i.imgur.com/XgOH5gt.jpg",
"https://i.imgur.com/eQ1yBMP.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Need $100 to see photos?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:` Couple photos\nPictures: ${link.length}\n-100 dollars`,attachment: fs.createReadStream(__dirname + "/cache/2.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/2.jpg")).on("close",() => callback());
     }
   };
