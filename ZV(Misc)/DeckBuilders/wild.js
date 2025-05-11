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
  name: `wildisnub`,
  aliases: [
    `wildhelp`,
    `helpwild`,
    `wild1`,
    `decksmadebywild`,
    `wilddecks`,
    `wilddeck`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Wild's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
      );
    const row = new ActionRowBuilder().addComponents(select);
    const wildDecks = {
      memeDecks: ["dinogloves", "terrifytricksterazzi"],
      aggroDecks: ["dinogloves"],
      comboDecks: ["terrifytricksterazzi"],
      tempoDecks: ["terrifytricksterazzi"],
      allDecks: ["dinogloves", "terrifytricksterazzi"],
    };
    /**
     * The createButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button 
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
    function createButtons(leftButtonId, rightButtonId) {
      return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(leftButtonId)
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId(rightButtonId)
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
    }
    const memerow = createButtons("terrifytricksterazzi", "dgloves");
    const dgloves = createButtons("helpmeme", "tster");
    const tster = createButtons("dinogloves", "memehelp");

    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMemeString = BuildDeckString(wildDecks.memeDecks);
    const user = await client.users.fetch("701053825628241951");
    const wild = createHelpEmbed(
      "Wild Decks",
      `To view the decks made by Wild please select an option from the select menu below! select meme decks to view all decks made by Wild
Note: Wild has ${wildDecks.allDecks.length} decks in Tbot`,
      user.displayAvatarURL()
    );
    const memeEmbed = createHelpEmbed(
      "Wild's Meme Decks",
      `My meme decks created by Wild are ${toBuildMemeString}`,
      user.displayAvatarURL(),
      `To view the meme decks created by Wild please use the commands listed above or click on the buttons below to browse through all the meme decks
Note: Wild has ${wildDecks.memeDecks.length} meme decks in Tbot`
    );
    const [result] =
      await db.query(`select dinogloves, terrifytricksterazzi from gkdecks gk 
inner join rbdecks rb on (gk.deckinfo = rb.deckinfo)`);
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
    const dinogloves = createDeckEmbed(result, "dinogloves");
    const terrifytricksterazzi = createDeckEmbed(
      result,
      "terrifytricksterazzi"
    );
    const m = await message.channel.send({ embeds: [wild], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i - The interaction object
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.reply({ embeds: [dinogloves], flags: MessageFlags.Ephemeral });
      } else if (value == "combo" || value == "tempo") {
        await i.reply({
          embeds: [terrifytricksterazzi],
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      if (i.customId == "dgloves" || i.customId == "dinogloves") {
        await i.update({ embeds: [dinogloves], components: [dgloves] });
      } else if (
        i.customId == "tster" ||
        i.customId == "terrifytricksterazzi"
      ) {
        await i.update({ embeds: [terrifytricksterazzi], components: [tster] });
      } else if (i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
