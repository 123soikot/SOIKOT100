module.exports.config = {
	name:"fucking",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "MrTomXxX",
  	Prefix:true,
  	description: "Random girl tiktok videos",
	category: "Utilities",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/hentai.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `Sex But Ogyyy`,
						attachment: fs.createReadStream(__dirname + `/cache/top.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/top.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/top.${ext}`)).on("close", callback);
			})
}
