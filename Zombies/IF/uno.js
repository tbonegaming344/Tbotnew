const {EmbedBuilder} = require('discord.js');
const db = require('../../index.js');
module.exports = {
    name: 'uno', 
    category: `Impfinity(IF)`,
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT uno FROM ifdecks`);
        const uno = new EmbedBuilder()
            .setTitle(`${result[5].uno}`)
            .setDescription(`${result[3].uno}`)
            .setFooter({ text: `${result[2].uno}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].uno}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].uno}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].uno}`,
                inline: true
            })
            .setColor("#000000")
            .setImage(`${result[4].uno}`);
        message.channel.send({ embeds: [uno] });
    }
}