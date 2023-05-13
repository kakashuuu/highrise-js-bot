module.exports = {
  name: 'print',
  description: 'print a players data',
  usage: 'print <user>',
  permissions: ['print'],
  cooldown: 5,
  async execute(bot, user, args) {
    try {

      const prefix = bot.config.prefix;

      const username = args[0]
      if (!username) return bot.whisper.send(user.id, `Invalid username, Example: ${prefix}print @user`)

      const target = username.replace('@', '');
      if (!target) return bot.whisper.send(user.id, `Invalid username, Example: ${prefix}print @user`)

      const userId = await bot.room.players.cache.id(target);
      if (!userId) return bot.whisper.send(user.id, `The user ${target} is not in the room.`)

      const userPosition = await bot.room.players.cache.position(userId);

      let msg;

      if ('x' in userPosition && 'y' in userPosition && 'z' in userPosition && 'facing' in userPosition) {
        msg = `[PRINT]: User ID: ${userId} User Name: ${target} User Position: ${userPosition.x}, ${userPosition.y}, ${userPosition.z}, ${userPosition.facing}`
      } else if ('entity_id' in userPosition && 'anchor_ix' in userPosition) {
        msg = `[PRINT]: User ID: ${userId} User Name: ${target} User Position: ${userPosition.entity_id}, ${userPosition.anchor_ix}`
      }

      console.log(`${msg}`.yellow);
      bot.message.send(msg);

    } catch (error) {
      bot.whisper.send(user.id, `Something went wrong, please contact @iHsein`)
      console.error(error)
    }
  },
};
