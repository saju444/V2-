module.exports = {
  config: {
    name: "addowner",
    version: "1.0",
    author: "〲𝑠ℎ𝑖𝑠ℎ𝑖𝑟ツ࿐ T.T　o.O",
    countDown: 5,
    role: 0,
    shortDescription: "Add bot owner to group",
    category: "group",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const ownerID = "61570871885492"; // Owner Facebook ID

    try {
      await api.addUserToGroup(ownerID, event.threadID);
      api.sendMessage(
        "〲𝑠ℎ𝑖𝑠ℎ𝑖𝑟ツ࿐ ke group e add kora holo.",
        event.threadID
      );
    } catch (e) {
      api.sendMessage(
        "〲𝑠ℎ𝑖𝑠ℎ𝑖𝑟ツ࿐ ke add kora jay nai. Bot admin na hole add korte parbe na.",
        event.threadID
      );
    }
  }
};
