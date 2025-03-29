const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `youngeggmartin`,
  aliases: [`yem`, `youngeggm`, `em`, `yemartin`, `eggmartin`],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select youngeggmartin from pbdecks`);
    let youngeggmartin = new EmbedBuilder()
      .setTitle(`${result[5].youngeggmartin}`)
      .setDescription(`${result[3].youngeggmartin}`)
      .setColor("Purple")
      .setFooter({ text: `${result[2].youngeggmartin}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].youngeggmartin}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].youngeggmartin}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].youngeggmartin}`,
        inline: true
      })
      .setImage(`${result[4].youngeggmartin}`);
    message.channel.send({ embeds: [youngeggmartin] });
  },
};
