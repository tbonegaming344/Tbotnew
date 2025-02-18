const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
    name: `reflourished`,
    aliases: [`figlourished`, `rfl`],
    category: `Captain Combustible(CC)`,
    run: async(client, message, args)=> {
        let [result] = await db.query("select reflourished from ccdecks")
        let reflourished = new EmbedBuilder()
        .setTitle(`${result[5].reflourished}`)
        .setDescription(`${result[3].reflourished}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].reflourished}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].reflourished}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].reflourished}`,
        inline: true
      },
        {
        name: "Deck Cost",
        value: `${result[1].reflourished}`,
        inline: true
      })
      .setImage(`${result[4].reflourished}`);
      message.channel.send({embeds: [reflourished]})
    }
}