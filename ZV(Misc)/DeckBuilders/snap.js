const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `snap`,
  aliases: [`decksmadebysnap`, `snapdecks`, `snaphelp`, `helpsnap`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sknight")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("shit")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const shit = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpsnap")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["shitknight"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select shitknight from wkdecks`);
    const user = await client.users.fetch("214018049374683137");
    const snap = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("#d9dd45");
    const sknight = new EmbedBuilder()
    .setTitle(`${result[5].shitknight}`)	
    .setDescription(`${result[3].shitknight}`)
.setFooter({text: `${result[2].shitknight}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].shitknight}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].shitknight}`,
      inline: true
    },
    {
      name: "Deck Cost", 
      value:  `${result[1].shitknight}`,
      inline: true
  })
  .setColor("#d9dd45")			
  .setImage(`${result[4].shitknight}`)
    const m = await message.channel.send({ embeds: [snap], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "shit" || i.customId == "shitknight") {
        await i.update({ embeds: [sknight], components: [shit] });
      }
      else if (i.customId == "help" || i.customId == "helpsnap") {
        await i.update({ embeds: [snap], components: [row] });
      }
    });
  },
};
