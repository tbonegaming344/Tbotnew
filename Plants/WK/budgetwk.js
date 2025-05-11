const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
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
    `bomid`,
    `wkbudgetmidheal`,
    `budgetwk`,
    `budgetmidknight`,
  ],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT budgetwkmidheal from wkdecks`);
    const budgetwk = new EmbedBuilder()
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
      .setColor("Yellow")
      .setImage(`${result[4].budgetwkmidheal}`);
    message.channel.send({ embeds: [budgetwk] });
  },
};
