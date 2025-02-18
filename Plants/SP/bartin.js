const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `bartin`,
  aliases: [
    `bartindb`,
    `dbbartin`,
    `burstmartin`,
    `boredtin`,
    `bmartin`,
    `bartinburst`,
    `bartburst`,
  ],
  category: `Spudow(SP)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT bartin from spdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].bartin}`)
      .setDescription(`${result[3].bartin}`)
      .setFooter({ text: `${result[2].bartin}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].bartin}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].bartin}`,
        inline: true,
      },{ 
        name: "Deck Cost", 
        value: `${result[1].bartin}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].bartin}`);
    message.channel.send({ embeds: [embed] });
  },
};
