module.exports = {
  name: 'ping',
  description: 'get the bot ping',
  usage: 'ping',
  aliases: ['latency'],
  cooldown: 10,
  async execute(bot, user, args) {
    const latency = await bot.ping.get()
    bot.message.send(`🤖 The bot latency is: ${latency}ms`)
  },
};
