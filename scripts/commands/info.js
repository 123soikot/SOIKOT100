module.exports.config = {
	name: "info",
	version: "1.0.1", 
	permssion: 0,
	credits: "EMon-BHai", //don't change the credits please
	prefix: false,
	description: "Admin and Bot info.",
	category: "admin",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/DwGsBmj9/received-2142950486054658.png", 
            
            "https://i.postimg.cc/DwGsBmj9/received-2142950486054658.png", 
            
            "https://i.postimg.cc/DwGsBmj9/received-2142950486054658.png",
            
            "https://i.postimg.cc/DwGsBmj9/received-2142950486054658.png"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 

BOT NAME : ${global.config.BOTNAME}

BOT ADMIN : 『Ex 卝 বয়ফ্রেন্ডヅ 』

FACEBOOK  : https://www.facebook.com/mdsakhoyat.hosen.9 

BOT PREFIX : ${global.config.PREFIX}

BOT OWNER : 『SOIKOT』 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
