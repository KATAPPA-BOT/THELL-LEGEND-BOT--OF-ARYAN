/** dont change credits pleas**/
module.exports.config = {
  name: "Hotvideos",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARYAN",
  description: "HOT VEDIO",
  commandCategory: "system",
  usages: "Hotvideos",
  cooldowns: 5,
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
   var hi = ["『٭』 💐𝐀𝐑𝐘𝐀𝐍💐 『٭』-HOT-VIDOS"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
   "https://i.imgur.com/MN8K2GR.mp4",
    "https://i.imgur.com/DQuH24h.mp4",
    "https://i.imgur.com/uDJWjmC.mp4",
    "https://i.imgur.com/IOsgIZy.mp4",
    "https://i.imgur.com/6ehgK8c.mp4",
    "https://i.imgur.com/cVsGX6O.mp4",
    "https://i.imgur.com/JB9MnxT.mp4",
    "https://i.imgur.com/wNB2aFG.mp4",
    "https://i.imgur.com/ntTXhE9.mp4",
    "https://i.imgur.com/VLjFWiO.mp4",
    "https://i.imgur.com/kdXp78d.mp4",
    "https://i.imgur.com/QFrMhcV.mp4",
    "https://i.imgur.com/uTk29FG.mp4",
    "https://i.imgur.com/x045aQA.mp4",
    "https://i.imgur.com/Cr2TVh9.mp4",
    "https://i.imgur.com/csFsNPz.mp4",
    "https://i.imgur.com/esVO0MO.mp4",
    "https://i.imgur.com/Tpp3U4f.mp4",
    "https://i.imgur.com/Ll76Qbw.mp4",
    "https://i.imgur.com/k7T2yVV.mp4",
    "https://i.imgur.com/sg1b8gS.mp4",
    "https://i.imgur.com/vK71G6H.mp4",
     


];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
