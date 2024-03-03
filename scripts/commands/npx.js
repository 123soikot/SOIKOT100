const fs = require("fs");

module.exports.config = {
  name: "🍼",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("🌚") === 0) { // Corrected the condition and added a closing bracket
    var msg = {
      body: "-😊🖤_যে ভালোবাসার সে তোমাকে তোমার মতোই ভালোবাসবে-!!❤️🥀シ😊",
      attachment: fs.createReadStream(__dirname + `/cache/kosto.mp3`),
    };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍼", event.messageID, (err) => {}, true);
  }
};

module.exports.run = function ({ api, event, client, __GLOBAL }) {};
