const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `cosmicnut`,
  aliases: [`cnut`, `cn`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select cosmicnut from guardiancards`);
    const cn = new EmbedBuilder()
      .setThumbnail(`${result[4].cosmicnut}`)
      .setTitle(`${result[7].cosmicnut}`)
      .setDescription(`${result[2].cosmicnut}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].cosmicnut}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].cosmicnut}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].cosmicnut}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].cosmicnut}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [cn] });
  },
};
