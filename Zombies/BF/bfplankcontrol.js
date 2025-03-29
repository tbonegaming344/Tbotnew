const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
    name: `bfplankcontrol`,
    aliases: [`plankcontrolbf`, `bfpc`],
    category: `Brain Freeze(BF)`,
    run: async(client, message, args) => {
        let [result] = await db.query(`SELECT bfplankcontrol FROM bfdecks`)
        let embed = new EmbedBuilder()
    .setTitle(`${result[5].bfplankcontrol}`)
    .setDescription(`${result[3].bfplankcontrol}`)
    .setFooter({text: `${result[2].bfplankcontrol}`})
                .addFields({
                    name: "Deck Type",
                    value: `${result[6].bfplankcontrol}`,
                    inline: true
                },{
                    name: "Archetype",
                    value: `${result[0].bfplankcontrol}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].bfplankcontrol}`,
                    inline: true
                })
        .setColor("Blue")
        .setImage(`${result[4].bfplankcontrol}`)
    message.channel.send({embeds: [ embed ] } ) 
    }
}