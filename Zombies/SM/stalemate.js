const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
    name: `stalemate`, 
    aliases: [`nerfalllanes`], 
    category: `Smash(SM)`, 
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT stalemate FROM smdecks`);
        const stalemate = new EmbedBuilder()
            .setTitle(`${result[5].stalemate}`)
            .setDescription(`${result[3].stalemate}`)
            .setFooter({ text: `${result[2].stalemate}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].stalemate}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].stalemate}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].stalemate}`,
                inline: true
            })
            .setImage(`${result[4].stalemate}`)
            .setColor("Blue");
        message.channel.send({ embeds: [stalemate] });
    }
}