const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
    name: `tanktuna`,
    category: `Neptuna(NT)`,
    run: async(client, message, args)=> {
        const [result] = await db.query(`select tanktuna from ntdecks`)
        const tanktuna = new EmbedBuilder()
        .setTitle(`${result[5].tanktuna}`)
        .setDescription(`${result[3].tanktuna}`)
        .setColor('#000000')
        .addFields({
            name: 'Deck Type',
            value: `${result[6].tanktuna}`,
            inline: true
        },{
            name: 'archtype',
            value: `${result[0].tanktuna}`,
            inline: true
        },{
            name: 'Deck Cost', 
            value: `${result[1].tanktuna}`,
            inline: true
        })
        .setFooter({text: `${result[2].tanktuna}`})
        .setImage(`${result[4].tanktuna}`)
        message.channel.send({embeds: [tanktuna]})
    }
}