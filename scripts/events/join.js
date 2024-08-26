module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "EMon-BHai", //fixing ken gusler
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[${global.config.PREFIX} ]  ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("চলে এসেছি আমি Ex 10𝙓 বট🙋‍♂️", event.threadID, () => api.sendMessage({body:` 🌸(-Ex 卝 বয়ফ্রেন্ডヅ) সৈকত 𝙞 Ex 10𝙓 𝘽𝙊𝙏 𝘾𝙊𝙉𝙉𝘾𝙏𝙀𝘿 🌸«

আসসালামু আলাইকুম☘️
<------------------------------>  
🌸 𝘽𝙊𝙏  𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙀𝘿 𝙎𝙐𝘾𝘾𝙀𝙎𝙁𝙐𝙇 🌸 

🌸𝘼𝙋𝙋𝙍𝙊𝙑𝙀𝘼𝙇 𝘼𝙇𝙇𝙊𝙒 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋🌸
<------------------------------>

USE HELP TO SEE COMMAND 
\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}emonsir (ask)\n${global.config.PREFIX}bomb (number text)\n${global.config.PREFIX}help (comman)\n${global.config.PREFIX}info 
<<<<<------------------------------>>>>>
🌸𝘼𝙉𝘿 𝙁𝙊𝙍 𝘼𝙉𝙔 𝙍𝙀𝙋𝙊𝙍𝙏 𝙊𝙍🚫 𝘾𝙊𝙉𝙏𝘼𝘾𝙏 𝘽𝙊𝙏 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍🌸

🌸𝙊𝙒𝙉𝙀𝙍🌸: Ex 卝 বয়ফ্রেন্ডヅ 

🌸𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆🌸: https://www.facebook.com/mdsakhoyat.hosen.9



🌸𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙋𝘼𝙂𝙀🌸: https://www.facebook.com/mdsakhoyat.hosen.9

🌸𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋🌸: 01758307316

🌸𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈🌸: 01866523794

🌸𝙀𝙈𝘼𝙄𝙇🌸: bdsoikotho@gmail.com

🌸𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙄𝙉𝙂 ?(Ex 卝 বয়ফ্রেন্ডヅ) ex10𝙓 𝘽𝙊𝙏🌸

`, attachment: fs.createReadStream(__dirname + "/cache/joinmp4/emon.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "╔════•|      ✿      |•════╗\n 🔰𝘼𝙨-𝙨𝙖𝙡𝙖𝙢𝙪 𝘼𝙡𝙖𝙮𝙠𝙪𝙢🔰\n╚════•|      ✿      |•════╝\n\n    ░▒▓▆▅▃▂▁𝐰𝐞𝐥𝐜𝐨𝐦𝐞▁▂▃▅▆▓▒░\n\n                 ❥𝐍𝐄𝐖~\n\n»»Mᅳᅳeᅳᅳmᅳᅳbᅳᅳeᅳᅳrᅳ►\n\n [═══ ⋆ [  {name} ]⋆ ═══]\n\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n{threadName}\n\n 🥰🖤🌸—এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀—🌸🥀\n\n         🥀_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🥀\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ ࿐\n\n    ╔╦══•    •✠•❀•✠ •   •══╦╗\n        ♥  𝐁𝐎𝐓'𝐬 𝐎𝐖𝐍𝐄𝐑♥\n\n                           ☟                     \n\n    ♥Ex 卝 বয়ফ্রেন্ডヅ 10𝙓 𝘽𝙊𝙏♥\n    ╚╩══•    •✠•❀•✠ •    •══╩╝" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
			 }
