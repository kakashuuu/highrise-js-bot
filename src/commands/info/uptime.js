const { getUptime } = require("../../utils/utils");

module.exports = {
  name: 'uptime',
  description: 'Get the bot uptime.',
  usage: 'uptime',
  execute(bot, user, args) {
    bot.message.send(getUptime())
  },
};