const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `blockbuster`,
  aliases: [`block`, `buster2`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select blockbuster from guardiancards`);
    const bust = new EmbedBuilder()
      .setThumbnail(`${result[4].blockbuster}`)
      .setTitle(`${result[7].blockbuster}`)
      .setDescription(`${result[2].blockbuster}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].blockbuster}`, inline: true },
        {
          name: "Trait",
          value: `${result[8].blockbuster}`,
          inline: true,
        },
        {
          name: "Ability",
          value: `${result[0].blockbuster}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].blockbuster}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].blockbuster}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [bust] });
  },
};
