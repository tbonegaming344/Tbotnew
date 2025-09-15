const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `cliquepeas`,
  aliases: [`clique`, `cp1`, `cpeas`, `cliquepea`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select cliquepeas from megagrowcards`);
    const cp = new EmbedBuilder()
      .setThumbnail(`${result[4].cliquepeas}`)
      .setTitle(`${result[7].cliquepeas}`)
      .setDescription(`${result[2].cliquepeas}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].cliquepeas}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].cliquepeas}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].cliquepeas}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].cliquepeas}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [cp] });
  },
};
