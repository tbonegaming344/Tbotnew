const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
  name: `lasersnap`,
  aliases: [ `hollowpurple`, `snaplaser`, `laserrings`, `czhollowpurple`, `lazerrings`, `lazerings`, `laserings` ],
  category: `Chompzilla(CZ)`,
  run: async(client, message, args) => {
    let [result] = await db.query(`SELECT lasersnap FROM czdecks`); 
     let lasersnap = new EmbedBuilder()
    .setTitle(`${result[5].lasersnap}`)
    .setDescription(`${result[3].lasersnap}`)
    .setFooter({text: `${result[2].lasersnap}`})
        .setColor("Yellow")
        .setImage(`${result[4].lasersnap}`)
            .addFields({
                name: "Deck Type",
                value: `${result[6].lasersnap}`,
                inline: true
            },{
                name: "Archetype",
                value: `${result[0].lasersnap}`,
                inline: true
            },{
                name: "Deck Cost", 
                value: `${result[1].lasersnap}`,
                inline: true
            })
    message.channel.send({embeds: [ lasersnap ] } ) 
  }
}