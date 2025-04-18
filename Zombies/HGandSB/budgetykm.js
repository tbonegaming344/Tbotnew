const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `budgetykm`,
  aliases: [`ykmbudget`, `budgethg`, `hgbudget`, `hgbudgetykm`,],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT budgetykm FROM hgdecks`);
    const embed = new EmbedBuilder()
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
      .setColor("#000000")
      .setImage(`${result[4].budgetykm}`);
    message.channel.send({ embeds: [embed] });
  },
};
