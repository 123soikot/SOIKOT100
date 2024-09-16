module.exports.config = {
    name: "help",
    version: "1.0.2",
    hasPermission: 0, // Corrected spelling
    credits: "★彡[ex]彡★",
    description: "FREE SET-UP MESSENGER ON YOUTUBE",
    category: "system",
    usages: "[Name module]",
    cooldowns: 5,
    envConfig: {
        autoUnsend: false,
        delayUnsend: 20
    }
};

module.exports.languages = {
    "en": {
        "moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
        "helpList": '[ There are %1 commands on this bot. Use: "%2help [command name]" to know how to use! ]',
        "user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
    }
};

module.exports.handleEvent = function({ api, event, getText }) {
    const { commands } = global.client;
    const { threadID, messageID, body } = event;

    if (!body || !body.startsWith("help")) return;
    const splitBody = body.slice("help".length).trim().split(/\s+/);
    if (splitBody.length === 1 || !commands.has(splitBody[1].toLowerCase())) return;

    const command = commands.get(splitBody[1].toLowerCase());
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

    return api.sendMessage(getText("moduleInfo", 
        command.config.name,
        command.config.description,
        `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`,
        command.config.commandCategory,
        command.config.cooldowns,
        (command.config.hasPermission === 0) ? getText("user") :
        (command.config.hasPermission === 1) ? getText("adminGroup") : 
        getText("adminBot"),
        command.config.credits
    ), threadID, messageID);
};

module.exports.run = async function({ api, event, args, getText }) {
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const command = commands.get((args[0] || "").toLowerCase());
    const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

    if (!command) {
        const arrayInfo = [];
        const page = parseInt(args[0]) || 1;
        const numberOfOnePage = 30;
        let i = 0;
        let msg = "╭────────╮\n👉🏻 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧 👈🏻\n╰────────╯\n\n";

        for (const [name, value] of commands) {
            name += ` 🥵 ${value.config.usages}`;
            arrayInfo.push(name);
        }

        arrayInfo.sort();

        const startSlice = numberOfOnePage * page - numberOfOnePage;
        const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);

        for (const item of returnArray) msg += `╭─╮ \n😘${++i}👿 \n╰─╯ /${item}\n`;

        const randomText = [
            "Even a small amount of alcohol poured on a scorpion will drive it crazy and sting itself to death.",
            // Add other random texts here
        ];

        const text = `╭──────╮\n✅✅ 𝐏𝐀𝐆𝐄   ✅✅\n╰──────╯ (${page}/${Math.ceil(arrayInfo.length / numberOfOnePage)})\nType: "${prefix}help [command name]" for more details about that command\n\nCurrently available ${arrayInfo.length} commands on Bot ${global.config.BOTNAME}\n\n╭────────╮\n🙈 𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥 🙈\n╰────────╯\nBOT PREFIX=${prefix}\n╭──────╮\n★彡[Ex 卝 বয়ফ্রেন্ডヅ]彡★\n╰──────╯
        \n${randomText[Math.floor(Math.random() * randomText.length)]}`;
        
        return api.sendMessage(msg + "\n" + text, threadID, async (error, info) => {
            if (autoUnsend) {
                await new Promise(resolve => setTimeout(resolve, delayUnsend * 10000));
                return api.unsendMessage(info.messageID);
            } else return;
        });
    }

    const commandInfo = getText("moduleInfo", 
        command.config.name,
        command.config.description,
        `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`,
        command.config.commandCategory,
        command.config.cooldowns,
        (command.config.hasPermission === 0) ? getText("user") :
        (command.config.hasPermission === 1) ? getText("adminGroup") : 
        getText("adminBot"),
        command.config.credits
    );

    return api.sendMessage(commandInfo, threadID, messageID);
};
