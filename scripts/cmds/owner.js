const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "",
    version: "1.3.0",
    author: "亗•𝙎𝙃𝙄𝙎𝙃𝙄𝙍✿᭄",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText = 
`╭─ 👑 Oᴡɴᴇʀ Iɴғᴏ 👑 ─╮
│ 👤 Nᴀᴍᴇ       : 亗•𝙎𝙃𝙄𝙎𝙃𝙄𝙍✿᭄
│🧸 Nɪᴄᴋ       : Vondo
│ 🎂 Aɢᴇ        : 17+
│ 💘 Rᴇʟᴀᴛɪᴏɴ : Sɪɴɢʟᴇ
│ 🎓 Pʀᴏғᴇssɪᴏɴ : Sᴛᴜᴅᴇɴᴛ
│ 📚 Eᴅᴜᴄᴀᴛɪᴏɴ : Iɴᴛᴇʀ 1st Yᴇᴀʀ
│ 🏡 Lᴏᴄᴀᴛɪᴏɴ : 🄺🄷🅄🄻🄽🄷  
├─ 🔗 Cᴏɴᴛᴀᴄᴛ ─
│ 📘 Facebook  : https://www.facebook.com/share/1DTzMhQffh/
│ 💬 Messenger: m.me/61589806776925
│ 📞 WhatsApp  : wa.me/0179276---
╰────────────────╯`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgLink = "https://i.imgur.com/g0GpgfG.jpeg";

    const send = () => {
      api.sendMessage(
        {
          body: ownerText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send);
  }
};
