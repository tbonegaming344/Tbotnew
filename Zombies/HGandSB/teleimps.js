const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `telimps`,
  aliases: [`teleimps`, `teleportimps`, `ti`, `hgtelimps`, `telimpshg`, `hgteleimps`, `teleimpshg`, `telimp`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT telimps FROM hgdecks`);
    const embed = new EmbedBuilder()
      .setTitle(`${result[5].telimps}`)
      
      .setDescription(`${result[3].telimps}`)
      .setFooter({ text: `${result[2].telimps}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].telimps}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].telimps}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].telimps}`,
        inline: true
      })
      .setColor("#000000")
      .setImage(`${result[4].telimps}`);
    message.channel.send({ embeds: [embed] });
  },
};
