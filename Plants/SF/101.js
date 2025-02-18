const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `101`,
  aliases: [
    `oneoone`,
    `101.1`,
    `1011`,
    `101.1wr`,
    `101.1%`,
    `cyclesf`,
    `cycleflare`,
    `sfcycle`,
    `101wr`,
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT oneone from sfdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].oneone}`)
      .setDescription(`${result[3].oneone}`)
      .setFooter({ text: `${result[2].oneone}` })
      .setColor("Random")
      .setImage(`${result[4].oneone}`)
      .addFields({
        name: "Deck Type",
        value: `${result[6].oneone}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].oneone}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].oneone}`,
        inline: true
      });
    message.channel.send({ embeds: [embed] });
  },
};
