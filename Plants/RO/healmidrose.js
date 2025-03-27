const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `healmidrose`,
  aliases: [`hmr`, `roheal`, `midhealrose`, `healmidro`, `hmrose`, `healrose`],
  category: `Rose(RO)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT hmr from rodecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].hmr}`)
      .setDescription(`${result[3].hmr}`)
      .setFooter({ text: `${result[2].hmr}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].hmr}`,
        inline: true
      },{
        name: "Archetype",
        value: `${result[0].hmr}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].hmr}`,
        inline: true
      })
      .setColor("Yellow")
      .setImage(`${result[4].hmr}`);
    message.channel.send({ embeds: [embed] });
  },
};
