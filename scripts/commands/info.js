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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:╭•┄┅═══┅┄•╮

ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸআসসালামু আলাইকুমꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿


◢◥▂▂▂▂⭕▂▂▂▂◤◣
   ☘️আমার🌺পরিচয়🌿
◥◢▔▔▔▔⭕▔▔▔▔◣◤    


╰┈►আমি           :🌺✰Ex 卝 বয়ফ্রেন্ডヅ★🌺↙️
╰┈►ডাক নাম     :🍀🌺সৈকম↙🌺
╰┈►ধর্ম              :🍀ইসলাম🕌🌺
╰┈►বাড়ি            :🍀Dhaka🌍☘️
╰┈►থানার নাম   :🌺International 🏟️☘️
╰┈►গ্রামের নাম  :🍀চাঁদখালি বাজার🏞️🌺
╰┈►পেশা           :🌺নীল আকাশে গাড়ি চালাই🚜🍀
╰┈►বয়স            :🍀২৫+ চলছে✅🌺
╰┈►উচ্চতা         :🌺৫ ফুট ৬ইন্সি🚻🍀
╰┈►ওজন          : 🍀৫০ কেজি🚷🌺
╰┈►রক্ত             :☘️o- 🚹🌺
╰┈►গায়ের রং    :🌺পাতিলের মতো♨️🍀
╰┈►ধূমপান        :🌺করি হালকা🚭🍀
╰┈►বেয়াদবি      :🍀হালকা♨️🌺
╰┈►ধন সম্পদ    :🌺জাতীয় ফকির⚠️🍀
╰┈►ভালোবাসা   :☘️কপাল ফুটা♨️🍁


•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•

╰┈►রোবট এডমিন কে কন্টাক করুন★

╰┈►𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝙀𝙍-𝙇𝙄𝙉𝙆★

╰┈►m.me100072320790038

╰┈►𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆-𝙇𝙄𝙉𝙆★

https://www.facebook.com/mdsakhoyat.hosen.9

•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•

┏━━ [ 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 ]━━➣
┃🌻  Ex 卝 বয়ফ্রেন্ডヅ
┃🌺 𝐁𝐨𝐭 𝐌𝐨𝐝𝐢𝐟𝐲 SOIKOT
┗━━━━━━━━━━━━➢`
`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/61552819703988/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
