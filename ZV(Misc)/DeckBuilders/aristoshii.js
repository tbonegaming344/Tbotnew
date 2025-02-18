const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `aristoshii`,
  aliases: [
    `decksmadebyaristoshii`,
    `helparistoshii`,
    `aristoshiihelp`,
    `aristoshiidecks`,
    `decksmadebyaris`,
    `helparis`,
    `arishelp`,
    `arisdecks`,
    `aris`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("icebox")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ib")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ib = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpar")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["icebox"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select icebox from ntdecks`);
    let user = await client.users.fetch("758103516504916088");
    let aris = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let iceBox = new EmbedBuilder()
    .setTitle(`${result[5].icebox}`)
    .setDescription(`${result[3].icebox}`)
    .setFooter({text: `${result[2].icebox}`})
    .setColor("Random")
    .addFields({
        name: "Deck Type",
        value: `${result[6].icebox}`,
        inline: true
    },{
        name: "Archetype",
        value: `${result[0].icebox}`,
        inline: true
    },{
        name: "Deck Cost", 
        value: `${result[1].icebox}`,
        inline: true
    })
    .setImage(`${result[4].icebox}`)
    const m = await message.channel.send({ embeds: [aris], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      //IceBox
      if (i.customId == "ib") {
        await i.update({ embeds: [iceBox], components: [ib] });
      }
      if (i.customId == "icebox") {
        await i.update({ embeds: [iceBox], components: [ib] });
      }

      //Help
      if (i.customId == "helpar") {
        await i.update({ embeds: [aris], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [aris], components: [row] });
      }
    });
  },
};
