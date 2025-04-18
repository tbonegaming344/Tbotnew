const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `psychosolstice`,
  aliases: [
    `healclones`,
    `pineclonesheal`,
    `healpineclones`,
    `cloneheal`,
    `pineheal`,
    `healpine`,
	  `psystice`,
    `suvkoengjthub`,
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT psychosolstice from sfdecks`);
    const pys = new EmbedBuilder()
      .setTitle(`${result[5].psychosolstice}`)
      .setDescription(`${result[3].psychosolstice}`)
      .setColor("Yellow")
      .setFooter({ text: `${result[2].psychosolstice}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].psychosolstice}`,
        inline: true,
      }, {
        name: "Archetype",
        value: `${result[0].psychosolstice}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].psychosolstice}`,
        inline: true
      })
      .setImage(`${result[4].psychosolstice}`);
    message.channel.send({ embeds: [pys] });
  },
};
