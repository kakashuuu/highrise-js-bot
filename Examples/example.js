/**
 * Module Description:
 * This module contains the 'change-me' command, which prints 'Hello world!' as a response.
 *
 * Command Details:
 * - Name: change-me
 * - Description: Prints 'Hello world!'
 * - Usage: change-me
 * - Aliases: change-me, change-me
 * - Developer: False (can be used by non-developers)
 * - Disabled: False (enabled)
 * - Cooldown: 5 seconds
 */

module.exports = {
  name: 'change-me',
  description: 'change-me',
  usage: 'change-me',
  aliases: ['change-me', 'change-me'],
  developer: false,
  disabled: false,
  cooldown: 5,
  execute(bot, user, args) {
    /**
     * Executes the 'change-me' command.
     *
     * @param {Bot} bot - The instance of the bot.
     * @param {User} user - The user who triggered the command.
     * @param {Array<string>} args - The command arguments.
     */
    bot.message.send('Hello world!');
  },
};
