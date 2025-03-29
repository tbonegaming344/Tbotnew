const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `sunbandits`,
  aliases: [`sushibandits`, `sunb`, `sunbandit`, `bandits`],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select sunbandits from rbdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].sunbandits}`)
      .setDescription(`${result[3].sunbandits}`)
      .setFooter({ text: `${result[2].sunbandits}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].sunbandits}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].sunbandits}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].sunbandits}`,
        inline: true
      })
      .setColor("Orange")
      .setImage(`${result[4].sunbandits}`);
    message.channel.send({ embeds: [embed] });
  },
};
