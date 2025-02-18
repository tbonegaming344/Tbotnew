const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `cyburn`,
  aliases: [`nccyburn`, `cyburnnc`, `cycleburn`, `cyclecap`, `cburn`, `waterboarding`, `cyboil`],
  category: `Night Cap(NC)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT cyburn from ncdecks`);
    let embed = new EmbedBuilder()
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
      .setColor("Random")
      .setImage(`${result[4].cyburn}`);
    message.channel.send({ embeds: [embed] });
  },
};
