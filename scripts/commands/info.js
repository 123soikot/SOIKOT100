Module. exports = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
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
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/kMNXBnsz/IMG-20231125-194035.jpg", 
            
            "https://i.postimg.cc/gc1qkHMN/87afa98b6186f0b531cfbecc25879c54-2.png", 
            
            "https://i.postimg.cc/269pBKqq/FB-IMG-1702387239869.jpg",
            
            "https://i.postimg.cc/m2bXGwhJ/FB-IMG-1702386919449.jpg"];
  
var callback = () => api.sendMessage({body:`•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
•┄┅═════❁🌺❁═════┅┄•

 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : Friya

𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : Ex 卝 বয়ফ্রেন্ডヅ

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : SOIKOT

•┄┅══❁CONCATET❁══┅┄• 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/mdsakhoyat.hosen.9

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/mdsakhoyat.hosen.9

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐏𝐚𝐠𝐞 : https://www.facebook.com/mdsakhoyat.hosen.9

𝐖𝐏 𝐍𝐮𝐦𝐛𝐞𝐫 : 01758307316

𝐒𝐞𝐚𝐫𝐜𝐡 𝐆𝐨𝐨𝐠𝐥𝐞 : Ex

𝐖𝐚𝐛 𝐒𝐢𝐭𝐞 𝐋𝐢𝐧𝐤 : https://linktr.ee/muslimhakcerbd

•┄┅═════❁🌺❁═════┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═════❁🌺❁═════┅┄•

TYPE /admin 

𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.config.BOTNAME}

𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX}

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : Ex 卝 বয়ফ্রেন্ডヅ

•—»✨ 𝐔𝐩𝐭𝐢𝐦𝐞

𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : ${juswa} 

𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠  ༄🌺\n｢🕋｣${global.config.BOTNAME}｢🕋｣`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
