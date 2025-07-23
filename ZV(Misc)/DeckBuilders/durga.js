const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  MessageFlags,
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
    .setColor("Random");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `durga`,
  aliases: [
    `decksmadebydurga`,
    `helpdurga`,
    `durgahelp`,
    `durgadecks`,
    `durgadecks`,
    `durga`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Durga's Decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
          new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setDescription(
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggro"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ), 
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription("All of the decks made by Durga")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const durgaDecks = {
      ladderDecks: ["pbeans"],
      memeDecks: ["bastet", "leafstars"],
      aggroDecks: ["pbeans"],
      comboDecks: ["bastet", "leafstars"],
      midrangeDecks: ["bastet", "leafstars"],
      allDecks: ["bastet", "leafstars", "pbeans"],
    };
    /**
     * The buildDeckString function takes an array of deck names and builds a string with each deck name on a new line, prefixed with the bot mention.
     * @param {Array} decks - The array of deck names to build the string from
     * @returns {string} - The string of deck names
     */
    function buildDeckString(decks) {
        return decks
          .map((deck) => `\n<@1043528908148052089> **${deck}**`)
          .join("");
      }
      const toBuildString = buildDeckString(durgaDecks.allDecks);
      const toBuildMemeString = buildDeckString(durgaDecks.memeDecks);
      const toBuildMidrangeStrike = buildDeckString(durgaDecks.midrangeDecks);
      const toBuildComboString = buildDeckString(durgaDecks.comboDecks);
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
      const memeRow = createButtons("leafstaers", "bas"); 
      const bas = createButtons("helpmeme", "lstars");
      const lstars = createButtons("bastet", "memehelp");
      const comboRow = createButtons("leafstaers2", "bas2"); 
      const bas2 = createButtons("helpcombo", "lstars2");
      const lstars2 = createButtons("bastet2", "combohelp");
      const midrangeRow = createButtons("leafstaers3", "bas3"); 
      const bas3 = createButtons("helpmidrange", "lstars3");
      const lstars3 = createButtons("bastet3", "midrangehelp");
      const allDecksRow = createButtons("pbeans", "bas4"); 
      const bas4 = createButtons("helpall", "lstars4");
      const lstars4 = createButtons("bastet4", "pb");
      const pb = createButtons("leafstars4", "allhelp");
    const user = await client.users.fetch("736455305457696779");
    const [result] = await db.query(`select bastet, sovietonion, pbeans from 
          imdecks im 
          inner join gsdecks gs on (im.deckinfo = gs.deckinfo)`);
    const durga = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below
Note: ${user.displayName} has ${durgaDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const allDecksEmbed = createHelpEmbed(
      `${user.displayName} Decks`,
      `My decks created by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the decks made by ${user.displayName} please use one of the commands listed above or click on the buttons below to navigate through all decks!
Note: ${user.displayName} has ${durgaDecks.allDecks.length} total decks in Tbot`
    );
    const memeEmbed = createHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My meme decks created by ${user.displayName} are ${toBuildMemeString}`,
      user.displayAvatarURL(),
      `To view the decks made by ${user.displayName} please use one of the commands listed above or click on the buttons below to navigate through all decks!
Note: ${user.displayName} has ${durgaDecks.memeDecks.length} total decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My midrange decks created by ${user.displayName} are ${toBuildMidrangeStrike}`,
      user.displayAvatarURL(),
      `To view the decks made by ${user.displayName} please use one of the commands listed above or click on the buttons below to navigate through all decks!
Note: ${user.displayName} has ${durgaDecks.midrangeDecks.length} total decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My combo decks created by ${user.displayName} are ${toBuildComboString}`,
      user.displayAvatarURL(),
      `To view the decks made by ${user.displayName} please use one of the commands listed above or click on the buttons below to navigate through all decks!
Note: ${user.displayName} has ${durgaDecks.comboDecks.length} total decks in Tbot`
    );
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
        .setColor("Random");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const bastet = createDeckEmbed(result, "bastet");
    const pbeans = createDeckEmbed(result, "pbeans");
    const leafstars = createDeckEmbed(result, "sovietonion");
    const m = await message.channel.send({
      embeds: [durga],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
     if (value == "ladder" || value == "aggro") {
        await i.reply({embeds: [pbeans], flags: MessageFlags.Ephemeral });
     }
    else if (value == "meme") {
        await i.update({
          embeds: [memeEmbed],
          components: [memeRow],
        });
      }
      else if (value == "combo") {
        await i.update({
          embeds: [comboEmbed],
          components: [comboRow],
        });
      } else if (value == "midrange") {
        await i.update({
          embeds: [midrangeEmbed],
          components: [midrangeRow],
        });
      } else if (value == "all") {
        await i.update({
          embeds: [allDecksEmbed],
          components: [allDecksRow],
        });
      }
    }
        /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpmeme: () => i.update({ embeds: [memeEmbed], components: [memeRow] }),
        memehelp: () => i.update({ embeds: [memeEmbed], components: [memeRow] }),
        helpcombo: () => i.update({ embeds: [comboEmbed], components: [comboRow] }),
        combohelp: () => i.update({ embeds: [comboEmbed], components: [comboRow] }),
        helppmidrange: () =>
          i.update({ embeds: [midrangeEmbed], components: [midrangeRow] }),
        midrangehelp: () =>
          i.update({ embeds: [midrangeEmbed], components: [midrangeRow] }),
        helpall: () => i.update({ embeds: [allDecksEmbed], components: [allDecksRow] }),
        allhelp: () => i.update({ embeds: [allDecksEmbed], components: [allDecksRow] }),
        bas: () => i.update({ embeds: [bastet], components: [bas] }),
        bastet: () => i.update({ embeds: [bastet], components: [bas] }),
        bas2: () => i.update({ embeds: [bastet], components: [bas2] }),
        bastet2: () => i.update({ embeds: [bastet], components: [bas2] }),
        bas3: () => i.update({ embeds: [bastet], components: [bas3] }),
        bastet3: () => i.update({ embeds: [bastet], components: [bas3] }),
        bas4: () => i.update({ embeds: [bastet], components: [bas4] }), 
        bastet4: () => i.update({ embeds: [bastet], components: [bas4] }),
        pb: () => i.update({ embeds: [pbeans], components: [pb] }),
        pbeans: () => i.update({ embeds: [pbeans], components: [pb] }),
        lstars: () => i.update({ embeds: [bastet], components: [lstars] }),
        leafstars: () => i.update({ embeds: [leafstars], components: [leafstars] }),
        lstars2: () => i.update({ embeds: [leafstars], components: [lstars2] }),
        leafstars2: () => i.update({ embeds: [leafstars], components: [lstars2] }),
        lstars3: () => i.update({ embeds: [leafstars], components: [lstars3] }),
        leafstars3: () => i.update({ embeds: [leafstars], components: [lstars3] }),
        lstars4: () => i.update({ embeds: [leafstars], components: [lstars4] }),
        leafstars4: () => i.update({ embeds: [leafstars], components: [lstars4] })
      }
      if (buttonActions[i.customId]) {
        await buttonActions[i.customId]();
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId === "select") {
        await handleSelectMenu(i);
      }
      else{
        await handleButtonInteraction(i);
      }
    });
  },
};
