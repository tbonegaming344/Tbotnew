const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
    name: `sbg2`,
    category: `Zmech(ZM)`,
    run: async(client, message, args) => {
        let [result] = await db.query(`SELECT sbg2 FROM zmdecks`)
        let embed = new EmbedBuilder()
    .setTitle(`${result[5].sbg2}`)
    .setDescription(`${result[3].sbg2}`)
    .setFooter({text: `${result[2].sbg2}`})
                .addFields({
                    name: "Deck Type",
                    value: `${result[6].sbg2}`,
                    inline: true
                },{
                    name: "Archetype",
                    value: `${result[0].sbg2}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].sbg2}`,
                    inline: true
                })
        .setColor("Random")
        .setImage(`${result[4].sbg2}`)
    message.channel.send({embeds: [ embed ] } ) 
    }
}