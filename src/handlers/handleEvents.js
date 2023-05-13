const fs = require('fs');
const path = require('path');

module.exports = (bot) => {
  const eventsDir = path.join(__dirname, '../events');

  const events = [];
  // read all client event files from the events/client directory
  fs.readdirSync(path.join(eventsDir, 'client')).forEach(file => {
    const eventPath = path.join(eventsDir, 'client', file);
    const event = require(eventPath);
    bot.on(event.name, (...args) => event.execute(bot, ...args));
    events.push({
      Event: file,
      Status: "✅"
    });
  });

  console.table(events, ["Event", "Status"]);
  console.info("\x1b[36m%s\x1b[0m", "Loaded Highrise Client Events.");

  const serverEvents = [];
  // read all server event files from the events/server directory
  fs.readdirSync(path.join(eventsDir, 'server')).forEach(file => {
    const eventPath = path.join(eventsDir, 'server', file);
    const event = require(eventPath);
    bot.on(event.name, (...args) => event.execute(bot, ...args));
    serverEvents.push({
      Event: file,
      Status: "✅"
    });
  });

  console.table(serverEvents, ["Event", "Status"]);
  console.info("\x1b[36m%s\x1b[0m", "Loaded Highrise Server Events.");
};
