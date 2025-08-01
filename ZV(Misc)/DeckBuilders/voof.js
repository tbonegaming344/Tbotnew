const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `voof`,
  aliases: [`decksmadebyvoof`, `voofdecks`, `voofhelp`, `helpvoof`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("stalemate")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("smate")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const smate = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpvoof")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["stalemate"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select stalemate from smdecks`);
    const user = await client.users.fetch("727705898692247615");
    const voof = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("#87CEEB");
    const stalemate = new EmbedBuilder()
    .setTitle(`${result[5].stalemate}`)
    .setDescription(`${result[3].stalemate}`)
    .setFooter({text: `${result[2].stalemate}`})
    .setImage(`${result[4].stalemate}`)
    .addFields({
      name: "Deck Type",
      value: `${result[6].stalemate}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].stalemate}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].stalemate}`,
      inline: true
    })
    .setColor("#87CEEB");
    const m = await message.channel.send({ embeds: [voof], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "smate" || i.customId == "stalemate") {
        await i.update({ embeds: [stalemate], components: [smate] });
      }
      else if (i.customId == "help" || i.customId == "helpvoof") {
        await i.update({ embeds: [voof], components: [row] });
      }
    });
  },
};