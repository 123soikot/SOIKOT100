module.exports.config = {
	name: "pompom",
    version: "1.0.1",
    permission: 0,
    credits: "Nayan",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
  
};

const videoDATA = "https://videos-api.emonapi.repl.co/video/pompom";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/EMon-BHai')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/EMon-BHai');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/EMon-BHai').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/EMon-BHai/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(videoDATA)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.data), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/EMon-BHai/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          api.sendMessage({
            body: "───※ ·❆· ※───\n☆《POMPOM》☆\n  Ex 卝 বয়ফ্রেন্ডヅ\n───※ ·❆· ※───",
            attachment: global.nodemodule["fs"].createReadStream(path)
          }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("Something went wrong...", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("Something went wrong...", event.threadID, event.messageID);
    return;
  });

  return;
