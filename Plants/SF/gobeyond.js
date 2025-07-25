const {EmbedBuilder} = require('discord.js');
const db = require("../../index.js");
const { category } = require('../../ZV(Misc)/ZV(Misc)/helpdb');
module.exports = {
    name: `gobeyond`,
    category: `Solar Flare(SF)`, 
    run: async (client, message, args) => {
        const [result] = await db.query(`select gobeyond from sfdecks`);
        let gobeyond = new EmbedBuilder()
            .setTitle(`${result[5].gobeyond}`)
            .setDescription(`${result[3].gobeyond}`)
            .setFooter({ text: `${result[2].gobeyond}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].gobeyond}`,
                inline: true
            },
            {
                name: "Archetype",
                value: `${result[0].gobeyond}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].gobeyond}`,
                inline: true
            })
            .setColor("Yellow")
            .setImage(`${result[4].gobeyond}`);
            message.channel.send({ embeds: [gobeyond] });
    }
}