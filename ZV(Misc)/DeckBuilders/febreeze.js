const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `febreze`,
  aliases: [
    `febrezedecks`,
    `decksmadebyfebreze`,
    `febrezehelp`,
    `helpfebreze`,
    `febreeze`,
    `febreezeairfresh`
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("horts")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ho")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ho = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpfeb")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["horts"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select horts from smdecks sm`);
    let user = await client.users.fetch("525852515128967179");
    let feb = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName}  are ${toBuildString}`
      )
      .setFooter({
        text: `To view Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let horts = new EmbedBuilder()
    .setTitle(`${result[5].horts}`)
    .setDescription(`${result[3].horts}`)
    .setFooter({text: `${result[2].horts}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].horts}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].horts}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].horts}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].horts}`)
    const m = await message.channel.send({ embeds: [feb], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ho") {
        await i.update({ embeds: [horts], components: [ho] });
      }
      if (i.customId == "horts") {
        await i.update({ embeds: [horts], components: [ho] });
      }
      if (i.customId == "helpfeb") {
        await i.update({ embeds: [feb], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [feb], components: [row] });
      }
    });
  },
};
