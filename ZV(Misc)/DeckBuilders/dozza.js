const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `dozza`,
  aliases: [`decksmadebydozza`, `helpdozza`, `dozzahelp`, `dozzadecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("trickmech")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("tm")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const tm= new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpd")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
    const dozzaDecks = ["trickmech"]
    const [result] = await db.query(`select trickmech
from zmdecks zm`);
const user = await client.users.fetch("1143937777763889324");
    const dozza = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `My commands for decks made by ${user.displayName} are ${toBuildString}`
        )
        .setFooter({
          text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.length} total decks in Tbot`,
        })
        .setThumbnail(user.displayAvatarURL())
        .setColor("#5a5547");
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
          .setColor("#5a5547");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
    const trickmech = createDeckEmbed(result, "trickmech");
    const m = await message.channel.send({
      embeds: [dozza],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
   if (i.customId == "trickmech" || i.customId == "tm") {
          await i.update({ embeds: [trickmech], components: [tm] });
        }
        else if (i.customId == "helpd" || i.customId == "help") {
          await i.update({ embeds: [dozza], components: [row] });
        }
    });
  },
};
