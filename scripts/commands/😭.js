const fs = require("fs");
module.exports.config = {
	name: "😭",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
prefix: false,
	category: "no prefix",
	usages: "😭",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🥺")==0 || event.body.indexOf("Sohag")==0 || event.body.indexOf("sohag")==0 ||
event.body.indexOf("😥")==0 ||
event.body.indexOf("😭")==0 ||
 event.body.indexOf("😓")==0) {
		var msg = {
				body: "༊᭄- কান্না করো কেনো🥺\n\Ex 卝 বয়ফ্রেন্ডヅ(✷‿✷)🖤🌸༊᭄..! ❥┼─༊💝🥀",
				attachment: fs.createReadStream(__dirname + `/cache/Kanna.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
