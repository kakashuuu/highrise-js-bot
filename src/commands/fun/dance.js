
module.exports = {
  name: 'dance',
  description: 'Perform a random emote on someone.',
  usage: 'ping',
  aliases: ['emote', 'e', 'd'],
  cooldown: 5,
  async execute(bot, user, args) {

    try {
      const emotes = [
        'idle-dance-casual',
        'emote-float',
        'emote-lust',
        'emote-teleporting',
        'idle-singing',
        'dance-tiktok10',
        'emote-pose1',
        'dance-tiktok9',
        'emote-cute',
        'dance-tiktok8',
        'dance-tiktok2',
        'emote-cutey',
        'emote-model',
        'emote-superpose',
        'emote-pose5',
        'emote-pose3',
        'emote-pose1',
        'emote-pose8',
        'emote-pose7'
      ]
      const randomEmote = emotes[Math.floor(Math.random() * emotes.length)];
      const option = args[0];
      if (!option) {
        return await bot.player.emote(user.id, randomEmote);
      }
      if (option.startsWith('@') && bot.perms.moderators.includes(user.id)) {
        const userName = option.substring(1);
        const userId = await bot.room.players.cache.id(userName);
        if (!userId) return bot.whisper.send(user.id, `The user ${option} is not in the room.`)
        return await bot.player.emote(userId, randomEmote)
      }
      if (option === 'all' && bot.perms.moderators.includes(user.id)) {
        const players = await bot.room.players.cache.get();
        const numPlayers = players.usernames.length;

        if (numPlayers > 10) {
          const numGroups = Math.ceil(numPlayers / 5);
          const groups = [];

          // Split players into groups
          for (let i = 0; i < numGroups; i++) {
            const start = i * 5;
            const end = Math.min(start + 5, numPlayers);
            groups.push(players.usernames.slice(start, end));
          }

          // Make each group dance with a delay in between
          let delay = 0;
          groups.forEach(async (group) => {
            setTimeout(async () => {
              for (const username of group) {
                if (username !== bot.config.botName) { // Check if the username is not the bot's ID
                  const playerId = await bot.room.players.cache.id(username);
                  if (playerId !== undefined) {
                    await bot.player.emote(playerId, randomEmote);
                  }
                }
              }
            }, delay * 5000);
            delay++;
          });
        } else {
          players.usernames.forEach(async (username) => {
            if (username !== bot.config.botName) { // Check if the username is not the bot's ID
              const playerId = await bot.room.players.cache.id(username);
              await bot.player.emote(playerId, randomEmote);
            }
          });
        }
      }

    } catch (error) {
      console.error(error);
      bot.whisper.send(user.id, `Something went wrong please contact @iHsein`)
    }
  },
};