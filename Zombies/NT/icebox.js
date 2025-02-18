const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
    name: `icebox`,
    aliases: [`boxofice`, `boxice`, `icemid`, `midice`, `midbox`, `boxmid`],
    category: `Neptuna(NT)`,
    run: async(client, message, args)=> {
        let [result] = await db.query(`select icebox from ntdecks`)
        let iceBox = new EmbedBuilder()
        .setTitle(`${result[5].icebox}`)
        .setDescription(`${result[3].icebox}`)
        .setFooter({text: `${result[2].icebox}`})
        .setColor("Random")
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