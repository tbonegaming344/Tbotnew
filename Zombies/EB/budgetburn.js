const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `budgetburn`,
  aliases: [
    `ebbudgetburn`,
    `burnbudget`,
    `budgetburneb`,
    `bub`,
    `budgeteb`,
    `ebbudget`,
    `budgetboogalo`,
  ],
  category: `Electric Boogaloo(EB)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT budgetburn FROM ebdecks`);
    const budgeteb = new EmbedBuilder()
      .setTitle(`${result[5].budgetburn}`)
      .setDescription(`${result[3].budgetburn}`)
      .setFooter({ text: `${result[2].budgetburn}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].budgetburn}`,
        inline: true
      },{ 
        name: "Archetype", 
        value: `${result[0].budgetburn}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].budgetburn}`,
        inline: true
      })
      .setColor("Purple")
      .setImage(`${result[4].budgetburn}`);
    message.channel.send({ embeds: [budgeteb] });
  },
};
