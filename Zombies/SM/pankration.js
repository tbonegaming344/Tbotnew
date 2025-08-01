const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
    name: `pankration`,
    aliases: [`combosmash`, `avimpsports`, `vorts`], 
    category: `Smash(SM)`,
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT pankration FROM smdecks`);
        const pankration = new EmbedBuilder()
            .setTitle(`${result[5].pankration}`)
            .setDescription(`${result[3].pankration}`)
            .setFooter({ text: `${result[2].pankration}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].pankration}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].pankration}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].pankration}`,
                inline: true
            })
            .setImage(`${result[4].pankration}`)
            .setColor("Blue");
        message.channel.send({ embeds: [pankration] });
    }
}