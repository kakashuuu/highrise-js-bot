module.exports = {
  name: 'TrackPlayerMovement',
  once: false,
  async execute(bot, user, position) {
    if (bot.logs.movements) {
      if ('x' in position && 'y' in position && 'z' in position && 'facing' in position) {
        console.log(`${user.username} moved to ${position.x}, ${position.y}, ${position.z}, ${position.facing}`);
      } else if ('entity_id' in position && 'anchor_ix' in position) {
        console.log(`${user.username} moved to anchor ${position.entity_id} at index ${position.anchor_ix}`);
      }
    }
  }
}