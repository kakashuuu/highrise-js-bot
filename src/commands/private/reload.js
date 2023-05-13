const reloadCommand = {
  name: 'reload',
  description: 'Reloads a command',
  usage: '!reload <command name>',
  developer: true,
  execute(bot, user, args, commands) {

    const commandName = args[1].toLowerCase();
    const categoryName = args[0].toLowerCase()

    if (!categoryName || !commandName) return bot.whisper.send(user.id, `Invalid args.\nExample: !reload <category> <commandName>`)
    const command = commands.get(commandName);

    if (!command) {
      return bot.whisper.send(user.id, `Command "${commandName}" not found`);
    }

    delete require.cache[require.resolve(`../../commands/${categoryName}/${command.name}.js`)]; // delete the cached module
    const newCommand = require(`../../commands/${categoryName}/${command.name}.js`); // require the updated module
    commands.set(newCommand.name, newCommand); // update the commands map

    bot.message.send(`Command "${commandName}" has been reloaded`);
  },
};

module.exports = reloadCommand;
