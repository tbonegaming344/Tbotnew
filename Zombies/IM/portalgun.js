const {EmbedBuilder} = require('discord.js');
const db = require("../../index.js")
module.exports = {
    name: `portalgun`,
    category: `Immorticia(IM)`, 
    run: async(client, message, args) => {
        const [result] = await db.query(`SELECT portalgun FROM imdecks`)
        const portalgun = new EmbedBuilder()
        .setTitle(`${result[5].portalgun}`)
        .setDescription(`${result[3].portalgun}`)
        .setFooter({text: `${result[2].portalgun}`})
        .addFields({
            name: "Deck Type",
            value: `${result[6].portalgun}`,
            inline: true
        },{
            name: "Archetype", 
            value: `${result[0].portalgun}`,
            inline: true
        },{
            name: "Deck Cost", 
            value: `${result[1].portalgun}`,
            inline: true
        })
        .setColor("Blue")
        .setImage(`${result[4].portalgun}`)
        message.channel.send({embeds: [portalgun]})
    }
}