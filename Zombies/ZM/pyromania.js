const {EmbedBuilder} = require('discord.js');
const db = require('../../index.js');
module.exports = {
    name: `pyromania`, 
    aliases: [`pyromech`, `pyro`],
    category: `Zmech(ZM)`,
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT pyromania FROM zmdecks`);
        const pyromania = new EmbedBuilder()
            .setTitle(`${result[5].pyromania}`)
            .setDescription(`${result[3].pyromania}`)
            .setColor("Red")
            .setFooter({ text: `${result[2].pyromania}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].pyromania}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].pyromania}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].pyromania}`,
                inline: true
            })
            .setImage(`${result[4].pyromania}`);
        message.channel.send({ embeds: [pyromania] });
    }
};  