const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
    name: `slugged`,
    aliases: [`midtuna`],
    category: `Neptuna(NT)`,
    run: async(client, message, args)=> {
        const [result] = await db.query(`select icebox from ntdecks`)
        const iceBox = new EmbedBuilder()
        .setTitle(`${result[5].icebox}`)
        .setDescription(`${result[3].icebox}`)
        .setFooter({text: `${result[2].icebox}`})
        .setColor("#000000")
        .addFields({
            name: "Deck Type",
            value: `${result[6].icebox}`,
            inline: true
        },{
            name: "Archetype",
            value: `${result[0].icebox}`,
            inline: true
        },{
            name: "Deck Cost", 
            value: `${result[1].icebox}`,
            inline: true
        })
        .setImage(`${result[4].icebox}`)
        message.channel.send({embeds: [iceBox]})
    }
}