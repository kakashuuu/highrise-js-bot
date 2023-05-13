const { commandHandler } = require("../../handlers/handlePrefix")

module.exports = {
  name: 'whisperMessageCreate',
  once: false,
  async execute(bot, user, message) {

    const prefix = bot.config.prefix;
    const moderators = bot.perms.moderators;
    if (bot.logs.whisper) {
      console.log(`(whisper)[${user.username}]: ${message}`);
    }
    if (message.startsWith('//') && moderators.includes(user.id)) {
      const args = message.split('//');
      const text = args.join(" ");
      bot.message.send(text);
    } else if (message.startsWith(prefix)) {
      commandHandler(bot, user, message.slice(1))
    } else {
      return;
    }
  }
}