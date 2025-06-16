const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `bloomingheart`,
  aliases: [`blooming`, `heart`, `bh1`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select bloomingheart from kabloomcards`);
    const bh = new EmbedBuilder()
      .setThumbnail(`${result[4].bloomingheart}`)
      .setTitle(`${result[7].bloomingheart}`)
      .setDescription(`${result[2].bloomingheart}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].bloomingheart}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].bloomingheart}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].bloomingheart}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].bloomingheart}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [bh] });
  },
};
