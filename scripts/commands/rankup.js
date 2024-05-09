const deltaNext = global.GoatBot.configCommands.envCommands.rank.deltaNext;
const expToLevel = exp => Math.floor((1 + Math.sqrt(1 + 8 * exp / deltaNext)) / 2);
const { drive } = global.utils;

const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "rankup.js",
  version: "1.0.2",
  permission: 0,
  credits: "BADOL-KHAN",
  description: "beginner's guide",
  prefix: true,
  category: "guide",
  usages: "[Shows Commands]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

	langs: {
		vi: {
			syntaxError: "Sai cú pháp, chỉ có thể dùng {pn} on hoặc {pn} off",
			turnedOn: "Đã bật thông báo level up",
			turnedOff: "Đã tắt thông báo level up",
			notiMessage: "🎉🎉 chúc mừng bạn đạt level %1"
		},
		en: {
			syntaxError: "Syntax error, only use {pn} on or {pn} off",
			turnedOn: "Turned on level up notification",
			turnedOff: "Turned off level up notification",
			notiMessage: "🎉🎉 Congratulations on reaching level %1"
		}
	},

	onStart: async function ({ message, event, threadsData, args, getLang }) {
		if (!["on", "off"].includes(args[0]))
			return message.reply(getLang("syntaxError"));
		await threadsData.set(event.threadID, args[0] == "on", "settings.sendRankupMessage");
		return message.reply(args[0] == "on" ? getLang("turnedOn") : getLang("turnedOff"));
	},

	onChat: async function ({ threadsData, usersData, event, message, getLang }) {
		const threadData = await threadsData.get(event.threadID);
		const sendRankupMessage = threadData.settings.sendRankupMessage;
		if (!sendRankupMessage)
			return;
		const { exp } = await usersData.get(event.senderID);
		const currentLevel = expToLevel(exp);
		if (currentLevel > expToLevel(exp - 1)) {
			const forMessage = {
				body: getLang("notiMessage", currentLevel)
			};
			if (threadData.data.rankup?.attachments?.length > 0) {
				const files = threadData.data.rankup.attachments;
				const attachments = files.reduce((acc, file) => {
					acc.push(drive.getFile(file, "stream"));
					return acc;
				}, []);
				forMessage.attachment = (await Promise.allSettled(attachments))
					.filter(({ status }) => status == "fulfilled")
					.map(({ value }) => value);
			}
			message.reply(forMessage);
		}
	}
};
