const {EmbedBuilder} = require('discord.js');
const db = require("../../index.js");
module.exports = {
    name: `dinoroots`,
    aliases: [`bartin`, `bartinroots`, `sproots`, `rootdow`, `rootssp`], 
    category: `Spudow(SP)`, 
    run: async(client, message, args) => {
        const [result] = await db.query(`select dinoroots from spdecks`);
        const dinoroots = new EmbedBuilder()
        .setTitle(`${result[5].dinoroots}`)
        .setDescription(`${result[3].dinoroots}`)
        .setFooter({text: `${result[2].dinoroots}`})
        .addFields({
            name: "Deck Type",
            value: `${result[6].dinoroots}`,
            inline: true
        },{
            name: "Archetype",
            value: `${result[0].dinoroots}`,
            inline: true
        },{
            name: "Deck Cost",
            value: `${result[1].dinoroots}`,
            inline: true
        })
        .setColor("#964B00")
        .setImage(`${result[4].dinoroots}`)
        message.channel.send({embeds: [ dinoroots] } )
    }
}