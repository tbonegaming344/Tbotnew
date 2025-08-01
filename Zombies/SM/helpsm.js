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
const { create } = require("domain");
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
  name: `helpsm`,
  aliases: [
    `smhelp`,
    `smcommands`,
    `commandssm`,
    `smdeck`,
    `smashdb`,
    `helpsmash`,
    `smashcommands`,
    `smashhelp`,
    `smdecks`,
    `smashdecks`,
    `deckssm`,
    `deckssmash`,
    `helpts`,
    `helpthesmash`,
    `tshelp`,
    `smashlist`,
    `smashlists`,
  ],
  category: `Smash(SM)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Smash's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
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
          .setLabel("Control Decks")
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
          .setLabel("All Smash Decks")
          .setValue("all")
          .setDescription("All of the Smash decks")
          .setEmoji("<:The_SmashH:1088162519958425670>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const smashDecks = {
      budgetDecks: ["budgetsm"],
      competitiveDecks: ["pablosyeezys"], 
      ladderDecks: ["luminous"],
      memeDecks: ["pankration", "stalemate", "whalepharaoh"],
      aggroDecks: ["budgetsm"],
      comboDecks: ["budgetsm", "pablosyeezys", "pankration", "whalepharaoh"],
      controlDecks: ["stalemate", "whalepharaoh"],
      midrangeDecks: ["luminous", "pablosyeezys", "pankration"],
      tempoDecks: ["luminous"],
      allDecks: [
        "budgetsm",
        "luminous",
        "pablosyeezys",
        "pankration",
        "stalemate",
        "whalepharaoh",
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
    const toBuildString = buildDeckString(smashDecks.allDecks);
    const toBuildMemeString = buildDeckString(smashDecks.memeDecks);
    const toBuildControlString = buildDeckString(smashDecks.controlDecks);
    const toBuildMidrangeString = buildDeckString(smashDecks.midrangeDecks);
    const toBuildComboString = buildDeckString(smashDecks.comboDecks);
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
    const alldecksrow = createButtons("whalepharaoh", "bsm");
    const bsm = createButtons("helpall", "lum");
    const lum = createButtons("budgetsm", "py");
    const py = createButtons("luminous", "pank");
    const pank = createButtons("pablosyeezys", "smate");
    const smate = createButtons("pankration", "wp");
    const wp = createButtons("stalemate", "allhelp");
    const memerow = createButtons("whalepharaoh2", "pank2");
    const pank2 = createButtons("helpmeme", "smate2");
    const smate2 = createButtons("pankration2", "wp2");
    const wp2 = createButtons("stalemate2", "memehelp");
    const controlrow = createButtons("whalepharaoh3", "smate3");
    const smate3 = createButtons("helpcontrol", "wp3");
    const wp3 = createButtons("stalemate3", "controlhelp");
    const comborow = createButtons("whalepharaoh4", "bsm2");
    const bsm2 = createButtons("combohelp", "py2");
    const py2 = createButtons("budgetsm2", "pank3");
    const pank3 = createButtons("pablosyeezys2", "wp4");
    const wp4 = createButtons("pankration3", "helpcombo");
    const midrangerow = createButtons("pankration4", "lum2");
    const lum2 = createButtons("helpmidrange", "py3");
    const py3 = createButtons("luminous2", "pank4");
    const pank4 = createButtons("pablosyeezys3", "midrangehelp");
    const helpsm = createHelpEmbed(
      "Smash Decks",
      `To view the Smash decks please select an option from the select menu below!
Note: Smash has ${smashDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
    );
    const alldecksEmbed = createHelpEmbed(
      "Smash Decks",
      `My commands for Smash(SM) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Smash has ${smashDecks.allDecks.length} total decks in Tbot`
    );
    const memeEmbed = createHelpEmbed(
      "Smash Meme Decks",
      `My meme decks for Smash(SM) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Smash has ${smashDecks.memeDecks.length} meme decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      "Smash Combo Decks",
      `My combo decks for Smash(SM) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Smash has ${smashDecks.comboDecks.length} combo decks in Tbot`
    );
    const controlEmbed = createHelpEmbed(
      "Smash Control Decks",
      `My control decks for Smash(SM) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: Smash has ${smashDecks.controlDecks.length} control decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      "Smash Midrange Decks",
      `My midrange decks for Smash(SM) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Smash has ${smashDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM smdecks`);
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
    const budgetsm = createDeckEmbed(result, "budgetsm");
    const luminous = createDeckEmbed(result, "luminous");
    const pablosyeezys = createDeckEmbed(result, "pablosyeezys");
    const pankration = createDeckEmbed(result, "pankration");
    const stalemate = createDeckEmbed(result, "stalemate");
    const whalepharaoh = createDeckEmbed(result, "whalepharaoh");
    const m = await message.channel.send({
      embeds: [helpsm],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "comp") {
        await i.reply({
          embeds: [pablosyeezys],
          flags: MessageFlags.Ephemeral,
        });
      }  else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "budget" || value == "aggro") {
        await i.reply({ embeds: [budgetsm], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      else if(value == "ladder" || value == "tempo"){
        await i.reply({ embeds: [luminous], flags: MessageFlags.Ephemeral });
      }
      else if(value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpall: {embed: alldecksEmbed, component: alldecksrow}, 
        allhelp: {embed: alldecksEmbed, component: alldecksrow}, 
        combohelp: {embed: comboEmbed, component: comborow}, 
        helpcombo: {embed: comboEmbed, component: comborow}, 
        midrangehelp: {embed: midrangeEmbed, component: midrangerow},
        helpmidrange: {embed: midrangeEmbed, component: midrangerow},
        controlhelp: {embed: controlEmbed, component: controlrow},
        helpcontrol: {embed: controlEmbed, component: controlrow},
        helpmeme: {embed: memeEmbed, component: memerow},
        memehelp: {embed: memeEmbed, component: memerow},
        bsm: {embed: budgetsm, component: bsm}, 
        budgetsm: {embed: budgetsm, component: bsm},
        bsm2: {embed: budgetsm, component: bsm2},
        budgetsm2: {embed: budgetsm, component: bsm2},
        py: {embed: pablosyeezys, component: py},
        pablosyeezys: {embed: pablosyeezys, component: py},
        py2: {embed: pablosyeezys, component: py2},
        pablosyeezys2: {embed: pablosyeezys, component: py2},
        py3: {embed: pablosyeezys, component: py3},
        pablosyeezys3: {embed: pablosyeezys, component: py3},
        wp: {embed: whalepharaoh, component: wp},
        whalepharaoh: {embed: whalepharaoh, component: wp},
        wp2: {embed: whalepharaoh, component: wp2},
        whalepharaoh2: {embed: whalepharaoh, component: wp2},
        wp3: {embed: whalepharaoh, component: wp3},
        whalepharaoh3: {embed: whalepharaoh, component: wp3},
        wp4: {embed: whalepharaoh, component: wp4},
        whalepharaoh4: {embed: whalepharaoh, component: wp4},
        lum: {embed: luminous, component: lum},
        luminous: {embed: luminous, component: lum},
        lum2: {embed: luminous, component: lum2},
        luminous2: {embed: luminous, component: lum2},
        pank: {embed: pankration, component: pank},
        pankration: {embed: pankration, component: pank},
        pank2: {embed: pankration, component: pank2},
        pankration2: {embed: pankration, component: pank2},
        pank3: {embed: pankration, component: pank3},
        pankration3: {embed: pankration, component: pank3},
        pank4: {embed: pankration, component: pank4},
        pankration4: {embed: pankration, component: pank4},
        smate: {embed: stalemate, component: smate},
        stalemate: {embed: stalemate, component: smate},
        smate2: {embed: stalemate, component: smate2},
        stalemate2: {embed: stalemate, component: smate2},
        smate3: {embed: stalemate, component: smate3},
        stalemate3: {embed: stalemate, component: smate3},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Invalid button interaction", flags: MessageFlags.Ephemeral });
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
