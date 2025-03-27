const db = require("../../index.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
    name: `carroot`,
    aliases: [`bctempo`, `bcroots`], 
    category: `Beta-Carrotina/Citron`,
    run: async (client, message, args) => {
        let [result] = await db.query(`SELECT carroot FROM bcdecks`);
        let carroot = new EmbedBuilder()
            .setTitle(`${result[5].carroot}`)
            .setDescription(`${result[3].carroot}`)
            .setFooter({ text: `${result[2].carroot}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].carroot}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].carroot}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].carroot}`,
                inline: true
            })
            .setColor("White")
            .setImage(`${result[4].carroot}`);
        message.channel.send({ embeds: [carroot] });
    }
}