module.exports.config = {
  name: "autoreact",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "react all msg",
  prefix: false,
  category: "",
  usages: "",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body ? event.body.toLowerCase() : '';
if (haha.includes(" ") || haha.includes("")){
const dipto = ['😆','🐸','🙃','😈','🤖','🙄','🐣','🍎','🐰','🦟','🧐','😐','🙂','🤐','♥️','😘','😻','😍','🫡','🥲','😸','😭','💦','😜','🤫','😶','🥱','😤','🥵','😇','💋','🙈','🙀','🦵','💛','🖤','🤎','💙','💜','🦶','🙆','😏','🌸','🏵️','🍁','🌼','🔥','🐍','👄','✈️','🦛','🦐','🐇','🐮','🐰','🦃','🫦','🦋','🍒','🍓','🐼','🍊','😬','🍍','🍌','🌚','🥥','🐛','🥕','😳','👻','😾','🧀','😒','🥹','☠️','👊','😴','😦','😷','🫣','🫂','🤕','😵','🫢','🤭','😔','💩','💣','👀','🌝','🍼','🐤','😋','😻','😕','🙀',😙','😚','🫥','🫣','🫡','🤨','🫤']

const r = dipto[Math.floor(Math.random() * dipto.length)];
return api.setMessageReaction(r, event.messageID, (err) => {}, true)
}
    };
module.exports.run = function (){}
