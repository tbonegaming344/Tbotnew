const {EmbedBuilder} = require('discord.js');
const db = require('../../index.js');
module.exports = {
    name: 'lawnmower2', 
    aliases: [`gargmech`], 
    category: `Zmech(ZM)`,
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT lawnmower FROM zmdecks`);
        const lawnmower = new EmbedBuilder()
            .setTitle(`${result[5].lawnmower}`)
            .setDescription(`${result[3].lawnmower}`)
            .setFooter({ text: `${result[2].lawnmower}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].lawnmower}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].lawnmower}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].lawnmower}`,
                inline: true
            })
            .setColor("Green")
            .setImage(`${result[4].lawnmower}`);
        message.channel.send({ embeds: [lawnmower] });
    }
}