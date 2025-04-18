const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `spacestars`,
  aliases: [`ifspacestars`, `sps`, `spacestar`, `rapstars`],
  category: `Impfinity(IF)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT spacestars FROM ifdecks`);
    const embed = new EmbedBuilder()
      .setTitle(`${result[5].spacestars}`)
      .setDescription(`${result[3].spacestars}`)
      .setFooter({ text: `${result[2].spacestars}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].spacestars}`,
        inline: true
      },{ 
        name: "Archetype", 
        value: `${result[0].spacestars}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].spacestars}`,
        inline: true  
      })
      .setColor("#000000")
      .setImage(`${result[4].spacestars}`);
    message.channel.send({ embeds: [embed] });
  },
};
