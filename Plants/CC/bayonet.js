const {EmbedBuilder}= require('discord.js');
const db = require('../../index.js');
module.exports = {
    name: `bayonet`,
    aliases: [`crosprout`, `burstsprout`],
    category: `Captain Combustible(CC)`,
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT bayonet FROM ccdecks`);
        const bayonet = new EmbedBuilder()
            .setTitle(`${result[5].bayonet}`)
            .setDescription(`${result[3].bayonet}`)
            .setFooter({ text: `${result[2].bayonet}` })
            .addFields(
                {
                    name: "Deck Type",
                    value: `${result[6].bayonet}`,
                    inline: true,
                },
                {
                    name: "Archetype",
                    value: `${result[0].bayonet}`,
                    inline: true,
                },
                {
                    name: "Deck Cost",
                    value: `${result[1].bayonet}`,
                    inline: true,
                }
            )
            .setColor("Green")
            .setImage(`${result[4].bayonet}`);
        message.channel.send({ embeds: [bayonet] });
    }
}