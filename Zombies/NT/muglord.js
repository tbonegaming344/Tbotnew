const {EmbedBuilder} = require('discord.js');
const db = require("../../index.js");
module.exports = {
    name: `muglord`, 
    aliases: [`warlordmug`, `mugwarlord`], 
    category: `Neptuna(NT)`, 
    run: async(client, message, args)=> {
        const [result] = await db.query(`select muglord from ntdecks`);
        const muglord = new EmbedBuilder()
            .setTitle(`${result[5].muglord}`)
            .setDescription(`${result[3].muglord}`)
            .setFooter({ text: `${result[2].muglord}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].muglord}`,
                inline: true
            },{
                name: "Archetype",
                value: `${result[0].muglord}`,
                inline: true
            },{
                name: "Deck Cost",
                value: `${result[1].muglord}`,
                inline: true
            })
            .setColor("#000000")
            .setImage(`${result[4].muglord}`);
            message.channel.send({embeds: [muglord]});
    }
    }