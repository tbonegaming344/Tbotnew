const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `coolbean`,
  aliases: [`cool`, `cb3`, `cbean`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select coolbean from smartycards`);
    const cb = new EmbedBuilder()
      .setThumbnail(`${result[4].coolbean}`)
      .setTitle(`${result[7].coolbean}`)
      .setDescription(`${result[2].coolbean}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].coolbean}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].coolbean}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].coolbean}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].coolbean}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [cb] });
  },
};
