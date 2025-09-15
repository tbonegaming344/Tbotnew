const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `cosmicmushroom`,
  aliases: [`cm1`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select cosmicmushroom from kabloomcards`);
    const cm = new EmbedBuilder()
      .setThumbnail(`${result[4].cosmicmushroom}`)
      .setTitle(`${result[7].cosmicmushroom}`)
      .setDescription(`${result[2].cosmicmushroom}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].cosmicmushroom}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].cosmicmushroom}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].cosmicmushroom}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].cosmicmushroom}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [cm] });
  },
};
