const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
  name: `nuttin`,
  aliases: [`spnuts`, `nutssp`, `splashnuts`, `nutssplash`, `nutting`],
    category: `Spudow(SP)`,
  run: async(client, message, args) => {
    const [result] = await db.query(`SELECT nutting FROM spdecks`); 
     const nuttin = new EmbedBuilder()
    .setTitle(`${result[5].nutting}`)
    .setDescription(`${result[3].nutting}`)
    .setFooter({text: `${result[2].nutting}`})
        .setColor("#964B00")
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