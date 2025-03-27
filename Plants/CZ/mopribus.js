const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `moprbius`,
  aliases: [
    `mothwhowpkantxrwarbeatiiunitedstates`,
    `mothwh`,
    `mopzilla`,
    `czmop`,
    `mopcz`,
    `zillamop`,
    `chompzillamop`,
    `mopchompzilla`,
	`mopbrius`,
    `healmop`,
    `mopheal`,
    `moprings`,
    `mopringzilla`,
    `ringsmop`,
  ],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT mopribus from czdecks`);
    let mop = new EmbedBuilder()
      .setTitle(`${result[5].mopribus}`)
      .setDescription(`${result[3].mopribus}`)
      .setColor("Yellow")
      .addFields({
        name: "Deck Type",
        value: `${result[6].mopribus}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].mopribus}`,
        inline: true,
      },{ 
        name: "Deck Cost", 
        value: `${result[1].mopribus}`,
        inline: true
      })
      .setFooter({ text: `${result[2].mopribus}` })
      .setImage(`${result[4].mopribus}`);
    message.channel.send({ embeds: [mop] });
  },
};
