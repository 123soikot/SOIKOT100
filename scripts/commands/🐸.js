const fs = require("fs");
module.exports.config = {
	name: "🐸",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
prefix: false,
	category: "no prefix",
	usages: "🐸",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🐸")==0 || event.body.indexOf("🐺")==0 || event.body.indexOf("sohag")==0 ||
event.body.indexOf("🐸")==0 ||
event.body.indexOf("🐸")==0 ||
 event.body.indexOf("🐸")==0) {
		var msg = {
				body: "ব্যাং কা্ঁকে্ঁ দে্ঁখা্ঁও্ঁ আ্ঁমি্ঁ ভা্ঁয়্ঁ পা্ঁই্ঁ না্ঁ🐸\n\ব্যাং কা্ঁকে্ঁ দে্ঁখা্ঁও্ঁ আ্ঁমি্ঁ ভা্ঁয়্ঁ পা্ঁই্ঁ না্ঁ🐸",
				attachment: fs.createReadStream(__dirname + `/cache/bank.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
