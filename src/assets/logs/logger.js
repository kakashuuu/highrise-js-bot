const fs = require("fs");
const path = require("path");

const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });

function logMessages(user, message) {
  const filePath = path.join(__dirname, "../../../lib/playerMessages.log");

  const playerName = user.username;
  const playerID = user.id;

  const logMessage = `[${playerName}](${playerID}): ${message} at: (${timestamp})\n`;

  fs.appendFile(filePath, logMessage, (err) => {
    if (err) {
      console.error(`Failed to log message: ${err}`);
    }
  })
}

function logJoin(user) {
  const filePath = path.join(__dirname, "../../../lib/playerJoined.log");

  const playerName = user.username;
  const playerID = user.id;

  const logMessage = `[${playerName}](${playerID}): Joined the room at: (${timestamp})\n`;

  fs.appendFile(filePath, logMessage, (err) => {
    if (err) {
      console.error(`Failed to log joins: ${err}`);
    }
  })
}

function logLeave(user) {
  const filePath = path.join(__dirname, "../../../lib/playerLeft.log");

  const playerName = user.username;
  const playerID = user.id;

  const logMessage = `[${playerName}](${playerID}): Left the room at: (${timestamp})\n`;

  fs.appendFile(filePath, logMessage, (err) => {
    if (err) {
      console.error(`Failed to log leave: ${err}`);
    }
  })
}

function logTips(sender, reciever, item) {
  const filePath = path.join(__dirname, "../../../lib/playerTips.log");

  const senderName = sender.username;
  const senderID = sender.id;

  const recieverName = reciever.username;
  const recieverID = reciever.id;

  const logMessage = `[${senderName}](${senderID}) tipped [${recieverName}](${recieverID}) ${item.amount} ${item.type} at ${timestamp}\n`;

  fs.appendFile(filePath, logMessage, (err) => {
    if (err) {
      console.error(`Failed to log tips: ${err}`);
    }
  })
}

module.exports = {
  logJoin,
  logLeave,
  logMessages,
  logTips
}