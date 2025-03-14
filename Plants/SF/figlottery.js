const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `figlottery`,
  aliases: [
    `midhealflare`,
    `healmidflare`,
    `sfmidheal`,
    `midhealsf`,
    `hmf`,
    `hmfsf`,
    `hmsf`,
    `healmidsf`,
    `hmflare`,
    `ogname`,
    `originalname`,
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT healmidflare from sfdecks`);
    let embed = new EmbedBuilder()
      .setTitle(`${result[5].healmidflare}`)
      .setDescription(`${result[3].healmidflare}`)
      .setFooter({ text: `${result[2].healmidflare}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].healmidflare}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].healmidflare}`,
        inline: true,
      },{ 
        name: "Deck Cost", 
        value: `${result[1].healmidflare}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].healmidflare}`);
    message.channel.send({ embeds: [embed] });
  },
};
