const { logTips } = require('../../assets/logs/logger');
module.exports = {
  name: 'tipReactionCreate',
  once: false,
  async execute(bot, sender, receiver, item) {
    if (bot.logs.tips) {
      logTips(sender, receiver, item);
      console.log(`Tip reaction from ${sender.username} to ${receiver.username}: ${item.amount} ${item.type}`);
    }

    if (bot.settings.danceOnTip) {
      if (receiver.id === bot.config.botId) {
        await bot.player.emote(sender.id, bot.settings.emoteId);
      }
    }
  }
}
