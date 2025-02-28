const {EmbedBuilder, Embed} = require("discord.js")
let db = require("../../index.js")
module.exports ={
    name: `radiotherapy`, 
    aliases: [`gourdcontrol`, `techdow`, `radio`],
    category: `Spudow(SP)`,
    run: async(client, message, args)=> {
        let [result] = await db.query("select radiotherapy from spdecks")
        let radio = new EmbedBuilder()
        .setTitle(`${result[5].radiotherapy}`)
        .setDescription(`${result[3].radiotherapy}`)
        .setFooter({text: `${result[2].radiotherapy}`})
        .addFields({
            name: "Deck Type",
            value: `${result[6].radiotherapy}`,
            inline: true
        },{
            name: "Archetype",
            value: `${result[0].radiotherapy}`,
            inline: true
        },{
            name: "Deck Cost", 
            value: `${result[1].radiotherapy}`,
            inline: true
        })	
        .setImage(`${result[4].radiotherapy}`)
        message.channel.send({embeds: [radio]})
    }
}