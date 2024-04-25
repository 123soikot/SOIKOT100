module.exports.config = {
	name: "owner  ",
    version: "1.0.1",
    permission: 0,
    credits: "Nayan",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": "",
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("owner")==0 || (event.body.indexOf("Ex 卝 বয়ফ্রেন্ডヅ")==0) || event.body.indexOf("ex")==0 ||
event.body.indexOf("সৈকত")==0 ||
event.body.indexOf("@Ex 卝 বয়ফ্রেন্ডヅ")==0 ||
event.body.indexOf("owner ke re")==0 ||
event.body.indexOf("ai group er admin ke")==0 ||
event.body.indexOf("Owner")==0 ||
event.body.indexOf("SOIKOT")==0 ||
event.body.indexOf("soikot")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/i3ZIrF8.jpeg",
        ];
     var callback = () => api.sendMessage({body:`\n•┄┅════❁🌺❁════┅┄•\n\n আসসালামু আলাইকুম-!!🖤💫\n•—»✨𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n 𝗡𝗮𝗺𝗲 : EX 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁\n 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : Ex 卝 বয়ফ্রেন্ডヅ\n 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻 : 𝗜𝘀𝗹𝗮𝗺 \n 𝗼𝘄𝗻𝗲𝗿 𝗮𝗴𝗲 : 20 \n 𝗼𝘄𝗻𝗲𝗿 𝗹𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗗𝗵𝗮𝗸𝗮 \n\n•┄┅════❁🌺❁════┅┄•\n`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vt = Math.floor(dcm % 60);
const res = await
axios.get(`http://scrapi.apibot.repl.co/thinh`);
var thinh = res.data.url;
let ext = res.data.data.substring(res.data.url.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/2024.mp4")).on("close",() => callback());
}
  
  module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
		"successText": `🧠`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
    }
  module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["owner"] == "undefined" || data["owner"] == true) data["owner"] = false;
	else data["owner"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["owner"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      




  
    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
