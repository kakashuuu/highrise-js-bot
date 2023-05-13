module.exports = {
  name: 'tpto',
  description: 'Teleport to a player',
  usage: 'tpto <user>',
  aliases: ['follow', 'stalk'],
  permissions: ['teleport'],
  cooldown: 5,

  async execute(bot, user, args) {
    try {

      const prefix = bot.config.prefix;
      const username = args[0]
      if (!username) return bot.whisper.send(user.id, `Invalid username, Example: ${prefix}tpto @user`)

      const target = username.replace('@', '');
      if (!target) return bot.whisper.send(user.id, `Invalid username, Example: ${prefix}tpto @user`)

      const userId = await bot.room.players.cache.id(target)
      if (!userId) return bot.whisper.send(user.id, `The user ${target} is not in the room.`)

      const targetLocation = await bot.room.players.cache.position(userId)
      return bot.player.teleport(user.id, targetLocation.x, targetLocation.y, targetLocation.z, targetLocation.facing);

    } catch (error) {
      bot.whisper.send(user.id, `Something went wrong, please contact @iHsein`)
      console.error(error)
    }
  },
};
