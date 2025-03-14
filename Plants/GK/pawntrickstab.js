const {EmbedBuilder} = require("discord.js")
const db = require("../../index.js")
module.exports = {
    name: `pawntrickstab`,
    aliases: [`ptstab`, `ptstab`, `ptstab`, `ptstab`],
    category: `Grass Knuckles(GK)`,
    run: async (client, message, args) => {
        let [result] = await db.query(`SELECT pawntrickstab from gkdecks`);
        let pawntrickstab= new EmbedBuilder()
          .setTitle(`${result[5].pawntrickstab}`)
          .setDescription(`${result[3].pawntrickstab}`)
          .setFooter({ text: `${result[2].pawntrickstab}` })
          .addFields(
            {
              name: "Deck Type",
              value: `${result[6].pawntrickstab}`,
              inline: true,
            },
            {
              name: "Archetype",
              value: `${result[0].pawntrickstab}`,
              inline: true,
            },
            {
              name: "Deck Cost",
              value: `${result[1].pawntrickstab}`,
              inline: true,
            }
          )
          .setColor("Random")
          .setImage(`${result[4].pawntrickstab}`);
        message.channel.send({ embeds: [pawntrickstab] });
    }
}