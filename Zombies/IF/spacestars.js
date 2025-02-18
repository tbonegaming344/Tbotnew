const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `spacestars`,
  aliases: [`ifspacestars`, `sps`, `spacestar`, `rapstars`],
  category: `Impfinity(IF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT spacestars FROM ifdecks`);
    let embed = new EmbedBuilder()
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
      .setColor("Random")
      .setImage(`${result[4].spacestars}`);
    message.channel.send({ embeds: [embed] });
  },
};
