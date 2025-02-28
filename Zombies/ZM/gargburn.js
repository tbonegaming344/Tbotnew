const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `gargburn`,
  aliases: [`burngargs`, `gargburnzm`, `gburn`, `gargmech`, `gmech`],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT gargburn FROM zmdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].gargburn}`)
      .setDescription(`${result[3].gargburn}`)
      .setFooter({ text: `${result[2].gargburn}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].gargburn}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].gargburn}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].gargburn}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].gargburn}`);
    message.channel.send({ embeds: [embed] });
  },
};
