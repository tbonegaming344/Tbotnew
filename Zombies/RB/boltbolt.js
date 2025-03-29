const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `boltbolt`,
  aliases: [`boltboltrb`, `rbboltbolt`, `bolting`, `bbolt`],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select boltbolt from rbdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].boltbolt}`)
      .setDescription(`${result[3].boltbolt}`)
      .setFooter({ text: `${result[2].boltbolt}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].boltbolt}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].boltbolt}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].boltbolt}`,
        inline: true
      })
      .setColor("Orange")
      .setImage(`${result[4].boltbolt}`);
    message.channel.send({ embeds: [embed] });
  },
};
