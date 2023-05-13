module.exports = {
  name: 'emoteCreate',
  once: false,
  async execute(bot, sender, receiver, emote) {
    if (bot.logs.emotes) {
      console.log(`${sender.username} sent ${emote} to ${receiver.username}`);
    }
  },
};
