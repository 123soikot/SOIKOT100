module.exports.config = {
  name: "album",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Nazrul",
  description: "Get Video From Album",
  usePrefix: true,
  Prefix: true,
  category: "Album",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("«------•I|[💫ミ★  𝐀𝐥𝐛𝐮𝐦 𝐕𝐢𝐝𝐞𝐨 𝐋𝐢𝐬𝐭  ★彡💫]|I{•------»\n⊰᯽⊱┈──╌❊🔰𝐍𝐚𝐳𝐫𝐮𝐥🔰❊╌──┈⊰᯽⊱\n𝐍𝐨.𝟎 ♡ 𝐀𝐭𝐭𝐢𝐭𝐮d𝐞 𝗩𝗶𝗱𝗲𝗼'𝘀 😎💫 \n𝐍𝐨.𝟏 ♡ 𝗦𝘁𝗮𝘁𝘂𝘀 𝗩𝗶𝗱𝗲𝗼'𝘀 🥰💫 \n𝐍𝐨.𝟐 ♡ 𝗡𝗮𝘁𝘂𝗿𝗮𝗹 𝘃𝗶𝗱𝗲𝗼'𝘀 😽💫 \n𝐍𝐨.𝟑 ♡ 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼'𝘀 🕋💫 \n𝐍𝐨.𝟒 ♡ 𝗟𝗼𝘃𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 ❤️💫\n𝐍𝐨.𝟓  ♡ 𝗦𝘂𝗿𝗮 𝗩𝗶𝗱𝗲𝗼'𝘀 😊 💫\n𝐍𝐨.𝟔 ♡ 𝗦𝘁𝗮𝘁𝘂𝘀 𝗩𝗶𝗱𝗲𝗼'𝘀 🤔💫\n𝐍𝐨.𝟕 ♡ 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 😈💫\n𝐍𝐨.𝟖 ♡ 𝗦𝗮𝗱 𝗩𝗶𝗱𝗲𝗼'𝘀 🥹💫\n𝐍𝐨.𝟗 ♡ 𝗔𝗻𝗶𝗺𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🤠💫\n𝐍𝐨.𝟏𝟎 ♡ 𝗦𝗵𝗼𝗿𝘁 𝗠𝗶𝘅 𝗩𝗶𝗱𝗲𝗼'𝘀 🥳💫 \n𝐍𝐨.𝟏𝟏 ♡ 𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🧡💫 \n𝐍𝐨.𝟏𝟐 ♡ 𝗖𝘂𝘁𝗲 𝗕𝗮𝗯𝘆 𝗩𝗶𝗱𝗲𝗼'𝘀 🤫💫 \n𝐍𝐨.𝟏𝟑 ♡ 𝗧𝗿𝘂𝗲 𝗟𝗶𝗻𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🙂💫\n\n«------•}I| 〚 𝐇𝐨𝐭 & 𝐒𝐞𝐱𝐮𝐚𝐥 & 𝐎𝐭𝐡𝐞𝐫 𝐕𝐢𝐝𝐞𝐨𝐬 〛 |I{•------»\n⊰᯽⊱┈──╌❊「 𝟏𝟖+ 」❊╌──┈⊰᯽⊱\n𝐍𝐨.𝟏𝟒 ♡ 𝑯𝒐𝒕 𝑽𝒊𝒅𝒆𝒐'𝒔 😐💫 \n𝐍𝐨.𝟏𝟓 ♡ 𝑺𝟑𝑿 𝑽𝒊𝒅𝒆𝒐𝒔 🥵💫 \n𝐍𝐨.𝟏𝟔 ♡ 𝑯𝒐𝒓𝒏𝒚 𝑽𝒊𝒅𝒆𝒐'𝒔 😶💫\n𝐍𝐨.𝟏𝟕 ♡ 𝑰𝒕𝒆𝒎 𝒗𝒊𝒅𝒆𝒐 😷💫\n\n✶⊶⊷⊶⊷❍ ❣︵𝑨𝒍𝒍 𝑽𝒊𝒅𝒆𝒐𝒔 𝑯𝒆𝒓𝒆︵❣❍⊶⊷⊶⊷✶\n\n𝑹𝒆𝒑𝒍𝒚 𝑻𝒉𝒊𝒔 𝑴𝒆𝒔𝒔𝒔𝒂𝒈𝒆 𝑾𝒊𝒕𝒉 𝒋𝒖𝒔𝒕 𝑵𝒖𝒎𝒃𝒆𝒓 𝒐𝒇 𝒗𝒊𝒅𝒆𝒐⛱️", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
  }, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
  }) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    const nazrul = (await p.get(h)).data.nazrul;
    const ls = (await p.get(h)).data.count;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `彡🔰𝑯𝒆𝒓𝒆'𝒔 𝒀𝒐𝒖𝒓 𝑽𝒊𝒅𝒆𝒐 𝑻𝒉𝒂𝒕 𝒀𝒐𝒖  𝑾𝒂𝒏𝒕♡⛱️`,
      attachment: t
    }, a.threadID, a.messageID)
  }

  function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://x9-apis-2.onrender.com/video/status2";
        else if ("2" == a.body)
         var   h = "https://x9-apis-2.onrender.com/video/natural";
        else if ("3" == a.body)
         var   h = "https://x9-apis-2.onrender.com/video/islam";
        else if ("4" == a.body)
          var  h = "https://x9-apis-2.onrender.com/video/love";
        else if ("5" == a.body)
          var  h = "https://x9-apis-2.onrender.com/video/sura";
        else if ("6" == a.body)
          var  h = "vlhttps://x9-apis-2.onrender.com/video/status";
        else if ("7" == a.body)
          var  h = "https://x9-apis-2.onrender.com/video/ff";
        else if ("8" == a.body)
          var  h = "https://x9-apis-2.onrender.com/video/sad";
        else if ("9" == a.body)
         var   h = "https://x9-apis-2.onrender.com/video/anime";
        else if ("10" == a.body)
         var  h = "https://x9-apis-2.onrender.com/video/short";
          else if ("11" == a.body)
           var  h = "https://x9-apis-2.onrender.com/video/cpl";
          else if ("12" == a.body)
          var  h = "https://x9-apis-2.onrender.com/video/baby";
         else if ("13" == a.body)
         var  h = "https://x9-apis-2.onrender.com/video/hot";
         else if ("14" == a.body)
         var  h = "https://x9-apis-2.onrender.com/video/sex";
         else if ("15" == a.body)
         var  h = "https://x9-apis-2.onrender.com/video/horny";
           else if ("16" == a.body)
         var  h =
"https://x9-apis-2.onrender.com/video/item";
    else if ("0" == a.body)
         var  h =
"https://x9-apis-2.onrender.com/video/attitude";
    else if ("18" == a.body)
         var  h =
"https://x9-apis-2.onrender.com/video/item";
    else if ("19" == a.body)
         var  h =
"https://x9-apis-2.onrender.com/video/hot";
    else if ("20" == a.body)
         var  h =
"https://x9-apis-2.onrender.com/video/capcut";
        return { p, h };
    }
};
