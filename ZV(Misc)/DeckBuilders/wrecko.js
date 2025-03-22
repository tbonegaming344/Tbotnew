const db = require("../../index.js");
const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
module.exports = {
  name: `wreko`,
  aliases: [
    `helpwreko`,
    `wrekohelp`,
    `decksmadebywreko`,
    `wrekodecklists`,
    `decklistsmadebywreko`,
    `wrekodecks`,
    `deckwreko`,
    `deckwreko`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("popsicle")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pop")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pop = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpw")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["popsicle"];
    let toBuildString = decks
      .map((deck) => `\n<@1043528908148052089> **${deck}**`)
      .join("");
    let [result] = await db.query(`select popsicle from spdecks`);
    let user = await client.users.fetch("1060179032852930560");
    const wreko = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    const popsicle = new EmbedBuilder()
      .setTitle(`${result[5].popsicle}`)
      .setDescription(`${result[3].popsicle}`)
      .setFooter({ text: `${result[2].popsicle}` })
      .setColor("Random")
      .setImage(`${result[4].popsicle}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].popsicle}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].popsicle}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].popsicle}`,
          inline: true,
        }
      );
    const m = await message.channel.send({
      embeds: [wreko],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "pop" || i.customId == "popsicle") {
        await i.update({ embeds: [popsicle], components: [pop] });
      }
      if (i.customId == "help" || i.customId == "helpwreko") {
        await i.update({ embeds: [wreko], components: [row] });
      }
    });
  },
};
