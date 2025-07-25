const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `neurotherapy`,
  aliases: [
    `bccontrol`,
    `cbc`,
    `controlbc`,
    `shamcontrolbc`,
    `bcwnbcontrol`,
    `controltina`,
    `bcshamcontrol`,
    `shamcontrol`,
    `shamctrl`, 
    `techcontrol`
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    const [result] = await db.query("SELECT shamcontrol FROM bcdecks");
    const embed = new EmbedBuilder()
      .setTitle(`${result[5].shamcontrol}`)
      .setDescription(`${result[3].shamcontrol}`)
      .setFooter({ text: `${result[2].shamcontrol}` })
      .addFields({ 
        name: "Deck Type",
        value: `${result[6].shamcontrol}`,
        inline: true,   
      },
      {
        name: "Archetype",
        value: `${result[0].shamcontrol}`,
        inline: true
      },
      {
        name: "Deck Cost", 
        value: `${result[1].shamcontrol}`,
        inline: true,
      })
      .setColor("White")
      .setImage(`${result[4].shamcontrol}`);
    message.channel.send({ embeds: [embed] });
  },
};
