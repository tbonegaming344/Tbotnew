const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `gomorrah`,
  aliases: [`ntgomorrah`, `gomorrahnt`, `gravegargs`, `garggraves`, `doublegg`],
  category: `Neptuna(NT)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select gomorrah from ntdecks`);
    let gomorrah = new EmbedBuilder()
      .setTitle(`${result[5].gomorrah}`)
      .setDescription(`${result[3].gomorrah}`)
      .setFooter({ text: `${result[2].gomorrah}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].gomorrah}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].gomorrah}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].gomorrah}`,
        inline: true
      })
      .setColor("#000000")
      .setImage(`${result[4].gomorrah}`);
    message.channel.send({ embeds: [gomorrah] });
  },
};