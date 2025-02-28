const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `seacret`,
  aliases: [
    `secretswimmer`,
    `secret`,
    `ebsecret`,
    `secreteb`,
    `ss`,
    `sss`,
    `boogsecret`,
    `secretboog`,
    `secret22`,
    `ingea`,
	`ignea`,
  ],
  category: `Electric Boogaloo(EB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT seacret FROM ebdecks`);
    let sc = new EmbedBuilder()
      .setTitle(`${result[5].seacret}`)
      .setDescription(`${result[3].seacret}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].seacret}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].seacret}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].seacret}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].seacret}`,
          inline: true,
        }
      )
      .setImage(`${result[4].seacret}`);
    message.channel.send({ embeds: [sc] });
  },
};
