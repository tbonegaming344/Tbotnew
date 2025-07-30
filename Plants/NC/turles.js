const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
    name: `turles`, 
    category: `Night Cap(NC)`,
    run: async(client, message, args) => {
        const [result] = await db.query(`SELECT turles from ncdecks`);
        const turles = new EmbedBuilder()
            .setTitle(`${result[5].turles}`)   
            .setDescription(`${result[3].turles}`)
            .setFooter({text: `${result[2].turles}`})
            .addFields({
                name: "Deck Type",
                value: `${result[6].turles}`,
                inline: true
            },{
                name: "Archetype",
                value: `${result[0].turles}`,
                inline: true
            },{
                name: "Deck Cost", 
                value: `${result[1].turles}`,
                inline: true
            })
            .setColor("White")
            .setImage(`${result[4].turles}`);
            message.channel.send({embeds: [ turles ] } );
    }
}