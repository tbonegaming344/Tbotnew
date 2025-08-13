const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `nuthouse`,
  category: `Green Shadow(GS)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select nuthouse from gsdecks`);
    const nuthouse = new EmbedBuilder()
      .setTitle(`${result[5].nuthouse}`)
      .setDescription(`${result[3].nuthouse}`)
      .setFooter({ text: `${result[2].nuthouse}` })
      .setColor("White")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].nuthouse}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].nuthouse}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].nuthouse}`,
          inline: true,
        }
      )
      .setImage(`${result[4].nuthouse}`);
    message.channel.send({ embeds: [nuthouse] });
  },
};
