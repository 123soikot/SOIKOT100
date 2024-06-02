const fs = require("fs");
module.exports.config = {
	name: "oii.js",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
prefix: false,
	category: "no prefix",
	usages: "oii",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ওই জানে")==0 || event.body.indexOf("Hey")==0 || event.body.indexOf("sohag")==0 ||
event.body.indexOf("oii")==0 ||
event.body.indexOf("Hi")==0 ||
 event.body.indexOf("Hello")==0) {
		var msg = {
				body: "কি্ঁ হ্ঁয়ছোঁ\n\ ডা্ঁকো্ঁ কেনো্ঁ",
				attachment: fs.createReadStream(__dirname + `/cache/f.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
