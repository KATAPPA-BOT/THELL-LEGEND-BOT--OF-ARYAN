const fs = require("fs");
module.exports.config = {
  name: "good morning",
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
  if(react.includes("GM") ||
     react.includes("good MORNING") || react.includes("gm") || react.includes("GM") ||
react.includes("Good morning") ||
react.includes("GOOD MORNING") ||     
react.includes("good morning ")) {
    var msg = {
        body: `${name} 𝐕𝐄𝐑𝐘 𝐆𝐎𝐎𝐃 𝐌𝐎𝐑𝐍𝐈𝐍𝐆 𝐁𝐀𝐁𝐘💐✿
 *╔═══❖•⊰ ☞╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐𓅂☜ ⊱•❖═══╗*`,
attachment: fs.createReadStream(__dirname + `/Aryan/InShot_20250111_113330450.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
