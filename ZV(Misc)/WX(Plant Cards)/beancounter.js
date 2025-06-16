const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `beancounter`,
  aliases: [`counter`, `bc3`, `bcounter`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select beancounter from smartycards`);
    const bc = new EmbedBuilder()
      .setThumbnail(`${result[4].beancounter}`)
      .setTitle(`${result[7].beancounter}`)
      .setDescription(`${result[2].beancounter}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].beancounter}`, inline: true },
        {
          name: "Trait",
          value: `${result[8].beancounter}`,
          inline: true,
        },
        {
          name: "Ability",
          value: `${result[0].beancounter}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].beancounter}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].beancounter}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [bc] });
  },
};
