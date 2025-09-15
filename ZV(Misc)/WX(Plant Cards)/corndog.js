const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `corndog`,
  aliases: [`corg`, `dog1`, `cd2`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select corndog from guardiancards`);
    const cd = new EmbedBuilder()
      .setThumbnail(`${result[4].corndog}`)
      .setTitle(`${result[7].corndog}`)
      .setDescription(`${result[2].corndog}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].corndog}`, inline: true },
        {
          name: "Traits",
          value: `${result[8].corndog}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].corndog}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].corndog}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [cd] });
  },
};
