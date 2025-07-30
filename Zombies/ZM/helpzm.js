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
    .setColor("Orange");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpzm`,
  aliases: [
    `zmhelp`,
    `zmcommands`,
    `zmdeck`,
    `commandszm`,
    `helpzmech`,
    `zmechcommands`,
    `commandszmech`,
    `helpmech`,
    `helpzmech`,
    `zmdecks`,
    `deckszm`,
    `zmechdecks`,
    `deckszmech`,
    `zmechhelp`,
  ],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Zmech's Decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
           new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best Plant Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Decks")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
          .setValue("control")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Zmech Decks")
          .setValue("all")
          .setDescription("View all Zmech decks in Tbot")
          .setEmoji("<:zmech:1088189178224853063>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const zmechDecks = {
      budgetDecks: ["budgetzm"],
      ladderDecks: ["binaryflagwar", "brady", "trickmech"],
      compDecks: ["lawnmower2"],
      memeDecks: ["uncrackamech", "zmoss"],
      aggroDecks: ["budgetzm", "trickmech"],
      comboDecks: ["binaryflagwar", "budgetzm", "lawnmower2", "trickmech", "uncrackamech", "zmoss"],
      controlDecks: ["uncrackamech"],
      midrangeDecks: ["binaryflagwar", "lawnmower2"],
      tempoDecks: ["brady"],
      allDecks: [
        "binaryflagwar",
        "brady",
        "budgetzm",
        "lawnmower2",
        "trickmech",
        "uncrackamech",
        "zmoss",
      ],
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
    const toBuildString = buildDeckString(zmechDecks.allDecks);
    const toBuildLadderString = buildDeckString(zmechDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(zmechDecks.memeDecks);
    const toBuildAggroString = buildDeckString(zmechDecks.aggroDecks);
    const toBuildComboString = buildDeckString(zmechDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(zmechDecks.midrangeDecks);
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
    const alldecksrow = createButtons("zmoss", "bfw");
    const bfw = createButtons("helpall", "br");
    const br = createButtons("binaryflagwar", "bzm");
    const bzm = createButtons("brady", "lm");
    const lm = createButtons("budgetzm", "tm"); 
    const tm = createButtons("lawnmower", "um");
    const um = createButtons("trickmech", "zm");
    const zm = createButtons("uncrackamech", "allhelp");
    const ladderrow = createButtons("trickmech2", "bfw2");
    const bfw2 = createButtons("ladderhelp", "br2");
    const br2 = createButtons("binaryflagwar2", "tm2");
    const tm2 = createButtons("brady2", "helpladder");
    const memerow = createButtons("zmoss2", "um2");
    const um2 = createButtons("memehelp", "zm2");
    const zm2 = createButtons("uncrackamech2", "helpmeme");
    const aggrorow = createButtons("trickmech2", "bzm2");
    const bzm2 = createButtons("aggrohelp", "tm3");
    const tm3 = createButtons("budgetzm2", "helpaggro");
    const comborow = createButtons("zmoss3", "bfw3");
    const bfw3 = createButtons("combohelp", "bzm3");
    const bzm3 = createButtons("binaryflagwar3", "lm2");
    const lm2 = createButtons("budgetzm3", "tm4");
    const tm4 = createButtons("lawnmower2", "um3");
    const um3 = createButtons("trickmech4", "zm3");
    const zm3 = createButtons("uncrackamech3", "helpcombo");
    const midrangerow = createButtons("lawnmower3", "bfw4");
    const bfw4 = createButtons("helpmidrange", "lm3");
    const lm3 = createButtons("binaryflagwar4", "midrangehelp");
    const embed = createHelpEmbed(
      "Zmech Decks",
      `To view the Zmech decks please select an option from the select menu below!
Note: Zmech has ${zmechDecks.allDecks.length} total decks in Tbot`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
    );
    const alldecksEmbed = createHelpEmbed(
      "Zmech Decks",
      `My commands for Zmech(ZM) are ${toBuildString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Zmech has ${zmechDecks.allDecks.length} total decks in Tbot`
    );
    const ladderEmbed = createHelpEmbed(
      "Zmech Ladder Decks",
      `My ladder decks for Zmech(ZM) are ${toBuildLadderString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Zmech has ${zmechDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const memeEmbed = createHelpEmbed(
      "Zmech Meme Decks",
      `My meme decks for Zmech(ZM) are ${toBuildMemeString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Zmech has ${zmechDecks.memeDecks.length} meme decks in Tbot`
    );
    const aggroEmbed = createHelpEmbed(
      "Zmech Aggro Decks",
      `My aggro decks for Zmech(ZM) are ${toBuildAggroString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech aggro decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Zmech has ${zmechDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      "Zmech Combo Decks",
      `My combo decks for Zmech(ZM) are ${toBuildComboString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Zmech has ${zmechDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      "Zmech Midrange Decks",
      `My midrange decks for Zmech(ZM) are ${toBuildMidrangeString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Zmech has ${zmechDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM zmdecks`);
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
        .setColor("Purple");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const binaryflagwar = createDeckEmbed(result, "binaryflagwar");
    const brady = createDeckEmbed(result, "brady");
    const budgetzm = createDeckEmbed(result, "budgetzm");
    const uncrackamech = createDeckEmbed(result, "feastmech");
    const lawnmower = createDeckEmbed(result, "lawnmower");
    const trickmech = createDeckEmbed(result, "trickmech");
    const zmoss = createDeckEmbed(result, "zmoss");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.reply({ embeds: [brady], flags: MessageFlags.Ephemeral });
      } else if (value == "control") {
        await i.reply({
          embeds: [uncrackamech],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "budget") {
        await i.reply({ embeds: [budgetzm], flags: MessageFlags.Ephemeral });
      }
      else if (value == "comp") {
        await i.reply({ embeds: [lawnmower], flags: MessageFlags.Ephemeral });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        allhelp: {embed: alldecksEmbed, component: alldecksrow}, 
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        ladderhelp: {embed: ladderEmbed, component: ladderrow},
        helpladder: {embed: ladderEmbed, component: ladderrow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpmeme: {embed: memeEmbed, component: memerow},
        aggrohelp: {embed: aggroEmbed, component: aggrorow},
        helpaggro: {embed: aggroEmbed, component: aggrorow},
        combohelp: {embed: comboEmbed, component: comborow},
        helpcombo: {embed: comboEmbed, component: comborow},
        helpmidrange: {embed: midrangeEmbed, component: midrangerow},
        midrangehelp: {embed: midrangeEmbed, component: midrangerow},
        bfw: {embed: binaryflagwar, component: bfw},
        binaryflagwar: {embed: binaryflagwar, component: bfw},
        bfw2: {embed: binaryflagwar, component: bfw2},
        binaryflagwar2: {embed: binaryflagwar, component: bfw2},
        bfw3: {embed: binaryflagwar, component: bfw3},
        binaryflagwar3: {embed: binaryflagwar, component: bfw3},
        bfw4: {embed: binaryflagwar, component: bfw4},
        binaryflagwar4: {embed: binaryflagwar, component: bfw4},
        br: {embed: brady, component: br},
        brady: {embed: brady, component: br},
        br2: {embed: brady, component: br2},
        brady2: {embed: brady, component: br2},
        bzm: {embed: budgetzm, component: bzm},
        budgetzm: {embed: budgetzm, component: bzm},
        bzm2: {embed: budgetzm, component: bzm2},
        budgetzm2: {embed: budgetzm, component: bzm2},
        bzm3: {embed: budgetzm, component: bzm3},
        budgetzm3: {embed: budgetzm, component: bzm3},
        tm: {embed: trickmech, component: tm},
        trickmech: {embed: trickmech, component: tm},
        tm2: {embed: trickmech, component: tm2},
        trickmech2: {embed: trickmech, component: tm2},
        tm3: {embed: trickmech, component: tm3},
        trickmech3: {embed: trickmech, component: tm3},
        tm4: {embed: trickmech, component: tm4},
        trickmech4: {embed: trickmech, component: tm4},
        um: {embed: uncrackamech, component: um},
        uncrackamech: {embed: uncrackamech, component: um},
        um2: {embed: uncrackamech, component: um2},
        uncrackamech2: {embed: uncrackamech, component: um2},
        um3: {embed: uncrackamech, component: um3},
        uncrackamech3: {embed: uncrackamech, component: um3},
        zm: {embed: zmoss, component: zm},
        zmoss: {embed: zmoss, component: zm},
        zm2: {embed: zmoss, component: zm2},
        zmoss2: {embed: zmoss, component: zm2},
        zm3: {embed: zmoss, component: zm3},
        zmoss3: {embed: zmoss, component: zm3},
        lm: {embed: lawnmower, component: lm},
        lawnmower: {embed: lawnmower, component: lm},
        lm2: {embed: lawnmower, component: lm2},
        lawnmower2: {embed: lawnmower, component: lm2},
        lm3: {embed: lawnmower, component: lm3},
        lawnmower3: {embed: lawnmower, component: lm3},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({ content: "Unknown button action", flags: MessageFlags.Ephemeral });
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
