const db = require("../../index.js");
const {EmbedBuilder} = require("discord.js");
module.exports = {
  name: `pbeans`,
  aliases: [`peabeans`, `pbean`],
  category: `Green Shadow(GS)`,
    run: async(client, message, args)=> {
        let [result] = await db.query(`SELECT pbeans from gsdecks`);
        let pbeans = new EmbedBuilder()
        .setTitle(`${result[5].pbeans}`)
        .setDescription(`${result[3].pbeans}`)
        .setColor("White")
        .addFields({
        name: "Deck Type",
        value: `${result[6].pbeans}`,
        inline: true
        },
        {
        name: "Archetype",
        value: `${result[0].pbeans}`,
        inline: true
        },
        {
        name: "Deck Cost", 
        value:`${result[1].pbeans}`,
        inline: true
        })
        .setFooter({text: `${result[2].pbeans}`})
        .setImage(`${result[4].pbeans}`)
        message.channel.send({embeds: [pbeans]})
    }
} 