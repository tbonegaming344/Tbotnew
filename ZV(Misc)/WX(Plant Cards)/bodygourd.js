const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `bodygourd`,
  aliases: [`body`, `gourd`, `bg1`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select gourd from guardiancards`);
    const body = new EmbedBuilder()
      .setThumbnail(`${result[4].gourd}`)
      .setTitle(`${result[7].gourd}`)
      .setDescription(`${result[2].gourd}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].gourd}`, inline: true },
        {
          name: "Traits",
          value: `${result[8].gourd}`,
          inline: true,
        },
        {
          name: "Ability",
          value: `${result[0].gourd}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].gourd}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].gourd}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [body] });
  },
};
