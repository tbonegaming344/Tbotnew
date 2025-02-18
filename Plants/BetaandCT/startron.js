const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `startron`,
  aliases: [`kendricklimear`, `kendricktron`],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    let [result] = await db.query("SELECT startron FROM ctdecks");
    let embed = new EmbedBuilder()
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
      .setColor("Random");
    message.channel.send({ embeds: [embed] });
  },
};
