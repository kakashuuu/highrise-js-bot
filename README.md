# Highrise JS Bot Template

> **This Highrise template helps you get started with your first Highrise Bot.**

## **⚙️ Installation** 
```
npm install or run the install.bat
```

## **📥 Get A Clone**
```
git clone https://github.com/sphinixFTW/highrise-js-bot.git
```

## **✨ Features**

- Easy-to-use interface.
- Beginner-friendly design.
- Advanced command and event handlers.
- Customizable permissions and cooldowns for commands.
- Flexible configuration file for easy modifications.


## **🎐 Usage**
To start the bot:
```
node app.js or node . or run the start.bat
```

PATH: src/commands/category/file.js Example:
```js
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
```
PATH: config/permission.json
```json
{
    "permissions": [
        {
            "user_id": "change-me",
            "username": "change-me",
            "permissions": [
                "emote"
            ]
        }
    ]
}
```

## Note

While you have the freedom to modify this package to suit your needs, please refrain from claiming it as your own. Let's respect the efforts put into creating and sharing this resource.