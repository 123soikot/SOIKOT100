module.exports.config = {
    name: "rankup",
    version: "1.0.0",
    permission: 0,
    credits: "farhan",
    description: "Restart Bot",
    prefix: true, 
    category: "system", 
    usages: "system",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};

module.exports.handleEvent = async function({ api, event, Currencies, Users, getText }) {
	var {threadID, senderID } = event;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];

	threadID = String(threadID);
	senderID = String(senderID);

	const thread = global.data.threadData.get(threadID) || {};

	let exp = (await Currencies.getData(senderID)).exp;
	exp += 1;

	if (isNaN(exp)) return;

	if (typeof thread["rankup"] != "undefined" && !thread["rankup"]) {
		await Currencies.setData(senderID, { exp });
		return;
	}

	const curLevel = Math.floor((Math.sqrt(1 + (4 * exp / 3)) - 1) / 2);
	const level = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3)) - 1) / 2);

	if (level > curLevel && level !== 1) {
		const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);
		let message = (typeof thread.customRankup === "undefined") ? getText("levelup") : thread.customRankup;
		
		message = message
			.replace(/\{name}/g, name)
			.replace(/\{level}/g, level);

		let arrayContent;

		if (existsSync(__dirname + "/Nayan/")) mkdirSync(__dirname + "/Nayan/", { recursive: true });
		if (existsSync(__dirname + `/Nayan/rankup.gif`)) {
			arrayContent = { body: message, attachment: createReadStream(__dirname + `/Nayan/rankup.gif`), mentions: [{ tag: name, id: senderID }] };
		} else {
			arrayContent = { body: message, mentions: [{ tag: name, id: senderID }] };
		}
		const moduleName = this.config.name;
		api.sendMessage(arrayContent, threadID, async function (error, info){
			if (global.configModule[moduleName].autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, global.configModule[moduleName].unsendMessageAfter * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	await Currencies.setData(senderID, { exp });
	return;
};

module.exports.languages = {
	"vi": {
		"off": "ð—§ð—®Ì†Ìð˜",
		"on": "ð—•ð—®Ì£Ì‚ð˜",
		"successText": "ð­ð¡ðšÌ€ð§ð¡ ðœð¨Ì‚ð§ð  ð­ð¡ð¨Ì‚ð§ð  ð›ðšÌð¨ ð«ðšð§ð¤ð®ð© âœ¨",
		"levelup": "ðŸŒ¸ ð—žð—¶Ìƒ ð—»ð—®Ì†ð—»ð—´ ð˜…ð—®Ì£ð—¼ ð—¹ð—¼Ì‚Ì€ð—»ð—» ð—¼Ì›Ì‰ ð—ºð—¼Ì‚ð—» ð—½ð—µð—®Ìð—½ ð—µð—®Ì‚Ìð—½ ð—±ð—¶ð—²Ì‚ð—º ð—°ð˜‚Ì‰ð—® {name} ð˜ƒð˜‚Ì›Ì€ð—® ð—¹ð—²Ì‚ð—» ð˜ð—¼Ì›Ìð—¶ ð—¹ð—²ð˜ƒð—²ð—¹ {level} ðŸŒ¸"
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success notification rankup!",
		"levelup": "{name}, your keyboard hero level has reached level {level}",
	}
};

module.exports.run = async function({ api, event, Threads, getText }) {
	const { threadID, messageID } = event;
	let data = (await Threads.getData(threadID)).data;
	
	if (typeof data["rankup"] === "undefined" || !data["rankup"]) {
		data["rankup"] = true;
	} else {
		data["rankup"] = false;
	}
	
	await Threads.setData(threadID, { data });
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["rankup"]) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
};
