const {EmbedBuilder} = require("discord.js")
const db = require("../../index.js")
module.exports = {
    name: `mspotk`,
    aliases:[`pOdTK`, `borotk`, `bortk`, `mossspinachpodotk`],
    category: `Captain Combustible(CC)`,
    run: async(client, message, args)=> {
        const [result] = await db.query("select mspotk from ccdecks")
        const mspotk = new EmbedBuilder()
        .setTitle(`${result[5].mspotk}`)
        .setDescription(`${result[3].mspotk}`)
      .setColor("Green")
      .setFooter({ text: `${result[2].mspotk}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].mspotk}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].mspotk}`,
        inline: true
      },
        {
        name: "Deck Cost",
        value: `${result[1].mspotk}`,
        inline: true
      })
      .setImage(`${result[4].mspotk}`);
      message.channel.send({embeds: [mspotk]})
    }
}