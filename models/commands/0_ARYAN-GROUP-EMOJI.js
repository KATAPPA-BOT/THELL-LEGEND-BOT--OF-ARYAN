module.exports.config = {
	name: "groupemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "LEGEND-ARYAN",
	description: "THIS BOT WAS MADE BY MR LEGEND ARYAN",
	commandCategory: "CHANGE GROUP EMOJI", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("💐𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐄𝐌𝐎𝐉𝐈 𝐓𝐎 𝐋𝐀𝐆𝐀𝐎 𝐉𝐎 𝐂𝐇𝐀𝐍G𝐄 𝐊𝐀𝐑𝐍𝐀 𝐇𝐀𝐈💐", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`💐𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐌𝐄𝐍𝐄 𝐄𝐌𝐎𝐉𝐈 𝐂𝐇𝐀𝐍𝐆𝐄 𝐊𝐀𝐑 𝐃𝐈𝐘𝐀💐 ${emoji}\n━━━━━━━━━━━━━━━━━━━━━━━\n╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐🌺`, event.threadID, event.messageID));
}
