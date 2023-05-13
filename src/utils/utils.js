module.exports = {
  /**
   * Retrieves the players in the room.
   * @param {object} bot - The bot instance.
   * @returns {Promise<object[]>} - A promise that resolves to an array of player objects.
   */
  getPlayersInRoom: async (bot) => {
    const results = await bot.room.players.fetch();
    return results;
  },

  /**
   * Calculates the bot's uptime.
   * @returns {string} - The formatted uptime string.
   */
  getUptime: () => {
    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 60 * 60));
    const hours = Math.floor((uptimeSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((uptimeSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    return `⏰ I've been online for: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  },
};
