const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
const { name, category } = require("./helpbc");
module.exports= {
    name: `dinocounter`,
    category: `Beta-Carrotina/Citron`,
    run: async (client, message, args) => {
        const [result] = await db.query(`select dinocounter from bcdecks`)
        const dinoCounter = new EmbedBuilder()
        .setTitle(`${result[5].dinocounter}`)
            .setDescription(`${result[3].dinocounter}`)
            .setFooter({ text: `${result[2].dinocounter}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].dinocounter}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].dinocounter}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].dinocounter}`,
                inline: true
            })
            .setColor("White")
            .setImage(`${result[4].dinocounter}`);
        message.channel.send({ embeds: [dinoCounter] });
}
}