const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `gargburn`,
  aliases: [`burngargs`, `gargburnzm`, `gburn`, `gargmech`, `gmech`],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT gargburn FROM zmdecks`);
    const embed = new EmbedBuilder()
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
      .setColor("Purple")
      .setImage(`${result[4].gargburn}`);
    message.channel.send({ embeds: [embed] });
  },
};
