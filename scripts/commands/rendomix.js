/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "rendomix",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "video",
  prefix: false,
  category: "Hình ảnh",
  usages: "video]",
  cooldowns: 5,
};
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = [" --rendomix video--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

    "https://i.imgur.com/tMUE7Os.mp4",
    "https://i.imgur.com/IsDENwb.mp4",
    "https://i.imgur.com/kAGdVEJ.mp4",
    "https://i.imgur.com/brXId4G.mp4",
    "https://i.imgur.com/8EnK42W.mp4",
    "https://i.imgur.com/QdmaZSK.mp4",
    "https://i.imgur.com/u3ZUe3P.mp4",
    "https://i.imgur.com/xWjBDq4.mp4",
    "https://i.imgur.com/c9hZg8u.mp4",
    "https://i.imgur.com/r9vH6fS.mp4",
    "https://i.imgur.com/9fY8Bp7.mp4",
    "https://i.imgur.com/1ABT9nr.mp4",
    "https://i.imgur.com/uAykHnb.mp4",
    "https://i.imgur.com/x93eXTO.mp4",
    "https://i.imgur.com/RJc7YuS.mp4",
    "https://i.imgur.com/wzGvaci.mp4",
    "https://i.imgur.com/HsXn05F.mp4",
    "https://i.imgur.com/RvW15rJ.mp4",
    "https://i.imgur.com/si2QY1f.mp4",
    "https://i.imgur.com/RpDy8tW.mp4",
    "https://i.imgur.com/WbAq0RD.mp4",
    "https://i.imgur.com/WbAq0RD.mp4",
    "https://i.imgur.com/8oI76SH.mp4",
    "https://i.imgur.com/ZnV08oG.mp4",
    "https://i.imgur.com/rpuEByB.mp4",
    "https://i.imgur.com/FHoho1S.mp4",
    "https://i.imgur.com/zogXbO4.mp4",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
