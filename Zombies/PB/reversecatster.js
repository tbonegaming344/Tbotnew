const {EmbedBuilder} = require('discord.js');
const db = require("../../index.js")
module.exports = {
    name: `reversecatster`,
    aliases: [`otkvalk`, `valkstorm`, `valkstache`, `dogvalk`], 
    category: `Professor Brainstorm(PB)`, 
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT reversecatster FROM pbdecks`);
        const reverseCatster= new EmbedBuilder()
            .setTitle(`${result[5].reversecatster}`)
            .setDescription(`${result[3].reversecatster}`)
            .setFooter({ text: `${result[2].reversecatster}` })
            .setColor("Purple")
            .setImage(`${result[4].reversecatster}`)
            .addFields({
                name: "Deck Type",
                value: `${result[6].reversecatster}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].reversecatster}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].reversecatster}`,
                inline: true
            });
        message.channel.send({ embeds: [reverseCatster] });
    },
}