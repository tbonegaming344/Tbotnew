const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `stingray`,
  aliases: [`decksmadebystingray`, `stingraydecks`, `stingrayhelp`, `helpstingray`, `gigraduate`, `stingray201`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("leafystrike")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lstrike")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lstrike = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpstingray")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["leafystrike"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select leafystrike from czdecks`);
    const user = await client.users.fetch("441714987665457173");
    const stingray = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("#d07be0");
    const leafystrike = new EmbedBuilder()
    .setTitle(`${result[5].leafystrike}`)
    .setDescription(`${result[3].leafystrike}`)
    .setFooter({text: `${result[2].leafystrike}`})
    .setImage(`${result[4].leafystrike}`)
    .addFields({
      name: "Deck Type",
      value: `${result[6].leafystrike}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].leafystrike}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].leafystrike}`,
      inline: true
    })
    .setColor("#d07be0");
    const m = await message.channel.send({ embeds: [stingray], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "lstrike" || i.customId == "leafystrike") {
        await i.update({ embeds: [leafystrike], components: [lstrike] });
      }
      else if (i.customId == "help" || i.customId == "helpstingray") {
        await i.update({ embeds: [stingray], components: [row] });
      }
    });
  },
};
