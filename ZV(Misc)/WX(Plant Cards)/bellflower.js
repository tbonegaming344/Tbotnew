const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `bellflower`,
  aliases: [`bell`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select bellflower from solarcards`);
    const bell = new EmbedBuilder()
      .setThumbnail(`${result[4].bellflower}`)
      .setTitle(`${result[7].bellflower}`)
      .setDescription(`${result[2].bellflower}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].bellflower}`, inline: true },
        {
          name: "Set-Rarity",
          value: `${result[5].bellflower}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].bellflower}`,
          inline: true,
        }
      );
    message.channel.send({ embeds: [bell] });
  },
};
