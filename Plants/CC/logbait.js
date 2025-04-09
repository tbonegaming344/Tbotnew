const {EmbedBuilder} = require('discord.js');
const db = require("../../index.js");
module.exports = {
    name: `logbait`,
    category: `Captain Combustible(CC)`, 
    run: async(client, message, args) => {
        const [result] = await db.query(`select logbait from ccdecks`);
        const logbait = new EmbedBuilder()
            .setTitle(`${result[5].logbait}`)
            .setDescription(`${result[3].logbait}`)
            .setColor(`Green`)
            .setFooter({text: `${result[2].logbait}`})
            .addFields(
                {
                    name: `Deck Type`,
                    value: `${result[6].logbait}`,
                    inline: true
                },
                {
                    name: `Archetype`,
                    value: `${result[0].logbait}`,
                    inline: true
                },
                {
                    name: `Deck Cost`,
                    value: `${result[1].logbait}`,
                    inline: true
                }
            )
            .setImage(`${result[4].logbait}`);
        message.channel.send({embeds: [logbait]});
    }
}