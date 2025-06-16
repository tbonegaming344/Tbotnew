const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `bananalauncher`,
  aliases: [`blauncher`, `launcher`, `bl`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(
      `select bananalauncher, bananabomb from kabloomcards`
    );
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bl")
        .setLabel(`${result[1].bananalauncher}`)
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:bbomb:1091067039818461224>")
    );
    const bl = new EmbedBuilder()
      .setThumbnail(`${result[4].bananalauncher}`)
      .setTitle(`${result[7].bananalauncher}`)
      .setDescription(`${result[2].bananalauncher}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].bananalauncher}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].bananalauncher}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].bananalauncher}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].bananalauncher}`,
          inline: true,
        }
      );
    const bb = new EmbedBuilder()
      .setThumbnail(`${result[4].bananabomb}`)
      .setTitle(`${result[7].bananabomb}`)
      .setDescription(`${result[2].bananabomb}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `${result[6].bananabomb}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].bananabomb}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].bananabomb}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].bananabomb}`,
          inline: true,
        }
      );
    const m = await message.channel.send({ embeds: [bl], components: [row] });
    const collector = m.createMessageComponentCollector();
    collector.on("collect", async (i) => {
      if (i.customId == "bl") {
        await i.reply({ embeds: [bb], flags: MessageFlags.Ephemeral });
      }
    });
  },
};
