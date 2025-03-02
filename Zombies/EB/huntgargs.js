const db = require('../../index.js');
const {EmbedBuilder} = require('discord.js');
module.exports = {
    name: `huntgargs`,
    category: `Electric Boogaloo(EB)`, 
    run: async(client, message, args) => {
        const [result] = await db.query(`select huntgargs from ebdecks`)
        const huntgargs = new EmbedBuilder()
        .setTitle(`${result[5].huntgargs}`)
        .setDescription(`${result[3].huntgargs}`)
        .setFooter({ text: `${result[2].huntgargs}` })
        .addFields({
          name: "Deck Type",
          value: `${result[6].huntgargs}`,
          inline: true
        },{ 
          name: "Archetype", 
          value: `${result[0].huntgargs}`,
          inline: true
        },{ 
          name: "Deck Cost", 
          value: `${result[1].huntgargs}`,
          inline: true
        })
        .setColor("Random")
        .setImage(`${result[4].huntgargs}`);
        message.channel.send({embeds: [huntgargs]})
    }
}