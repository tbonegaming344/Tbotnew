const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `healthotk`,
  category: `Grass Knuckles(GK)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT healthotk FROM gkdecks`);
    const healthotk = new EmbedBuilder()
    .setTitle(`${result[5].healthotk}`)
    .setDescription(`${result[3].healthotk}`)
    .setFooter({ text: `${result[2].healthotk}` })
    .addFields(
      {
        name: "Deck Type",
        value: `${result[6].healthotk}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].healthotk}`,
        inline: true,
      },
      {
        name: "Deck Cost",
        value: `${result[1].healthotk}`,
        inline: true,
      }
    )
    .setColor("#964B00")
    .setImage(`${result[4].healthotk}`);
    message.channel.send({embeds: [healthotk]});
  }
}