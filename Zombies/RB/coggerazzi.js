const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `coggerazzi`,
  aliases: [
    `poggerrazzirb`,
    `pogrb`,
    `rbpog`,
    `poggers`,
    `poggerazzi`,
    `poggerrazi`,
    `pogger`,
    `poggerrazzi`
  ],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select poggerrazzi from rbdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].poggerrazzi}`)
      .setDescription(`${result[3].poggerrazzi}`)
      .setFooter({ text: `${result[2].poggerrazzi}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].poggerrazzi}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].poggerrazzi}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].poggerrazzi}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].poggerrazzi}`);
    message.channel.send({ embeds: [embed] });
  },
};
