const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `uncrackamech`,
  aliases: [
    `mechfeast`,
    `zmfeast`,
    `binaryfeast`,
    `zmfeastcontrol`,
    `feastcontrolzm`,
    `mechfeastcontrol`,
    `feastcontrolmech`,
    `feastyoureyes`,
    `feastmech`
  ],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT feastmech FROM zmdecks`);
    let uncrackamech= new EmbedBuilder()
      .setTitle(`${result[5].feastmech}`)
      .setDescription(`${result[3].feastmech}`)
      .setColor("Purple")
      .setImage(`${result[4].feastmech}`)
      .setFooter({ text: `${result[2].feastmech}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].feastmech}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].feastmech}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].feastmech}`,
        inline: true
      });
    message.channel.send({ embeds: [uncrackamech] });
  },
};
