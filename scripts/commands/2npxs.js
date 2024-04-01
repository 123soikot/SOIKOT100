const fs = require("fs");
module.exports.config = {
	name: "2npxs",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  prefix: true,
	category: "no prefix",
	usages: "mew",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😭")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("🐱")==0) {
		var msg = {
				body: "-!mew🐱",
				attachment: fs.createReadStream(__dirname + `/noprifix/Kanna.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module🐱.exports.run = function({ api, event, client, __GLOBAL }) {

}
