const {EmbedBuilder} = require("discord.js")
const db = require("../../index.js")
module.exports = {
    name: `gargstar22`, 
    aliases: [`gargstar`],
    category: `Electric Boogaloo(EB)`,
    run: async(client, message, args)=> {
        const [result] = await db.query("select gargstar22 from ebdecks")
        const gstar22 = new EmbedBuilder()
        .setTitle(`${result[5].gargstar22}`)
        .setDescription(`${result[3].gargstar22}`)
        .setFooter({ text: `${result[2].gargstar22}` })
        .addFields({
          name: "Deck Type",
          value: `${result[6].gargstar22}`,
          inline: true
        },{ 
          name: "Archetype", 
          value: `${result[0].gargstar22}`,
          inline: true
        },{ 
          name: "Deck Cost", 
          value: `${result[1].gargstar22}`,
          inline: true
        })
        .setColor("Purple")
        .setImage(`${result[4].gargstar22}`);
        message.channel.send({embeds: [gstar22]})
    }
}