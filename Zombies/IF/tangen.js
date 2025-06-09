const {EmbedBuilder} = require('discord.js');
const db = require('../../index.js')
module.exports = {
    name: `tangen`,
    aliases: [`otkshark`, `splashshark`, `ifdeadly`, `deadlyif`, `ifsplash`, `deadlysharkcontrol`, `dsc`], 
    category: `Impfinity(IF)`,
    run: async (client, message, args) => {
        const [result] = await db.query(`SELECT tangen FROM ifdecks`);
        const tangen = new EmbedBuilder()
            .setTitle(`${result[5].tangen}`)
            .setDescription(`${result[3].tangen}`)
            .setFooter({ text: `${result[2].tangen}` })
            .addFields(
                {
                    name: "Deck Type",
                    value: `${result[6].tangen}`,
                    inline: true,
                },
                {
                    name: "Archetype",
                    value: `${result[0].tangen}`,
                    inline: true,
                },
                {
                    name: "Deck Cost",
                    value: `${result[1].tangen}`,
                    inline: true,
                }
            )
            .setColor("#000000")
            .setImage(`${result[4].tangen}`);
        message.channel.send({ embeds: [tangen] });
    }
}