const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `startron`,
  aliases: [`kendricklimear`, `kendricktron`, `starshell`],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    const [result] = await db.query("SELECT startron FROM ctdecks");
    const embed = new EmbedBuilder()
      .setTitle(`${result[5].startron}`)
      .setDescription(`${result[3].startron}`)
      .setFooter({ text: `${result[2].startron}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].startron}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].startron}`,
        inline: true
      },
      { name: "Deck Cost",
        value: `${result[1].startron}`,
        inline: true
      })
      .setImage(`${result[4].startron}`)
      .setColor("White");
    message.channel.send({ embeds: [embed] });
  },
};
