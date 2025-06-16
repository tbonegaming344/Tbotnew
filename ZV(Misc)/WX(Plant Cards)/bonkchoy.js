const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `bonkchoy`,
  aliases: [`bonk`, `choy`, `bc2`, `bchoy`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select bonkchoy from megagrowcards`);
    const bc = new EmbedBuilder()
      .setThumbnail(`${result[4].bonkchoy}`)
      .setTitle(`${result[7].bonkchoy}`)
      .setDescription(`${result[2].bonkchoy}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].bonkchoy}`, inline: true },
        {
          name: "Traits",
          value: `${result[8].bonkchoy}`,
          inline: true,
        },
        {
          name: "Ability",
          value: `${result[0].bonkchoy}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].bonkchoy}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].bonkchoy}`,
          inline: true,
        }
      );

    message.channel.send({ embeds: [bc] });
  },
};
