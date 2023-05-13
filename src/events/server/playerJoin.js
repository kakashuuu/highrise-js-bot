
const { logJoin } = require("../../assets/logs/logger");

module.exports = {
  name: 'playerJoin',
  once: false,
  async execute(bot, user) {
    if (bot.logs.join) {
      logJoin(user);
      console.log(`${user.username}(${user.id}) Joined the room`);
    }
    bot.message.send(`${user.username} Joined the room`)
  }
};
