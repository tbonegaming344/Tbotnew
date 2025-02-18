const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `dericop`,
  aliases: [
    `decksmadebydericop`,
    `helpdericop`,
    `dericophelp`,
    `dericopdecks`,
    `decksmadebydericop`,
    `helpdericop`,
    `dericophelp`,
    `dericopdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyromania")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("pyro")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pyro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpderi")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["pyromania"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`SELECT pyromania from zmdecks`);
    let user = await client.users.fetch("948397000699805727");
    let dericop = new EmbedBuilder()
    .setTitle(`${user.displayName} Decks`)
    .setDescription(
      `My commands for decks made by ${user.displayName} are ${toBuildString}`
    )
    .setFooter({
      text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor("Random");
      let pyromania = new EmbedBuilder()
      .setTitle(`${result[5].pyromania}`)
      .setDescription(`${result[3].pyromania}`)
      .setColor("Random")
      .setFooter({text: `${result[2].pyromania}`})
      .addFields({
          name: "Deck Type",
          value: `${result[6].pyromania}`,
          inline: true
      },{
          name: "Archetype",
          value: `${result[0].pyromania}`,
          inline: true
      },{
          name: "Deck Cost", 
          value: `${result[1].pyromania}`,
          inline: true
      })
      .setImage(`${result[4].pyromania}`)
    const m = await message.channel.send({
      embeds: [dericop],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
    if(i.customId == "pyro"|| i.customId == "pyromania") {
      await i.update({embeds: [pyromania], components: [pyro]});
    }
    if(i.customId == "helpderi" || i.customId == "help"){
      await i.update({embeds: [dericop], components: [row]})
    }
  });
  },
};
