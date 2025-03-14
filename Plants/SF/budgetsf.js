const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `budgetswarmsf`,
  aliases: [
    `sfbudgetswarn`,
    `bsfswarm`,
    `budgetswarmflare`,
    `flareswarmbudget`,
    `budgetsfswarm`,
    `solarflarebudgetswarm`,
    `budgetsf`,
    `sfbudget`,
    `budgetsolarflare`,
    `solarflarebudget`,
    `budgetswarmflare`,
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT budgetswarmsf from sfdecks`);
    let budgetswarm = new EmbedBuilder()
      .setTitle(`${result[5].budgetswarmsf}`)
      .setDescription(`${result[3].budgetswarmsf}`)
      .setFooter({ text: `${result[2].budgetswarmsf}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetswarmsf}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetswarmsf}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetswarmsf}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetswarmsf}`);
    message.channel.send({ embeds: [budgetswarm] });
  },
};
