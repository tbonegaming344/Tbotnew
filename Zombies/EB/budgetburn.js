const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
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
    let [result] = await db.query(`SELECT budgetburn FROM ebdecks`);
    let budgeteb = new EmbedBuilder()
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
      .setColor("Random")
      .setImage(`${result[4].budgetburn}`);
    message.channel.send({ embeds: [budgeteb] });
  },
};
