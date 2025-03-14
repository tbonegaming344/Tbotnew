const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `ykm`,
  aliases: [`youngkenmartin`, `ykmhg`, `hgykm`, `ykmartin`, `ykmv2`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT ykm FROM hgdecks`);
    let embed = new EmbedBuilder()
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
      .setColor("Random")
      .setImage(`${result[4].ykm}`);
    message.channel.send({ embeds: [embed] });
  },
};
