const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
    name: `floss`,
    aliases: [`fishladyofsomesize`],
    category: `Neptuna(NT)`,
    run: async(client, message, args)=> {
        let [result] = await db.query(`select floss from ntdecks`)
        let floss = new EmbedBuilder()
        .setTitle(`${result[5].floss}`)
        .setDescription(`${result[3].floss}`)
        .setColor('#000000')
        .addFields({
            name: 'Deck Type',
            value: `${result[6].floss}`,
            inline: true
        },{
            name: 'archtype',
            value: `${result[0].floss}`,
            inline: true
        },{
            name: 'Deck Cost', 
            value: `${result[1].floss}`,
            inline: true
        })
        .setFooter({text: `${result[2].floss}`})
        .setImage(`${result[4].floss}`)
        message.channel.send({embeds: [floss]})
    }
}