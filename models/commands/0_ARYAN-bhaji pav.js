const fs = require("fs");
module.exports.config = {
  name: "bhaji pav",
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
  if(react.includes("fast food") ||
     react.includes("Pav bhazi") || react.includes("bhaji pav") || react.includes("BHAJI PAV") ||
react.includes("bhaji pav") ||
react.includes("Bhaji pav") ||     
react.includes("pav bhaji")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘💐✿
 *╔═══❖•⊰ ☞𓅂╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐𓅂☜ ⊱•❖═══╗*`,
attachment: fs.createReadStream(__dirname + `/noprefix/Bhaji pav.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
