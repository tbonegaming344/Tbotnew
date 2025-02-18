const {EmbedBuilder} = require('discord.js');
let db = require('../../index.js');
module.exports = {
    name: 'cryoboy',
    aliases: [`rampycowboy`, `rampboy`],
    category: `Huge-Gigantacus/SuperBrainz`,
   run: async (client, message, args) => {
    let [result] = await db.query(`select cyroboy from hgdecks`)
        const cboy = new EmbedBuilder()
            .setTitle(`${result[5].cyroboy}`)
            .setDescription(`${result[3].cyroboy}`)
            .setFooter({text: `${result[2].cyroboy}`})
            .setColor("Random")
            .addFields({
                name: 'Deck Type',
                value: `${result[6].cyroboy}`,
                inline: true
            },{
                name: 'Archtype',
                value: `${result[0].cyroboy}`,
                inline: true
            },{
                name: 'Deck Cost',
                value: `${result[1].cyroboy}`,
                inline: true
            })
            .setImage(`${result[4].cyroboy}`)
        message.channel.send({embeds: [cboy]})
        }

}