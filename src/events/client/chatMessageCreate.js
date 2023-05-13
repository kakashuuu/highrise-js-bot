const { commandHandler } = require("../../handlers/handlePrefix");
const { logMessages } = require("../../assets/logs/logger");

module.exports = {
  name: "chatMessageCreate",
  once: false,
  async execute(bot, user, message) {
    const prefix = bot.config.prefix;
    if (bot.logs.messages) {
      console.log(`[${user.username}]: ${message}`);
      logMessages(user, message);
    }
    if (message.startsWith(prefix)) {
      commandHandler(bot, user, message.slice(prefix.length));
    } else {
      return;
    }
  }
};
