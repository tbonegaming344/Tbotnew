const db = require("../../index.js");
const {EmbedBuilder} = require("discord.js");
module.exports = {
    name: `popsicle`, 
    category: `Spudow(SP)`,
    run: async (client, message, args) => {
        const [result] = await db.query(`select popsicle from spdecks`)
        const popsicle = new EmbedBuilder()
        .setTitle(`${result[5].popsicle}`)
        .setDescription(`${result[3].popsicle}`)
        .setFooter({text: `${result[2].popsicle}`})
            .setColor("#964B00")
            .setImage(`${result[4].popsicle}`)
                .addFields({
                    name: "Deck Type",
                    value: `${result[6].popsicle}`,
                    inline: true
                },{
                    name: "Archetype",
                    value: `${result[0].popsicle}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].popsicle}`,
                    inline: true
                })
        message.channel.send({embeds: [ popsicle] } )
    }
}