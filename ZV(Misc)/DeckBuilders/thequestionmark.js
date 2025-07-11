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
    .setColor("#000000");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `thequestionmark`,
  aliases: [
    `thequestionmarkdecks`,
    `questionmark`,
    `questionmarkhelp`,
    `thequestionmarkhelp`,
    `helpthequestionmark`,
    `questionmarkdecks`,
    `helpthequestionmark`,
    `tqm`,
    `helptqm`,
    `tqmdecks`,
    `tqmhelp`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view tqm's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that are generally only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Decks")
          .setValue("aggro")
          .setDescription(
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription("An option to view all of the decks made by tqm")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const theQuestionMarkDecks = {
      ladderDecks: ["cryoboy", "schoolyard", "splimps"],
      memeDecks: ["nuttin"],
      aggroDecks: ["schoolyard", "splimps"],
      comboDecks: ["cryoboy", "nuttin"],
      midrangeDecks: ["cryoboy"],
      allDecks: ["cryoboy", "nuttin", "schoolyard", "splimps"],
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
    const toBuildLadderString = buildDeckString(
      theQuestionMarkDecks.ladderDecks
    );
    const toBuildAggroString = buildDeckString(theQuestionMarkDecks.aggroDecks);
    const toBuildComboString = buildDeckString(theQuestionMarkDecks.comboDecks);
    const toBuildString = buildDeckString(theQuestionMarkDecks.allDecks);
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
    const alldecksrow = createButtons("splimps", "cboy");
    const cboy = createButtons("helpall", "nut");
    const nut = createButtons("cyroboy", "syard");
    const syard = createButtons("nuttin", "spl");
    const spl = createButtons("schoolyard", "allhelp");
    const ladderrow = createButtons("splimps2", "cboy2");
    const cboy2 = createButtons("helpladder", "syard2");
    const syard2 = createButtons("cyroboy2", "spl2");
    const spl2 = createButtons("schoolyard2", "ladderhelp");
    const comborow = createButtons("nuttin2", "cboy3");
    const cboy3 = createButtons("helpcombo", "nut2");
    const nut2 = createButtons("cyroboy3", "combohelp");
    const aggrorow = createButtons("splimps3", "syard3");
    const syard3 = createButtons("helpaggro", "spl3");
    const spl3 = createButtons("schoolyard3", "aggrohelp");
    const user = await client.users.fetch("906888157272875048");
    const tqm = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${theQuestionMarkDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const alldecksEmbed = createHelpEmbed(
      `${user.displayName} Decks`,
      `My commands for decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${theQuestionMarkDecks.allDecks.length} total decks in Tbot`
    );
    const ladderEmbed = createHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My ladder decks made by ${user.displayName} are ${toBuildLadderString}`,
      user.displayAvatarURL(),
      `To view the ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${theQuestionMarkDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const aggroEmbed = createHelpEmbed(
      `${user.displayName} Aggro Decks`,
      `My aggro decks made by ${user.displayName} are ${toBuildAggroString}`,
      user.displayAvatarURL(),
      `To view the aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: ${user.displayName} has ${theQuestionMarkDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My combo decks made by ${user.displayName} are ${toBuildComboString}`,
      user.displayAvatarURL(),
      `To view the combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${theQuestionMarkDecks.comboDecks.length} combo decks in Tbot`
    );
    const [result] =
      await db.query(`select cyroboy, nutting, schoolyard, splimps from hgdecks hg 
      inner join ifdecks fi on (hg.deckinfo = fi.deckinfo)
      inner join ntdecks nt on (hg.deckinfo = nt.deckinfo)
      inner join spdecks sp on (hg.deckinfo = sp.deckinfo)`);
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
        .setColor("#000000");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const cyroboy = createDeckEmbed(result, "cyroboy");
    const nuttin = createDeckEmbed(result, "nutting");
    const schoolyard = createDeckEmbed(result, "schoolyard");
    const splimps = createDeckEmbed(result, "splimps");
    const m = await message.channel.send({ embeds: [tqm], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "meme") {
        await i.reply({ embeds: [nuttin], flags: MessageFlags.Ephemeral });
      } else if (value == "midrange") {
        await i.reply({embeds: [cyroboy], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpladder: { embed: ladderEmbed, component: ladderrow },
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpaggro: { embed: aggroEmbed, component: aggrorow },
        aggrohelp: { embed: aggroEmbed, component: aggrorow },
        helpcombo: { embed: comboEmbed, component: comborow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpmidrange: { embed: midrangeEmbed, component: midrangrow },
        midrangehelp: { embed: midrangeEmbed, component: midrangrow },
        allhelp: { embed: alldecksEmbed, component: alldecksrow },
        helpall: { embed: alldecksEmbed, component: alldecksrow },
        cboy: { embed: cyroboy, component: cboy },
        cyroboy: { embed: cyroboy, component: cboy },
        cboy2: { embed: cyroboy, component: cboy2 },
        cyroboy2: { embed: cyroboy, component: cboy2 },
        cboy3: { embed: cyroboy, component: cboy3 },
        cyroboy3: { embed: cyroboy, component: cboy3 },
        spl: { embed: splimps, component: spl },
        splimps: { embed: splimps, component: spl },
        spl2: { embed: splimps, component: spl2 },
        splimps2: { embed: splimps, component: spl2 },
        spl3: { embed: splimps, component: spl3 },
        splimps3: { embed: splimps, component: spl3 },
        nut: { embed: nuttin, component: nut },
        nuttin: { embed: nuttin, component: nut },
        nut2: { embed: nuttin, component: nut2 },
        nuttin2: { embed: nuttin, component: nut2 },
        syard: { embed: schoolyard, component: syard },
        schoolyard: { embed: schoolyard, component: syard },
        syard2: { embed: schoolyard, component: syard2 },
        schoolyard2: { embed: schoolyard, component: syard2 },
        syard3: { embed: schoolyard, component: syard3 },
        schoolyard3: { embed: schoolyard, component: syard3 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction.",
          flags: MessageFlags.Ephemeral,
        });
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
