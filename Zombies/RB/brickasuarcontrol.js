const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `brickasuarcontrol`,
  aliases: [
    `mechacontrol`,
    `mptrickster`,
    `mechasaurcontrol`,
    `brickasaurctrl`,
    `brickasaur`,
	`brickasaurcontrol`,
    `mechcontrol`,
  ],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select mechacontrol from rbdecks`);
    let mc = new EmbedBuilder()
      .setTitle(`${result[5].mechacontrol}`)
      .setDescription(`${result[3].mechacontrol}`)
      .setFooter({ text: `${result[2].mechacontrol}` })
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].mechacontrol}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].mechacontrol}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].mechacontrol}`,
          inline: true,
        }
      )
      .setImage(`${result[4].mechacontrol}`);
    message.channel.send({ embeds: [mc] });
  },
};
