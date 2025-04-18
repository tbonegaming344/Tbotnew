const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `franinja`,
  aliases: [`franinjadecks`, `franinjahelp`, `helpfraninja`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("marxbolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("marx")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const marx = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpf")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["marxbolt"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select marxbolt from rbdecks`);
    const user = await client.users.fetch("488426862058405899");
    const fran = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My decks made by ${user.displayName} are ${toBuildString}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("#e0e0de")
      .setFooter({
        text: `To view Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`,
      })
    const marxbolt = new EmbedBuilder()
      .setTitle(`${result[5].marxbolt}`)
      .setDescription(`${result[3].marxbolt}`)
      .setFooter({ text: `${result[2].marxbolt}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].marxbolt}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].marxbolt}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].marxbolt}`,
          inline: true,
        }
      )
      .setColor("#e0e0de")
      .setImage(`${result[4].marxbolt}`);
    const m = await message.channel.send({ embeds: [fran], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "marx" || i.customId == "marxbolt") {
        await i.update({ embeds: [marxbolt], components: [marx] });
      } else if (i.customId == "helpf" || i.customId == "help") {
        await i.update({ embeds: [fran], components: [row] });
      }
    });
  },
};
