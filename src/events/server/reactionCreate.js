module.exports = {
  name: 'reactionCreate',
  once: false,
  async execute(bot, sender, receiver, reaction) {
    if (bot.logs.reactions) {
      console.log(`${sender.username} sent ${reaction} to ${receiver.username}`);
    }
    if (bot.settings.kickOnReact) {
      const IDS = bot.perms.moderators;
      if (IDS.includes(sender.id) && reaction === bot.settings.reaction) {
        await bot.player.kick(receiver.id);
      }
    }
  }
}
