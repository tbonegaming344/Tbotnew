const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `mechagold`,
  aliases: [`potcontrol`, `mechapot`, `pbscope`],
  category: `Professor Brainstorm(PB)`,
  run: async (Client, message, args) => {
    const [result] = await db.query(`select mechagold from pbdecks`);
    const mechagold = new EmbedBuilder()
      .setTitle(`${result[5].mechagold}`)
      .setDescription(`${result[3].mechagold}`)
      .setColor("Purple")
      .setFooter({ text: `${result[2].mechagold}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].mechagold}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].mechagold}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].mechagold}`,
          inline: true,
        }
      )
      .setImage(`${result[4].mechagold}`);
    message.channel.send({ embeds: [mechagold] });
  },
};
