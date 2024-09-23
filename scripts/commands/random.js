module.exports.config = {
  name: "random",
  version: "0.0.2",
  permission: 0,
  prefix: 'awto',
  credits: "Nayan",
  description: "sad video",
  category: "admin",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");

  const res = await axios.get(`https://betadash-shoti-yazky.vercel.app/shotizxx?apikey=shipazu`);
  const video = res.data.url;
  const cp = res.data.cp;
  const ln = res.data.length;

  const videoData = (await axios.get(video, {
    responseType: 'arraybuffer'
  })).data;

  fs.writeFileSync(__dirname + "/cache/video.mp4", Buffer.from(videoData, "utf-8"));

  const allimage = [fs.createReadStream(__dirname + "/cache/video.mp4")];

  const msg = `${cp}\n\n𝐓𝐨𝐭𝐚𝐥 𝐕𝐢𝐝𝐞𝐨𝐬: [${ln}]\n𝐀𝐝𝐝𝐞𝐝 𝐓𝐡𝐢𝐬 𝐕𝐢𝐝𝐞𝐨 𝐓𝐨 𝐓𝐡𝐞 𝐀𝐩𝐢 𝐁𝐲 Ex 卝 বয়ফ্রেন্ডヅ`;

  return api.sendMessage({
    body: msg,
    attachment: allimage
  }, event.threadID, event.messageID);
};
