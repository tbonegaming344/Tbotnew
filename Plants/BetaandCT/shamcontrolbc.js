const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `shamcontrolbc`,
  aliases: [
    `bccontrol`,
    `cbc`,
    `controlbc`,
    `bcwnbcontrol`,
    `controltina`,
    `bcshamcontrol`,
    `shamcontrol`,
    `shamctrl`  
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    let [result] = await db.query("SELECT shamcontrol FROM bcdecks");
    let embed = new EmbedBuilder()
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
      .setColor("Random")
      .setImage(`${result[4].shamcontrol}`);
    message.channel.send({ embeds: [embed] });
  },
};
