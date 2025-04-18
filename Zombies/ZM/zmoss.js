const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
    name: `zmoss`,
    aliases: [`stompamech`, `zmechofsomesize`, `nonbinary`],
    category: `Zmech(ZM)`,
    run: async(client, message, args) => {
        const [result] = await db.query(`SELECT zmoss FROM zmdecks`);
        const zmoss = new EmbedBuilder()
        .setTitle(`${result[5].zmoss}`)
        .setDescription(`${result[3].zmoss}`)
        .setColor("Purple")
        .setFooter({text: `${result[2].zmoss}`})
        .addFields({
            name: "Deck Type",
            value:`${result[6].zmoss}`,
            inline: true
        },{
            name: "Archetype",
            value:`${result[0].zmoss}`,
            inline: true
        },{
            name: "Deck Cost", 
            value:`${result[1].zmoss}`,
            inline: true
        })
        .setImage(`${result[4].zmoss}`)
        message.channel.send({embeds: [zmoss]})
    }
}