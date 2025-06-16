const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: `halfbanana`,
  aliases: [`half`, `hb2`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const hb = new EmbedBuilder()
      .setThumbnail(`${result[4].halfbanana}`)
      .setTitle(`${result[7].halfbanana}`)
      .setDescription(`${result[2].halfbanana}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].halfbanana}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].halfbanana}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].halfbanana}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].halfbanana}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [hb] });
  },
};
