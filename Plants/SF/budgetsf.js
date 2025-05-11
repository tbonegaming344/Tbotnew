const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
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
    `budgetflare`,
    `burstflare`,
    `budgetswarmflare`,
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT budgetswarmsf from sfdecks`);
    const budgetswarm = new EmbedBuilder()
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
      .setColor("Yellow")
      .setImage(`${result[4].budgetswarmsf}`);
    message.channel.send({ embeds: [budgetswarm] });
  },
};
