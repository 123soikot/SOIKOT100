module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100072320790038","100072320790038","100072320790038") {
    var aid = ["100072320790038","100069926588234","61551367947380"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _Ex 卝 বয়ফ্রেন্ডヅ বস এর মন মন ভালো নেই আস্কে-!💔🥀", " নাম ধরে না ডেকে একটা gf খুজে দাও আমার Boss কে🫂💔", "পাপির দল বসের নাম মুখে আনার আগে ওযু করে আয়  ","তোরে কি থাপড়াইয়া বুঝাইমু মেনশন না দিয়া একটা গার্লফ্রেন্ড রে কতবার কইমু "," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","এতু ইমুশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 😭😭","Ex 卝 বয়ফ্রেন্ডヅ বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল Ex 卝 বয়ফ্রেন্ডヅ রে একটা জি এফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা জি এফ দে","Mantion_দিস না বাঁলপাঁক্না Ex 卝 বয়ফ্রেন্ডヅ প্রচুর বিজি 🥵🥀🤐","মেয়ে হলে বসরে চুমা দাও ছেলে হলে দরকার নাই  🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
