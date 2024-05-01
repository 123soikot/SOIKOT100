module.exports.config = {
  name: "ex perfix",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "ex prefix ",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
    if (body.startsWith("Prefix")) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = [" https://i.imgur.com/ku2U1tg.mp4"];
    var callback = () => api.sendMessage({
      body: `「 === 「𝗣𝗿𝗲𝗳𝗶𝘅 / 」  ===
  --❖-- Ex 卝 বয়ফ্রেন্ডヅ(⁠◕⁠દ⁠◕⁠)--❖--
✢━━━━━━━━━━━━━━━✢

🐰🍒শী্ঁত্ঁ শী্ঁত্ঁ ভা্ঁব্ঁ কি্ঁসে্ঁর্ঁ জা্ঁনি্ঁ এ্ঁক্ঁটা্ঁ অ্ঁভা্ঁব্ঁ_🙊🙈

✢━━━━━━━━━━━━━━━✢
𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : Ex 卝 বয়ফ্রেন্ডヅ(✷‿✷)  」`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    const timeStart = Date.now();
    const PREFIX = config.PREFIX;
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["Prefix"] == "undefined" || data["🖤"] == true) data["🖤"] = false;
  else data["Prefix"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["Prefix"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
