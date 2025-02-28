const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `terrifytricksterazzi`,
  aliases: [`terrifytrick`, `terrifyster`, `trickazzi`, `terrifytrickster`, `tricksterazzi`],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select terrifytricksterazzi from rbdecks`);
    let terrifytricksterazzi = new EmbedBuilder()
      .setTitle(`${result[5].terrifytricksterazzi}`)
      .setDescription(`${result[3].terrifytricksterazzi}`)
      .setFooter({ text: `${result[2].terrifytricksterazzi}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].terrifytricksterazzi}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].terrifytricksterazzi}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].terrifytricksterazzi}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].terrifytricksterazzi}`);
    message.channel.send({ embeds: [terrifytricksterazzi] });
  },
};
