const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: `deckbuilders`,
  aliases: [
    `deckcreators`,
    `deckbuilder`,
    `deckcreator`,
    `deckmakers`,
    `deckmaker`,
    `builders`,
	  `creators`,
    `creator`
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    let Ccommands = Array.from(client.commands.values());
    let commands = Ccommands.filter((command) => {
      if (command.category === "DeckBuilders") {
        return command.name;
      }
    });
    let toBuildString = "";
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];
      //   console.log(commands[i])
      toBuildString += `\n<@1043528908148052089> **${command.name}**`;
    }
    let db = new EmbedBuilder()
      .setTitle("Deck Creators in tbot")
      .setDescription(
        `My Commands for deckbuilders are ${toBuildString}
Note: There are ${commands.length} total deckbuilders in Tbot`
      )
      .setColor("Random");
    message.channel.send({ embeds: [db] });
  },
};
