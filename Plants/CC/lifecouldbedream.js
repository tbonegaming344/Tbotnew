const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: "lifecouldbedream",
  aliases: [
    `lcbd`,
    `imipotted`,
    `imimuscle`,
    `imimusclepotted`,
    `imitatermusclepotted`,
    `imitatermuscle`,
    `imitatermusclesprout`,
    `bottedpowerhouse`,
    `bottedbowerhouse`,
    `lifecouldbeadream`,
  ],
  category: `Captain Combustible(CC)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select lcbd from ccdecks`);
    let lcbd = new EmbedBuilder()
      .setTitle(`${result[5].lcbd}`)
      .setDescription(`${result[3].lcbd}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].lcbd}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].lcbd}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].lcbd}`,
        inline: true
      },
        {
        name: "Deck Cost",
        value: `${result[1].lcbd}`,
        inline: true
      })
      .setImage(`${result[4].lcbd}`);
    message.channel.send({ embeds: [lcbd] });
  },
};
