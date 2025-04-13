const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `budgetsb`,
  aliases: [
    `sbbudget`,
    `budgetsuperbrains`,
    `superbrainsbudget`,
    `bsb`,
    `budgetscisctaches`,
    `sciencestachesbudget`,
    `budgetscistaches`,
    `scistachesbudget`,
    `scistaches`,
	`scistache`
  ],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT budgetsb FROM sbdecks`);
    let budgetsb = new EmbedBuilder()
      .setTitle(`${result[5].budgetsb}`)
      .setDescription(`${result[3].budgetsb}`)
      .setFooter({ text: `${result[2].budgetsb}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetsb}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetsb}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetsb}`,
          inline: true,
        }
      )
      .setColor("#000000")
      .setImage(`${result[4].budgetsb}`);
    message.channel.send({ embeds: [budgetsb] });
  },
};
