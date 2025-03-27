const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `watertron`,
  aliases: [`wettron`, `wetron`],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    let [result] = await db.query("SELECT watertron FROM ctdecks");
    let watertron = new EmbedBuilder()
      .setTitle(`${result[5].watertron}`)
      .setDescription(`${result[3].watertron}`)
      .setFooter({ text: `${result[2].watertron}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].watertron}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].watertron}`,
        inline: true
      },
      { name: "Deck Cost",
        value: `${result[1].watertron}`,
        inline: true
      })
      .setImage(`${result[4].watertron}`)
      .setColor("White");
    message.channel.send({ embeds: [watertron] });
  },
};