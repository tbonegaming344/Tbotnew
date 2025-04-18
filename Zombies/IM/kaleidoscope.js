const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `kaleidoscope`,
  aliases: [`otkt`, `otkster`, `otktrickster`, `kaleido`],
  category: `Immorticia(IM)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT otktrickster FROM imdecks`);
    const embed = new EmbedBuilder()
      .setTitle(`${result[5].otktrickster}`)
      .setDescription(`${result[3].otktrickster}`)
      .setFooter({ text: `${result[2].otktrickster}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].otktrickster}`,
        inline: true,
      },{
        name: "Archetype", 
        value: `${result[0].otktrickster}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].otktrickster}`,
        inline: true  
      })
      .setColor("Blue")
      .setImage(`${result[4].otktrickster}`);
    message.channel.send({ embeds: [embed] });
  },
};
