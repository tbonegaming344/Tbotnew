const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
    name: `recycling`, 
    aliases: [`relikale`], 
    category: `Spudow(SP)`, 
    run: async (client, message, args) => {
        const [result] = await db.query(`select recycling from spdecks`)
        const recycling = new EmbedBuilder()
            .setTitle(`${result[5].recycling}`)
            .setDescription(`${result[3].recycling}`)
            .setFooter({ text: `${result[2].recycling}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].recycling}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].recycling}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].recycling}`,
                inline: true
            })
            .setColor("#964B00")
            .setImage(`${result[4].recycling}`);
        message.channel.send({ embeds: [recycling] });
    }
}