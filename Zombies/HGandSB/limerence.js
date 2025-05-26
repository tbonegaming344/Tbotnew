const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `limerence`,
  aliases: [`mustachemid`, `azucar`, `midmustache`, `sbmid`, `midsb`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (Client, message, args) => {
    const [result] = await db.query(`select limerence from sbdecks`);
    const limerence = new EmbedBuilder()
      .setTitle(`${result[5].limerence}`)
      .setDescription(`${result[3].limerence}`)
      .setFooter({ text: `${result[2].limerence}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].limerence}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].limerence}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].limerence}`,
          inline: true,
        }
      )
      .setColor("#000000")
      .setImage(`${result[4].limerence}`);
    message.channel.send({ embeds: [limerence] });
  },
};
