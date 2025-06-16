const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `blackeyedpea`,
  aliases: [`bep`, `blackeyed`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select blackeyedpea from megagrowcards`);
    const bep = new EmbedBuilder()
      .setThumbnail(`${result[4].blackeyedpea}`)
      .setTitle(`${result[7].blackeyedpea}`)
      .setDescription(`${result[2].blackeyedpea}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].blackeyedpea}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].blackeyedpea}`,
          inline: true,
        },
        { name: "\u200B", value: "\u200B", inline: true },
        {
          name: "Set-Rarity",
          value: `${result[5].blackeyedpea}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].blackeyedpea}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [bep] });
  },
};
