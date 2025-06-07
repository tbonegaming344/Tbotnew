const {EmbedBuilder} = require('discord.js');
const db = require('../../index.js');
module.exports = {
    name: 'piport',
    category: 'Neptuna(NT)',
    run: async (client, message, args) => {
        const [result] = await db.query('SELECT piport FROM ntdecks');
        const piport = new EmbedBuilder()
        .setTitle(`${result[5].piport}`)
        .setDescription(`${result[3].piport}`)
        .setFooter({text: `${result[2].piport}`})
        .setColor('#000000')
        .setImage(`${result[4].piport}`)
        .addFields({
            name: 'Deck Type',
            value: `${result[6].piport}`,
            inline: true
        }, {
            name: 'Archetype',
            value: `${result[0].piport}`,
            inline: true
        }, {
            name: 'Deck Cost',
            value: `${result[1].piport}`,
            inline: true
        });
        message.channel.send({embeds: [piport]});
    }
    };