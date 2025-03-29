let {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
  name: `uncrackabolt`,
  aliases: [ `invincibolt`, `gladcontrol`],   
  category: `Rustbolt(RB)`, 
  run: async(client, message, args)=> {
    let [result]= await db.query(`select uncrackabolt from rbdecks`)
    let uncrackabolt = new EmbedBuilder()
    .setTitle(`${result[5].uncrackabolt}`)
    .setDescription(`${result[3].uncrackabolt}`)
    .addFields(
      {
        name: "Deck Type",
        value: `${result[6].uncrackabolt}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].uncrackabolt}`,
        inline: true
      },
    {
        name: "Deck Cost",
        value: `${result[1].uncrackabolt}`,
        inline: true
    }
)
.setFooter({text: `${result[2].uncrackabolt}`})
.setColor("Orange")
.setImage(`${result[4].uncrackabolt}`)
message.channel.send({embeds: [uncrackabolt]})
  }
}