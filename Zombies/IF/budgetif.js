const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `budgetif`,
  aliases: [
    `ifgraveburn`,
    `ifbudget`,
    `ifgb`,
    `bif`,
    `ifb`,
    `impfinitybudget`,
    `impfinitygraveburn`,
    `impfinitygb`,
    `impfinityb`,
    `ifbudgetgraveburn`,
    `budgetgraveburnif`,
    `budgetgraveburn`,
    `budgetimpfinity`
  ],
  category: `Impfinity(IF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT budgetif FROM ifdecks`);
    let budgetif = new EmbedBuilder()
      .setTitle(`${result[5].budgetif}`)
      .setDescription(`${result[3].budgetif}`)
      .setFooter({ text: `${result[2].budgetif}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetif}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetif}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetif}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetif}`);
    message.channel.send({ embeds: [budgetif] });
  },
};
