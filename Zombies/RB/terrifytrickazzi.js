const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `terrifytricksterazzi`,
  aliases: [`terrifytrick`, `terrifyster`, `trickazzi`, `terrifytrickster`, `tricksterazzi`],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`select terrifytricksterazzi from rbdecks`);
    const terrifytricksterazzi = new EmbedBuilder()
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
      .setColor("Orange")
      .setImage(`${result[4].terrifytricksterazzi}`);
    message.channel.send({ embeds: [terrifytricksterazzi] });
  },
};
