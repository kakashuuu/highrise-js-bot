module.exports = {
  name: 'summon',
  description: 'summon a player',
  usage: 'summon <user>',
  aliases: ['call', 'tptome', 'recall', 'c'],
  permissions: ['teleport'],
  cooldown: 5,
  async execute(bot, user, args) {
    try {

      const prefix = bot.config.prefix;

      const username = args[0]
      if (!username) return bot.whisper.send(user.id, `Invalid username, Example: ${prefix}summon @user`)

      const target = username.replace('@', '');
      if (!target) return bot.whisper.send(user.id, `Invalid username, Example: ${prefix}summon @user`)

      const userId = await bot.room.players.cache.id(target)
      if (!userId) return bot.whisper.send(user.id, `The user ${target} is not in the room.`)

      const myPosition = await bot.room.players.cache.position(user.id)

      if ('entity_id' in myPosition) {
        return bot.whisper.send(user.id, `Sorry you can't summon a player on entity.`);
      }
      bot.player.teleport(userId, myPosition.x, myPosition.y, myPosition.z, myPosition.facing);

    } catch (error) {
      bot.whisper.send(user.id, `Something went wrong, please contact @iHsein`)
      console.error(error)
    }
  },
};
