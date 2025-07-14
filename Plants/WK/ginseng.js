const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `ginseng`,
  aliases: [`flowercontrol`, `controlflowers`], 
  category: `Wall Knight(WK)`,
    run: async (client, message, args) => {
    const [result] = await db.query(`SELECT ginseng FROM wkdecks`);
    const ginseng = new EmbedBuilder()
        .setTitle(`${result[5].ginseng}`)
        .setDescription(`${result[3].ginseng}`)
        .setFooter({ text: `${result[2].ginseng}` })
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].ginseng}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].ginseng}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].ginseng}`,
            inline: true,
          }
        )
        .setColor("Yellow")
        .setImage(`${result[4].ginseng}`);
    message.channel.send({ embeds: [ginseng] });
    }
};