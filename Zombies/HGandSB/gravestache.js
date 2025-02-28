const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `gravestache`,
  aliases: [`mustachegraves`, `stachegraves`, `mustgraves`, `gravestaches`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT gravestache FROM hgdecks`);
    let gs = new EmbedBuilder()
      .setTitle(`${result[5].gravestache}`)
      .setDescription(`${result[3].gravestache}`)
      .addFields({
        name: "Deck Type",
        value: `${result[6].gravestache}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].gravestache}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].gravestache}`,
        inline: true
      })
      .setFooter({ text: `${result[2].gravestache}` })
      .setColor("Random")
      .setImage(`${result[4].gravestache}`);
    message.channel.send({ embeds: [gs] });
  },
};
