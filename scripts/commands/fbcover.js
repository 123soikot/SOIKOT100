const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports.config = {
  name: "fbcover",
  version: "1.0.0",
  permssion: 0,
  credits: "Ex 卝 বয়ফ্রেন্ডヅ",
  description: "",
  category: "fbcover",
  prefix: true,
    cooldowns: 2,
};

  module.exports.run = async function({ api, event, args, Users, Threads, Currencies}) {
    const uid = event.senderID;
    const info = args.join(" ");
    const apis = await axios.get('https://raw.githubusercontent.com/MR-NAYAN-404/NAYAN-BOT/main/api.json')
  const n = apis.data.api
    var id = Object.keys(event.mentions)[0] || event.senderID;
  var nam = await Users.getNameUser(id);
  var ThreadInfo = await api.getThreadInfo(event.threadID);
    if (!info) {
      return api.sendMessage("Please enter in the format:\fbcover name - subname - address - email - phone nbr - color (default = no )", event.threadID);
    } else {
      const msg = info.split("-");
      const name = msg[0].trim();
      const subname = msg[1].trim();
      const address = msg[2].trim();
      const email = msg[3].trim();
      const phone = msg[4].trim();
      const color = msg[5].trim();

      api.sendMessage(`Processing your cover, please wait...`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 5000));

      const img = `${n}/fbcover/v1?name=${encodeURIComponent(name)}&uid=${id}&address=${encodeURIComponent(address)}&email=${encodeURIComponent(email)}&subname=${encodeURIComponent(subname)}&sdt=${encodeURIComponent(phone)}&color=${encodeURIComponent(color)}`;

      try {
        const response = await axios.get(img, { responseType: 'arraybuffer' });
        const image = await jimp.read(response.data);
        const outputPath = `./fbcover_${uid}.png`;
        await image.writeAsync(outputPath);
        
        const attachment = fs.createReadStream(outputPath);
        api.sendMessage({ 
          body: `◆━━━━━━━━◆◆━━━━━━━━◆\🔴INPUT NAME: ${name}\🔵INPUT SUBNAME:${subname}\📊ADDRESS: ${address}\✉️EMAIL: ${email}\☎️PHON NO.: ${phone}\🎇COLOUR: ${color}\🆔ID: ${nam}\◆━━━━━━━━◆◆━━━━━━━━◆`,
          attachment
        }, event.threadID, () => fs.unlinkSync(outputPath));
      } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while generating the FB cover.", event.threadID);
      }
    }
  };
