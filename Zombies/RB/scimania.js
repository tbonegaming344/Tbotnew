const {EmbedBuilder} = require('discord.js');
const db = require("../../index.js");
module.exports = {
    name: `scimania`,
    aliases: [`sciencerb`, `rbscience`], 
    category: `Rustbolt(RB)`,
    run: async(client, message, args) => {
        const [result] = await db.query(`select scimania from rbdecks`);
        const scimania = new EmbedBuilder()
            .setTitle(`${result[5].scimania}`)
            .setDescription(`${result[3].scimania}`)
            .setFooter({ text: `${result[2].scimania}` })
            .addFields(
                {
                    name: "Deck Type",
                    value: `${result[6].scimania}`,
                    inline: true
                },
                {
                    name: "Archetype",
                    value: `${result[0].scimania}`,
                    inline: true
                },
                {
                    name: "Deck Cost",
                    value: `${result[1].scimania}`,
                    inline: true
                }
            )
            .setColor("Orange")
            .setImage(`${result[4].scimania}`);
        message.channel.send({ embeds: [scimania] });
    }
}