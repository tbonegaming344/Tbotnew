const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `seasons`,
  aliases: [`decksmadebyseasons`, `seasonsdecks`, `seasonshelp`, `helpseasons`, `georgebradley`, `george_bradley`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("luminous")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lum")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lum = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpseasons")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["luminous"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select luminous from smdecks`);
    const user = await client.users.fetch("1011422698095788105");
    const seasons = new EmbedBuilder()
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
    const luminous = new EmbedBuilder()
    .setTitle(`${result[5].luminous}`)
    .setDescription(`${result[3].luminous}`)
    .setFooter({text: `${result[2].luminous}`})
    .setImage(`${result[4].luminous}`)
    .addFields({
      name: "Deck Type",
      value: `${result[6].luminous}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].luminous}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].luminous}`,
      inline: true
    })
    .setColor("#d07be0");
    const m = await message.channel.send({ embeds: [seasons], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "luminous" || i.customId == "lum") {
        await i.update({ embeds: [luminous], components: [lum] });
      }
      else if (i.customId == "help" || i.customId == "helpseasons") {
        await i.update({ embeds: [seasons], components: [row] });
      }
    });
  },
};
