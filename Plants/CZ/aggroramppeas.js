const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `aggroramppeas`,
  aliases: [
    `rampaggropeas`,
    `peasaggroramp`,
    `peasrampaggro`,
    `arp`,
    `agrampea`,
    `agramppea`,
    `aggrorampeas`,
    `agrampeas`,
  ],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT aggroramppeas from czdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].aggroramppeas}`)
      .setDescription(`${result[3].aggroramppeas}`)
      .setFooter({ text: `${result[2].aggroramppeas}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].aggroramppeas}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].aggroramppeas}`,
        inline: true,
      },
      { 
        name: "Deck Cost", 
        value: `${result[1].aggroramppeas}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].aggroramppeas}`);
    message.channel.send({ embeds: [embed] });
  },
};
