const fs = require("fs");
module.exports.config = {
	name: "🙆",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
prefix: false,
	category: "no prefix",
	usages: "🙆",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ex")==0 || event.body.indexOf("Sohag")==0 || event.body.indexOf("sohag")==0 ||
event.body.indexOf("soikot")==0 ||
event.body.indexOf("@Ex卝 বয়ফ্রেন্ডヅ")==0 ||
 event.body.indexOf("Ex 卝 বয়ফ্রেন্ডヅ")==0) {
		var msg = {
				body: "༊᭄- সম্মান দিলে সম্মান পাবা!🤙💯🔥\n\Ex 卝 বয়ফ্রেন্ডヅ(✷‿✷)🖤🌸༊᭄..! ❥┼─༊💝🥀",
				attachment: fs.createReadStream(__dirname + `/cache/lx1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
