const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `cyburn`,
  aliases: [`nccyburn`, `cyburnnc`, `cycleburn`, `cyclecap`, `cburn`, `waterboarding`, `cyboil`, `waterboard`],
  category: `Night Cap(NC)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT cyburn from ncdecks`);
    const embed = new EmbedBuilder()
      .setTitle(`${result[5].cyburn}`)
      .setDescription(`${result[3].cyburn}`)
      .setFooter({ text: `${result[2].cyburn}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].cyburn}`,
        inline: true
      },
        {
        name: "Archetype",
        value: `${result[0].cyburn}`,
        inline: true
      },
        { 
        name: "Deck Cost", 
        value: `${result[1].cyburn}`,
        inline: true})
      .setColor("White")
      .setImage(`${result[4].cyburn}`);
    message.channel.send({ embeds: [embed] });
  },
};
