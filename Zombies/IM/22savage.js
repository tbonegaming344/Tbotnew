const db = require("../../index.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: `22savage`,
  aliases: [`savage22`, `frenzyrange`, `imavimp`],
  category: `Immorticia(IM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT savage22 FROM imdecks`);
    let savage22 = new EmbedBuilder()
      .setTitle(`${result[5].savage22}`)
      .setDescription(`${result[3].savage22}`)
      .setFooter({ text: `${result[2].savage22}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].savage22}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].savage22}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].savage22}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].savage22}`);
    message.channel.send({ embeds: [savage22] });
  },
};
