const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `ycm`,
  aliases: [`youngcatmartin`],
  category: `Immorticia(IM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT ycm FROM imdecks `);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].ycm}`)
      .setDescription(`${result[3].ycm}`)
      .setFooter({ text: `${result[2].ycm}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].ycm}`,
        inline: true,
      },{
        name: "Archetype", 
        value: `${result[0].ycm}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].ycm}`,
        inline: true
      })
      .setColor("Blue")
      .setImage(`${result[4].ycm}`);
    message.channel.send({ embeds: [embed] });
  },
};
