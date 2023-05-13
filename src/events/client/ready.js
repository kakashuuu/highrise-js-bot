const { getPlayersInRoom } = require("../../utils/utils");

module.exports = {
  name: 'ready',
  once: true,
  async execute(bot, BotId, rateLimits, connectionId, sdkVersion) {
    bot.player.teleport(BotId, bot.config.coordinates.x, bot.config.coordinates.y, bot.config.coordinates.z, bot.config.coordinates.facing);
    if (bot.logs.ready) {
      const players = await getPlayersInRoom(bot);
      console.log(`${bot.config.botName} is now ready in ${bot.config.roomName} with ${players.length} players.\nBot ID: ${BotId}\nRate Limits: ${rateLimits.client}\nConnection ID: ${connectionId}`.green)
    }
  }
}