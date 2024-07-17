const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/g0dpYGm.mp4",

];

module.exports.config = {
  name: "🕌",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "auto reply to জুম্মাহ মুবারক ",
  category: "noprefix",
  usages: "🖤",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("জুম্মাহ মুবারক")) {
    const rahad = [
      "•┄┅════❁🌺❁════┅┄•\n \n ❂\n            🫶💜🪽\n___𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂 𝗔𝗹𝗮𝗶𝗸𝘂𝗺_♡༢\n___𝗝𝘂𝗺𝗺𝗮𝗵 𝗠𝘂𝗯𝗮𝗿𝗮𝗸♡🩷🕌\n\n•┄┅════❁🌺❁════┅┄•",
      "•┄┅════❁🌺❁════┅┄•\n\n ❂\n            🫶💜🪽\n___𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂 𝗔𝗹𝗮𝗶𝗸𝘂𝗺_♡༢\n___𝗝𝘂𝗺𝗺𝗮𝗵 𝗠𝘂𝗯𝗮𝗿𝗮𝗸♡🩷🕌\n\n╰•┄┅════❁🌺❁════┅┄•╯"

    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);

    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

