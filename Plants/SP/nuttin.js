const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
  name: `nuttin`,
  aliases: [`spnuts`, `nutssp`, `splashnuts`, `nutssplash`],
    category: `Spudow(SP)`,
  run: async(client, message, args) => {
    let [result] = await db.query(`SELECT nutting FROM spdecks`); 
     let nuttin = new EmbedBuilder()
    .setTitle(`${result[5].nutting}`)
    .setDescription(`${result[3].nutting}`)
    .setFooter({text: `${result[2].nutting}`})
        .setColor("Random")
        .setImage(`${result[4].nutting}`)
            .addFields({
                name: "Deck Type",
                value: `${result[6].nutting}`,
                inline: true
            },{
                name: "Archetype",
                value: `${result[0].nutting}`,
                inline: true
            },{
                name: "Deck Cost", 
                value: `${result[1].nutting}`,
                inline: true
            })
    message.channel.send({embeds: [ nuttin ] } ) 
  }
}