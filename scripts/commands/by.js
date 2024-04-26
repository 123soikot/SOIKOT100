module.exports.config = {
    name: "by",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    description: "",
    prefix: true,
    category: "prefix",
    usages: "[model]",
    cooldowns: 10,
    dependencies: {
       'nayan-server': ''
     module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("By")==0 || (event.body.indexOf("by")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)))) {
    var msg = {
        body: "আবার কথা হবে 🥰.\n\n~ যেকোনো তথ্যের জন্য আমার id তে নক করতে পারেন 👇\https://www.facebook.com/mdsakhoyat.hosen.9",
        attachment: fs.createReadStream(__dirname + `/farhanm4/farhan1.mp4`)
      }
            api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
