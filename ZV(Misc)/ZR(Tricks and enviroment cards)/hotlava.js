const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: `hotlava`,
  aliases: [`hot2`, `lava1`, `hl`],
  category: `Tricks Phase`,
  run: async (client, message, args) => {
    const hl = new EmbedBuilder()
      .setThumbnail(`${result[4].hotlava}`)
      .setTitle(`${result[7].hotlava}`)
      .setDescription(`${result[2].hotlava}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `$${result[6].hotlava}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].hotlava}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].hotlava}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].hotlava}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [hl] });
  },
};
