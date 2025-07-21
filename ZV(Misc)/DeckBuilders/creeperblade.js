const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `creeperblade`,
  aliases: [
    `helpcreeperblade`,
    `creeperbladehelp`,
    `decksmadebycreeperblade`,
    `creeperbladedecks`,
    `creeperdecks`,
    `creeper`,
    `cpb`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
   const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("pablosyeezys")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("py")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const py = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpc")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["pablosyeezys"];
      let toBuildString = "";
      for (const deck of decks) {
        toBuildString += `\n<@${client.user.id}> **${deck}**`;
      }
    const [result] = await db.query(`select pablosyeezys
    from smdecks sm`);
    const user = await client.users.fetch("738926530000060416");
    const creep = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `My commands for decks made by ${user.displayName} are ${toBuildString}`
        )
        .setFooter({
          text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
        })
        .setThumbnail(user.displayAvatarURL())
        .setColor("Green");
  /**
   * The createDeckEmbed function creates an embed for a specific deck
   * @param {string} deckName - The name of the deck
   * @param {*} result - The result from the database query
   * @returns The embed for the deck
     */
    function createDeckEmbed(result, deckName) {
  const embed = new EmbedBuilder()
    .setTitle(`${result[5][deckName]}`)
    .setDescription(`${result[3][deckName]}`)
    .setFooter({ text: `${result[2][deckName]}` })
    .addFields(
      { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
      { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
      { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
    )
    .setColor("Green");
  const imageUrl = result[4][deckName];
  if (imageUrl) {
    embed.setImage(imageUrl);
  }
  return embed;
}
    const pyeez = createDeckEmbed(result, "pablosyeezys");
    const m = await message.channel.send({
      embeds: [creep],
      components: [row] 
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "pablosyeezys" || i.customId == "py") {
          await i.update({ embeds: [pyeez], components: [py] });
        }
        else if (i.customId == "helpc" || i.customId == "help") {
          await i.update({ embeds: [creep], components: [row] });
        }
    });  
  },
};
