const fs = require('fs');

const cooldowns = new Map();
const commands = new Map();

console.log("[i] Highrise Command Handler:".blue);


const commandFolders = fs.readdirSync('./src/commands');

for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter((file) => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../commands/${folder}/${file}`);
    commands.set(command.name, command);

    if (command.aliases) {
      for (const alias of command.aliases) {
        commands.set(alias, command);
      }
    }
    console.log(`Loading Highrise command ${file}`.green);
  }
}

const commandHandler = (bot, user, message) => {
  const args = message.split(' ');
  const commandName = args.shift().toLowerCase();

  const command = commands.get(commandName);

  if (!command) {
    return;
  }

  // Check user permissions
  const permissions = require('../../config/json/permissions.json').permissions;
  const userPermissions = permissions.find(permission => permission.user_id === user.id);

  if (command.permissions && (!userPermissions || !userPermissions.permissions.some(p => command.permissions.includes(p)))) {
    return bot.whisper.send(user.id, `Sorry, you don't have permission to use the ${command.name} command`);
  }

  if (command.developer && !bot.perms.owners.includes(user.id)) {
    return bot.whisper.send(user.id, `Sorry, the command ${command.name} is owner only command.`)
  }

  if (command.disabled && !bot.perms.owners.includes(user.id)) {
    return bot.whisper.send(user.id, `Sorry, the command ${command.name} is currently under constructions.`)
  }

  // Check cooldowns
  const userId = user.id;
  if (!bot.perms.owners.includes(userId)) {
    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Map());
    }
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 0) * 1000;
    if (timestamps.has(userId)) {
      const expirationTime = timestamps.get(userId) + cooldownAmount;
      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return bot.whisper.send(user.id, `Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the ${command.name} command`);
      }
    }
    timestamps.set(userId, now);
    setTimeout(() => timestamps.delete(userId), cooldownAmount);
  }

  try {
    command.execute(bot, user, args, commands);
  } catch (error) {
    console.error(error);
    bot.whisper.send(user.id, 'An error occurred while executing the command');
  }
};

module.exports = { commandHandler };
