const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `schoolyard`,
  aliases: [`ntschoolyard`, `sy`, `syard`],
  category: `Neptuna(NT)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select schoolyard from ntdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].schoolyard}`)
      .setDescription(`${result[3].schoolyard}`)
      .setFooter({ text: `${result[2].schoolyard}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].schoolyard}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].schoolyard}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].schoolyard}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].schoolyard}`);
    message.channel.send({ embeds: [embed] });
  },
};
