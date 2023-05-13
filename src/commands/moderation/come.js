module.exports = {
  name: 'come',
  description: 'summon the bot',
  usage: 'come',
  aliases: ['follow-me'],
  developer: true,
  cooldown: 5,
  async execute(bot, user, args) {
    try {

      const myPosition = await bot.room.players.cache.position(user.id)
      if ('entity_id' in myPosition) {
        return bot.whisper.send(user.id, `Sorry you can't summon the bot on entity.`);
      }
      bot.move.walk(myPosition.x, myPosition.y, myPosition.z, myPosition.facing);

    } catch (error) {
      bot.whisper.send(user.id, `Something went wrong, please contact @iHsein`)
      console.error(error)
    }
  },
};
