const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `trickmech`,
  aliases: [`trickzmech`, `trm`],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT trickmech FROM zmdecks`);
    let maelstrom = new EmbedBuilder()
      .setTitle(`${result[5].trickmech}`)
      .setDescription(`${result[3].trickmech}`)
      .setFooter({ text: `${result[2].trickmech}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].trickmech}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].trickmech}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].trickmech}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].trickmech}`);
    message.channel.send({ embeds: [maelstrom] });
  },
};
