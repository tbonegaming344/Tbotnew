const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `telimpssb`,
  aliases: [
    `sbteleimps`,
    `tisb`,
    `teleimpssb`,
    `sbtelimps`,
    `vimps`,
    `vikingimps`,
    `vikingtelimps`,
    `telimpsb`,
    `vikingteleimps`,
  ],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT telimpssb FROM sbdecks`);
    const embed = new EmbedBuilder()
      .setTitle(`${result[5].telimpssb}`)
      .setDescription(`${result[3].telimpssb}`)
      .setFooter({ text: `	${result[2].telimpssb}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].telimpssb}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].telimpssb}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].telimpssb}`,
        inline: true
      })
      .setColor("#000000")
      .setImage(`${result[4].telimpssb}`);
    message.channel.send({ embeds: [embed] });
  },
};