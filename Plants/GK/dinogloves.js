const db = require("../../index.js")
const {EmbedBuilder} = require("discord.js")
const { category } = require("./pawntrickstab")
module.exports = {
    name: `dinogloves`, 
    category: `Grass Knuckles(GK)`,
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT dinogloves from gkdecks`);
        const dinogloves= new EmbedBuilder()
          .setTitle(`${result[5].dinogloves}`)
          .setDescription(`${result[3].dinogloves}`)
          .setFooter({ text: `${result[2].dinogloves}` })
          .addFields(
            {
              name: "Deck Type",
              value: `${result[6].dinogloves}`,
              inline: true,
            },
            {
              name: "Archetype",
              value: `${result[0].dinogloves}`,
              inline: true,
            },
            {
              name: "Deck Cost",
              value: `${result[1].dinogloves}`,
              inline: true,
            }
          )
          .setColor("#964B00")
          .setImage(`${result[4].dinogloves}`);
        message.channel.send({ embeds: [dinogloves] });
    }
}