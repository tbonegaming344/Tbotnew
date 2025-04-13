const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
  name: `ladytuna`,
  aliases: [`kimps`, `kingtuna`, `kingimps`],
    category: `Neptuna(NT)`,
  run: async(client, message, args) => {
    let [result] = await db.query(`SELECT ladytuna FROM ntdecks`); 
     let ladytuna = new EmbedBuilder()
    .setTitle(`${result[5].ladytuna}`)
    .setDescription(`${result[3].ladytuna}`)
    .setFooter({text: `${result[2].ladytuna}`})
        .setColor("#000000")
        .setImage(`${result[4].ladytuna}`)
            .addFields({
                name: "Deck Type",
                value: `${result[6].ladytuna}`,
                inline: true
            },{
                name: "Archetype",
                value: `${result[0].ladytuna}`,
                inline: true
            },{
                name: "Deck Cost", 
                value: `${result[1].ladytuna}`,
                inline: true
            })
    message.channel.send({embeds: [ ladytuna ] } ) 
  }
}