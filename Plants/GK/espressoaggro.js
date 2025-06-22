const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
const { name } = require("./budgetgk");
module.exports = {
    name: `espressoaggro`,
    aliases: [`aggrogk`, `gkaggro`, `aggroespresso`], 
    category: `Grass Knuckles(GK)`,
    run: async(client, message, args) => {
        const [result] = await db.query(`SELECT espressoaggro FROM gkdecks`);
        const espressoaggro = new EmbedBuilder()
            .setTitle(`${result[5].espressoaggro}`)
            .setDescription(`${result[3].espressoaggro}`)
            .setFooter({text: `${result[2].espressoaggro}`})
            .addFields({
                name: "Deck Type",
                value: `${result[6].espressoaggro}`,
                inline: true
            },{
                name: "Archetype",
                value: `${result[0].espressoaggro}`,
                inline: true
            },{
                name: "Deck Cost", 
                value: `${result[1].espressoaggro}`,
                inline: true
            })
            .setColor("#964B00")
            .setImage(`${result[4].espressoaggro}`);
        message.channel.send({embeds: [ espressoaggro ] });
    }
}