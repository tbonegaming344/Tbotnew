const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
const db = require("../../index.js");
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
    const decks = ["horts"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select horts from smdecks sm`);
    const user = await client.users.fetch("525852515128967179");
    const feb = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName}  are ${toBuildString}`
      )
      .setFooter({
        text: `To view Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("#c8c697")
      .setThumbnail(user.displayAvatarURL());
    const horts = new EmbedBuilder()
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
      .setColor("#c8c697")
      .setImage(`${result[4].horts}`)
    const m = await message.channel.send({ embeds: [feb], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ho" || i.customId == "horts") {
        await i.update({ embeds: [horts], components: [ho] });
      }
      else if (i.customId == "helpfeb" || i.customId == "help") {
        await i.update({ embeds: [feb], components: [row] });
      }
    });
  },
};
