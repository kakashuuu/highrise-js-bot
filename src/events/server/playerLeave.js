
const { logLeave } = require("../../assets/logs/logger");

module.exports = {
  name: 'playerLeave',
  once: false,
  async execute(bot, user) {
    if (bot.logs.join) {
      logLeave(user);
      console.log(`${user.username}(${user.id}) Left the room`);
    }
    bot.message.send(`${user.username} Left the room`)
  }
};
