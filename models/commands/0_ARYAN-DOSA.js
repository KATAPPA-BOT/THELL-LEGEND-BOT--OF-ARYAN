const fs = require("fs");
module.exports.config = {
  name: "dosa",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "LEGEND-ARYAN ", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("dOsa") ||
     react.includes("DOSA") || react.includes("dosa") || react.includes("DOSA") ||
react.includes("Dosa") ||
react.includes("DOSA") ||     
react.includes("dosa ")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐏𝐊𝐀 𝐃𝐎𝐒𝐀 𝐀𝐆𝐀𝐘𝐀💐✿
 *╔═══❖•⊰ ☞╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐𓅂☜ ⊱•❖═══╗*`,
attachment: fs.createReadStream(__dirname + `/Aryan/received_614973427948920.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤤", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
