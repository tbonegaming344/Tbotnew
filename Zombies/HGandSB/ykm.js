const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `ykm`,
  aliases: [`youngkenmartin`, `ykmhg`, `hgykm`, `ykmartin`, `ykmv2`, `ykm2`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT ykm FROM hgdecks`);
    const embed = new EmbedBuilder()
      .setTitle(`${result[5].ykm}`)
      .setDescription(`${result[3].ykm}`)
      .setFooter({ text: `${result[2].ykm}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].ykm}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].ykm}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].ykm}`,
        inline: true
      })
      .setColor("#000000")
      .setImage(`${result[4].ykm}`);
    message.channel.send({ embeds: [embed] });
  },
};
