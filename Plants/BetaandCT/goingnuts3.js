const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `goingnuts3`,
  aliases: [
    `gn3`,
    `3gn`,
    `gonutsthreenut`,
    `gonuts3nut`,
    `3gn`,
    `3gonuts`,
    `going3nuts`,
    `go3nuts`,
    `goingnuts`,
	`gonuts3`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    let [result] = await db.query("SELECT going3nuts FROM ctdecks");
    let gn3 = new EmbedBuilder()
      .setTitle(`${result[5].going3nuts}`)
      .setDescription(`${result[3].going3nuts}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].going3nuts}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].going3nuts}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].going3nuts}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].going3nuts}`,
          inline: true,
        }
      )
      .setImage(`${result[4].going3nuts}`);
    message.channel.send({ embeds: [gn3] });
  },
};
