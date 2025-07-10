const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js"); 
module.exports = {
    name: `leafystrike`,
    aliases: [`leafysmasher`, `leafyhc`], 
    category: `Chompzilla(CZ)`,
    run: async(client, message, args)=> {
        const [result]= await db.query(`select leafystrike from czdecks`); 
        const leadystrike = new EmbedBuilder()
        .setTitle(`${result[5].leafystrike}`)
        .setDescription(`${result[3].leafystrike}`)
        .setFooter({text: `${result[2].leafystrike}`})
        .setColor("Green")
        .setImage(`${result[4].leafystrike}`)
        .addFields({
            name: "Deck Type",
            value: `${result[6].leafystrike}`,
            inline: true
        },{
            name: "Archetype",
            value: `${result[0].leafystrike}`,
            inline: true
        },{
            name: "Deck Cost", 
            value: `${result[1].leafystrike}`,
            inline: true
        })
        message.channel.send({embeds: [leadystrike]})
    }
}