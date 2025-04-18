const {EmbedBuilder}= require("discord.js");
const db = require("../../index.js");
module.exports = {
    name: `starrings`,
    aliases: [`tso`, `thesovietonion`, `sovietonion`, `tsonion`, `starring`, `pstarfruitlul`, `ppentagrama`, `pentagrama`],
    category: `Green Shadow(GS)`,
    run: async(client, message, args)=> {
        const [result] = await db.query(`SELECT sovietonion from gsdecks`);
        const tsunion = new EmbedBuilder()
        .setTitle(`${result[5].sovietonion}`)
        .setDescription(`${result[3].sovietonion}`)
        .setFooter({text: `${result[2].sovietonion}`})
        .addFields({
            name: "Deck Type",
            value: `${result[6].sovietonion}`,
            inline: true
        },
        {
            name: "Archetype",
            value: `${result[0].sovietonion}`,
            inline: true
        },
        {
            name: "Deck Cost", 
            value: `${result[1].sovietonion}`,
            inline: true
        })
        .setColor("White")
        .setImage(`${result[4].sovietonion}`)
        message.channel.send({embeds: [tsunion]})
    }
}