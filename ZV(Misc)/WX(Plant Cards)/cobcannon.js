const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `cobcannon`,
  aliases: [`cob`, `cannon1`, `cc2`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select cobcannon from solarcards`);
    const cob = new EmbedBuilder()
      .setThumbnail(`${result[4].cobcannon}`)
      .setTitle(`${result[7].cobcannon}`)
      .setDescription(`${result[2].cobcannon}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].cobcannon}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].cobcannon}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].cobcannon}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].cobcannon}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [cob] });
  },
};
