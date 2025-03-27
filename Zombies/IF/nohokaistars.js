const db = require("../../index.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
    name: `nohokaistars`,
    aliases: [`lbamid`, `nohokai`, `gargolithmid`, `midlba`, `midgargolith`, `nhkstars`, `nhs`, `nhks`],
    category: `Impfinity(IF)`,
    run: async(client, message, args) => {
        const [result] = await db.query(`SELECT nohokaistars FROM ifdecks`);
        const nohonkaistars = new EmbedBuilder()
        .setTitle(`${result[5].nohokaistars}`)
        .setDescription(`${result[3].nohokaistars}`)
        .setFooter({ text: `${result[2].nohokaistars}` })
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].nohokaistars}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].nohokaistars}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].nohokaistars}`,
            inline: true,
          }
        )
        .setColor("Random")
        .setImage(`${result[4].nohokaistars}`);
        message.channel.send({ embeds: [nohonkaistars] });
    }
}