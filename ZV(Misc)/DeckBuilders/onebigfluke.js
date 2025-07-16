const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const db = require("../../index.js");
/**
 * The createHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function createHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("Blue");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `onebigfluke`,
  aliases: [
    `onebigflukehelp`,
    `helponebigfluke`,
    `onebigflukedecks`,
    `decksmadebyonebigfluke`,
    `fluke`,
    `helpfluke`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
     const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId("banhammer")
              .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
              .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
              .setCustomId("bhammer")
              .setEmoji("<:arrowright:1271446796207525898>")
              .setStyle(ButtonStyle.Primary)
          );
          const bhammer= new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId("helpfluke")
              .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
              .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
              .setCustomId("help")
              .setEmoji("<:arrowright:1271446796207525898>")
              .setStyle(ButtonStyle.Primary)
          );
          const decks = ["banhammer"];
           let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select racism from bfdecks bf `);
    const user = await client.users.fetch("756689141416198215");
    const fluke = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
            .setDescription(
              `My commands for decks made by ${user.displayName} are ${toBuildString}`
            )
            .setFooter({
              text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
            })
            .setThumbnail(user.displayAvatarURL())
            .setColor("Blue");
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
        .setColor("Blue");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const banhammer = createDeckEmbed(result, "racism");
    const m = await message.channel.send({
      embeds: [fluke],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
            if (i.customId == "bhammer" || i.customId == "banhammer") {
              await i.update({embeds: [banhammer], components: [bhammer] })
            }
            else if (i.customId == "helpfluke" || i.customId == "help") {
              await i.update({ embeds: [fluke], components: [row] });
            }
          });
  },
};
