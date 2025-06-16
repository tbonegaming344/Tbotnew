const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `cattail`,
  aliases: [`cat`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select cattail from smartycards`);
    const cat = new EmbedBuilder()
      .setThumbnail(`${result[4].cattail}`)
      .setTitle(`${result[7].cattail}`)
      .setDescription(`${result[2].cattail}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].cattail}`, inline: true },
        {
          name: "Trait",
          value: `${result[8].cattail}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].cattail}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].cattail}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [cat] });
  },
};
