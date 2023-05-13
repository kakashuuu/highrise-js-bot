const { formatNumber } = require("../../utils/utils");

module.exports = {
  name: 'wallet',
  description: 'get the bot\'s wallet',
  usage: 'wallet',
  async execute(bot, user, args) {
    const amount = await bot.wallet.amount()
    const type = await bot.wallet.type()
    bot.message.send(`I currently have ${formatNumber(amount)} ${type}`);
  },
};