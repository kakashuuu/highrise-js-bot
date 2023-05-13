const { Highrise } = require("highrise-js-sdk");
const handleEvents = require("./src/handlers/handleEvents");
const config = require("./config/config");

const bot = new Highrise(config.authorization.token, config.authorization.room);

bot.config = config.config;
bot.perms = config.permissions;
bot.auth = config.authorization;
bot.emojis = config.emojis;
bot.logs = config.loggers;
bot.settings = config.settings;

require('colors');
handleEvents(bot);


// IF bot.config.cmdChat is set to true, you will be able to send messages through the cmd.
if (bot.settings.cmdChat) {
  let y = process.openStdin()
  y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.message.send(x.join(" "));
  });
}
