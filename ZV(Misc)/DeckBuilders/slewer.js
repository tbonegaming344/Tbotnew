const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `slewer`,
  aliases: [`decksmadebyslewer`, `slewerdecks`, `slewerhelp`, `helpslewer`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("portalgun")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pgun")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pgun = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpslewer")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["portalgun"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select portalgun from imdecks`);
    const user = await client.users.fetch("780639126054633513");
    const slewer = new EmbedBuilder()
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
    const portalgun = new EmbedBuilder()
    .setTitle(`${result[5].portalgun}`)
    .setDescription(`${result[3].portalgun}`)
    .setFooter({text: `${result[2].portalgun}`})
    .setImage(`${result[4].portalgun}`)
    .addFields({
      name: "Deck Type",
      value: `${result[6].portalgun}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].portalgun}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].portalgun}`,
      inline: true
    })
    .setColor("#d07be0");
    const m = await message.channel.send({ embeds: [slewer], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "pgun" || i.customId == "portalgun") {
        await i.update({ embeds: [portalgun], components: [pgun] });
      }
      else if (i.customId == "help" || i.customId == "helpslewer") {
        await i.update({ embeds: [slewer], components: [row] });
      }
    });
  },
};
