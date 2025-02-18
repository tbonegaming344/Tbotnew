const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `budgetykm`,
  aliases: [`ykmbudget`, `budgethg`, `hgbudget`, `hgbudgetykm`,],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT budgetykm FROM hgdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].budgetykm}`)
      .setDescription(`${result[3].budgetykm}`)
      .setFooter({ text: `${result[2].budgetykm}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].budgetykm}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].budgetykm}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].budgetykm}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].budgetykm}`);
    message.channel.send({ embeds: [embed] });
  },
};
