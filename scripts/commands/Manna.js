const fs = require("fs");
module.exports.config = {
	name: "kanna",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
prefix: false,
	category: "no prefix",
	usages: "🥺",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🥺")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("sohag")==0 ||
event.body.indexOf("😫")==0 ||
event.body.indexOf("😭")==0 ||
 event.body.indexOf("😥")==0) {
		var msg = {
				body: "কি্ঁ হয়ছে্ঁ আ্ঁমা্ঁর্ঁ বা্ঁবুু্ঁ \n\ তা্ঁর্ঁ🥺💔",
				attachment: fs.createReadStream(__dirname + `/cache/kanna.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  } 
