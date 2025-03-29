const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `professorpackage`,
  aliases: [`pbpackage`, `packagepb`, `packagebrainstorm`, `packpb`, `pbpack`],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT professorpackage FROM pbdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].professorpackage}`)
      .setDescription(`${result[3].professorpackage}`)
      .setFooter({ text: `${result[2].professorpackage}` })
      .setColor("Purple")
      .setImage(`${result[4].professorpackage}`)
      .addFields({
        name: "Deck Type",
        value: `${result[6].professorpackage}`,
        inline: true
      },{ 
        name: "Archetype",
        value: `${result[0].professorpackage}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].professorpackage}`,
        inline: true
      });
    message.channel.send({ embeds: [embed] });
  },
};
