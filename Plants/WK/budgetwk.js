const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `budgetwkmidheal`,
  aliases: [
    `wkbudget`,
    `bwk`,
    `budgetwallknight`,
    `budgethealmidwk`,
    `budgetmidwk`,
    `budgetmidrandgewk`,
    `budgetmidrangewallknight`,
    `wkbudgethealmid`,
    `wkbudgetmidheal`,
    `budgetwk`,
    `budgetmidknight`,
  ],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT budgetwkmidheal from wkdecks`);
    let budgetwk = new EmbedBuilder()
      .setTitle(`${result[5].budgetwkmidheal}`)
      .setDescription(`${result[3].budgetwkmidheal}`)
      .setFooter({ text: `${result[2].budgetwkmidheal}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetwkmidheal}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetwkmidheal}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetwkmidheal}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetwkmidheal}`);
    message.channel.send({ embeds: [budgetwk] });
  },
};
