const { EmbedBuilder } = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `pablosyeezys`,
  aliases: [
    `yeezys`,
    `pablos`,
    `midgargs`,
    `pablo`,
    `pabloyeezys`,
    `pepegargs`,
    `pablo’s`,
    `pablo'syeezys`,
    `pablo's`,
	`smmidgargs`, 
	`smgargs`,
	`pablo'syeezys`
  ],
  category: `Smash(SM)`,
  run: async (client, message, args) => {
    const [result] = await db.query(`SELECT pablosyeezys FROM smdecks`);
    const pyeez = new EmbedBuilder()
      .setTitle(`${result[5].pablosyeezys}`)
      .setDescription(`${result[3].pablosyeezys}`)
      .setFooter({ text: `${result[2].pablosyeezys}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].pablosyeezys}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].pablosyeezys}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].pablosyeezys}`,
          inline: true,
        }
      )
      .setColor("Blue")
      .setImage(`${result[4].pablosyeezys}`);
    message.channel.send({ embeds: [pyeez] });
  },
};
