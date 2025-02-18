const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `blobfishwrappers`,
  aliases: [
    `midimps`,
    `mi`,
    `mimps`,
    `bfishwrappers`,
    `bwrap`,
    `bwrappers`,
    `bfw`,
    `blobfish`,
    `wrappers`,
    `blobfishwrapper`,
    `mimpshg`,
  ],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT blobfishwrappers FROM hgdecks`);
    let bwrappers = new EmbedBuilder()
      .setTitle(`${result[5].blobfishwrappers}`)
      .setDescription(`${result[3].blobfishwrappers}`)
      .setFooter({ text: `${result[2].blobfishwrappers}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].blobfishwrappers}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].blobfishwrappers}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].blobfishwrappers}`,
        inline: true 
      })
      .setColor("Random")
      .setImage(`${result[4].blobfishwrappers}`);
    message.channel.send({ embeds: [bwrappers] });
  },
};
