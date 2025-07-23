const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
    name: `luminous`,
    category: `Smash(SM)`,
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT luminous FROM smdecks`);
        const luminous = new EmbedBuilder()
            .setTitle(`${result[5].luminous}`)
            .setDescription(`${result[3].luminous}`)
            .setFooter({ text: `${result[2].luminous}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].luminous}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].luminous}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].luminous}`,
                inline: true
            })
            .setImage(`${result[4].luminous}`)
            .setColor("Blue");
        message.channel.send({ embeds: [luminous] });
    }
}
