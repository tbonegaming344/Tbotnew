const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `fireweed`,
  aliases: [`fire2`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const [result] = await db.query(
      `select fireweed, hotlava from kabloomcards`
    );
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bl")
        .setLabel(`${result[1].fireweed}`)
        .setStyle(ButtonStyle.Danger)
        .setEmoji("<:hotlava:1091074880251891893>")
    );
    const fire = new EmbedBuilder()
      .setThumbnail(`${result[4].fireweed}`)
      .setTitle(`${result[7].fireweed}`)
      .setDescription(`${result[2].fireweed}`)
      .setColor("Random")

      .addFields(
        { name: "Stats", value: `${result[6].fireweed}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].fireweed}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].fireweed}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].fireweed}`,
          inline: true,
        }
      );
    const hl = new EmbedBuilder()
      .setThumbnail(`${result[4].hotlava}`)
      .setTitle(`${result[7].hotlava}`)
      .setDescription(`${result[2].hotlava}`)
      .setColor("Random")
      .addFields(
        { name: "Stats", value: `$${result[6].hotlava}`, inline: true },
        {
          name: "Ability",
          value: `${result[0].hotlava}`,
          inline: true,
        },
        {
          name: "Set-Rarity",
          value: `${result[5].hotlava}`,
          inline: true,
        },
        {
          name: "Flavor Text",
          value: `${result[3].hotlava}`,
          inline: true,
        }
      );
    const m = await message.channel.send({ embeds: [fire], components: [row] });
    const collector = m.createMessageComponentCollector();
    collector.on("collect", async (i) => {
      if (i.customId == "bl") {
        await i.reply({ embeds: [hl], flags: MessageFlags.Ephemeral });
      }
    });
  },
};
