const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `bluesberry`,
  aliases: [`blues`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select bluesberry from kabloomcards`);
    const blues = new EmbedBuilder()
      .setThumbnail(`${result[4].bluesberry}`)
      .setTitle(`${result[7].bluesberry}`)
      .setDescription(`${result[2].bluesberry}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].bluesberry}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].bluesberry}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].bluesberry}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].bluesberry}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [blues] });
  },
};
