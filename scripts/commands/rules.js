module.exports.config = {
  name: "rules",
  version: "1.0.0",
  Permssion: 0,
  credits: "Islamick Chat",
  prefix:false,
  description: "important notes",
  category: "random-img",
  usages: "send message",
  cooldowns: 5,
  dependencies: {
      "request": "",
      "fs-extra": "",
      "axios": ""
  }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  var ZiaRein3 = (`⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n•—»✨আসসালামু আলাইকুম🖤💫

•—»✨ 🟢গ্রুপ এর কিছু রুলস আছে, এগুলো হয়তো অনেকেই জানেন না যারা জানে \n তারা জেনে রাখেন!!


⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆


🕋 ｢১｣ কোন প্রকার বাঝে কথা বলা যাবে না🟡-!!🥺

🕋 ｢২｣ পর্ণ কিংবা বাজে ভিডিও দেওয়া যাবে নাহ 

🕋 ｢৩｣ আপনি রোবটের ব্যবহার করা না জানলে help চান আডমিন এর থেকে তাও বাজে কমান্ড কইরেন নাহ🟡

🕋 ｢৪｣ বড় হক কিংবা ছোট কাওকে ছোট করে কথা বলা যাবে নাহ 

🕋 ｢৫｣ এখানে ইসলাম এর বাহিরে কোনো কথা বলা যাবে নাহ 

🕋 ｢৬｣ ভাই অনেক কষ্ট করে এডমিন গ্রুপ + রোবোট বানিয়েছে তো দয়া করে  এডমিন কে - সম্মান দিবেন 

🕋 ｢৭｣ এডমিন খুব ভালো মানুষ আপনার যে কোনো বট এর ফাইল লাগলে তাকে ইনবক্স করবেন 

🕋 ｢৮｣ এখানে জগরা করা সম্পুর্ন নিষেধ - কেনো না জগরা করলে শয়তান খুসি হন 

🕋 ｢৯｣ spam করা যাবে না🟡

🕋 ｢১০｣ ১৮+ নিয়ে আসলে বা ১৮+ পর্ণ নিয়ে কোনো কথা বললে সাথে সাথে গ্রুপ থেকে বের করে দেওয়া হবে 

🕋 ｢১১｣ সকল ধর্ম লোক এখানে থাকতে পারবে শুধু মাত্রো - কারো ধর্ম যে নিয়ে কাওকে ছোট করা যাবে নাহ - এটা একটি শিক্ষনিয় বট এর থেকে সবাই আমারা ভালো  শিক্ষা নিতে আসেছি

🕋 ｢১২｣ কেও এক ইমজি বার বার দিবেন নাহ - দয়া করে 🥺

🕋 ｢১৩｣ গ্রুপ এর নাম  গ্রুপ ছোবি কিছু পরিবর্তন করা যাবে নাহ - একমাত্র এডমিন অনুমতি ছাড়া

🕋 ｢১৪｣গ্রুপে আড্ডা দেওয়া যাবে এখানে সবাই ভাই ব্রাদার হয়ে থাকবেন
🕋 ｢১৫｣ গ্রুপ এ কোন প্রোকার ফিসিং লিংক বা নাসা হেগার এর কোন  লিংক দেওয়া যাবেনা

⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆

❤️🌸প—»যারা বট সম্পক  বুঝেন না, তারা এডমিন কে মেনশন দিয়ে বলবেন🌸༅༎•─🟥

⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
এডমিন এর ফেসবুক আইডি কোনো হেল্প লাগলে নক দিতে পারেন🟥
https://www.facebook.com/mdsakhoyat.hosen.9
⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
            ‌
•—»যারা এই রুলস  গুলা মেনে চলতে পারবেন তারা group থাকেন 🌺আর যারা মানতে পারবেন না লিফট নিবেন, আর রুলস না মানলে সম্মান এর সাথে ব্যান & কিক দেওয়া হবে 🌸༅༎•─🟥
!!❤️🤲

⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n`);
 var ZiaRein = [
"https://i.imgur.com/mkAmGr4.gif",
  ];
  var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
  return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
