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
    .setColor("#FFC0CB");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helppb`,
  aliases: [
    `pbhelp`,
    `pbcommands`,
    `commandspb`,
    `helpprofessor`,
    `helpbrainstorm`,
    `helppbs`,
    `helpprofessorbrainstorm`,
    `pbsdecks`,
    `bsdecks`,
    `bsdeck`,
    `pbdecks`,
    `helpbs`,
    `bshelp`,
    `professorbrainstormdecks`,
    `professorbrainstormhelp`,
    `pbshelp`,
    `helppbs`,
  ],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Brainstorm's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("A deck that is cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setDescription(
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggro"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("control"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrange"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Brainstorm Decks")
          .setValue("all")
          .setDescription("View all the Brainstorm decks")
          .setEmoji("<:HD_ProfessorBrainstorm:1088083603918958682>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const professorBrainstormDecks = {
      budgetDecks: ["budgetpb"],
      competitiveDecks: ["trickstache"],
      ladderDecks: ["professorpackage", "valkster"],
      memeDecks: ["bonusducks", "congabait", "reversecatster", "youngeggmartin"],
      aggroDecks: ["budgetpb"],
      comboDecks: [
        "bonusducks",
        "congabait",
        "reversecatster",
        "trickstache",
        "valkster",
        "youngeggmartin",
      ],
      controlDecks: ["bonusducks"],
      midrangeDecks: ["congabait", "trickstache", "valkster"],
      tempoDecks: ["professorpackage"],
      allDecks: [
        "bonusducks",
        "budgetpb",
        "congabait",
        "professorpackage",
        "reversecatster",
        "trickstache",
        "valkster",
        "youngeggmartin",
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
    const toBuildString = buildDeckString(professorBrainstormDecks.allDecks);
    const toBuildLadderString = buildDeckString(
      professorBrainstormDecks.ladderDecks
    );
    const toBuildMemeString = buildDeckString(
      professorBrainstormDecks.memeDecks
    );
    const toBuildComboString = buildDeckString(
      professorBrainstormDecks.comboDecks
    );
    const toBuildMidrangeString = buildDeckString(
      professorBrainstormDecks.midrangeDecks
    );
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
    const alldecksrow = createButtons("youngeggmartin", "bd");
    const bd = createButtons("helpall", "bpb");
    const bpb = createButtons("bonusducks", "cb");
    const cb = createButtons("budgetpb", "pa");
    const pa = createButtons("congabait", "rcatster");
    const rcatster = createButtons("professorpackage", "ts");
    const ts = createButtons("reversecatster", "valk");
    const valk = createButtons("trickstache", "yem");
    const yem = createButtons("valkster", "allhelp");
    const ladderrow = createButtons("valkster2", "pa2");
    const pa2 = createButtons("helpladder", "valk2");
    const valk2 = createButtons("package2", "ladderhelp");
    const memerow = createButtons("youngeggmartin2", "bd2");
    const bd2 = createButtons("helpmeme", "cb2");
    const cb2 = createButtons("bonusducks2", "rcatster2");
    const rcatster2 = createButtons("congabait2", "yem2");
    const yem2 = createButtons("reversecatster2", "memehelp");
    const comborow = createButtons("youngeggmartin3", "bd3");
    const bd3 = createButtons("helpcombo", "cb3");
    const cb3 = createButtons("bonusducks3", "rcatster3");
    const rcatster3 = createButtons("congabait3", "ts2");
    const ts2 = createButtons("reversecatster3", "valk3");
    const valk3 = createButtons("trickstache2", "yem3");
    const yem3 = createButtons("valkster3", "combohelp");
    const midrangerow = createButtons("valkster4", "cb4");
    const cb4 = createButtons("helpmid", "ts3");
    const ts3 = createButtons("congabait4", "valk4");
    const valk4 = createButtons("trickstache3", "midhelp");
    const alldecksEmbed = createHelpEmbed(
      "Professor Brainstorm Decks",
      `My commands for Professor Brainstorm(PB) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.allDecks.length} total decks in Tbot`
    );
    const ladderEmbed = createHelpEmbed(
      "Professor Brainstorm Ladder Decks",
      `My ladder commands for Professor Brainstorm(PB) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const memeEmbed = createHelpEmbed(
      "Professor Brainstorm Meme Decks",
      `My meme commands for Professor Brainstorm(PB) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.memeDecks.length} meme decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      "Professor Brainstorm Combo Decks",
      `My combo commands for Professor Brainstorm(PB) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      "Professor Brainstorm Midrange Decks",
      `My midrange commands for Professor Brainstorm(PB) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
      `To view the Professor Brainstrom midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Professor Brainstorm has ${professorBrainstormDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const helppb = createHelpEmbed(
      "Professor Brainstorm Decks",
      `To view the Professor Brainstrom decks please select an option from the select menu below!
Note: Professor Brainstorm has ${professorBrainstormDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022",
    );
    const [result] = await db.query(`select * from pbdecks`);
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
    const bonusducks = createDeckEmbed(result, "bonusducks");
    const budgetpb = createDeckEmbed(result, "budgetpb");
    const congabait = createDeckEmbed(result, "congabait");
    const professorpackage = createDeckEmbed(result, "professorpackage");
    const reversecatster = createDeckEmbed(result, "reversecatster");
    const trickstache = createDeckEmbed(result, "trickstache");
    const valkster = createDeckEmbed(result, "valkster");
    const youngeggmartin = createDeckEmbed(result, "youngeggmartin");
    const m = await message.channel.send({
      embeds: [helppb],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i - The interaction object
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "comp") {
        await i.reply({ embeds: [trickstache], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.reply({
          embeds: [bonusducks],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.reply({
          embeds: [professorpackage],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "budget" || value == "aggro") {
        await i.reply({ embeds: [budgetpb], flags: MessageFlags.Ephemeral });
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
        helpmeme: {embed: memeEmbed, component: memerow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpcombo: {embed: comboEmbed, component: comborow},
        combohelp: {embed: comboEmbed, component: comborow},
        helpmid: {embed: midrangeEmbed, component: midrangerow},
        midhelp: {embed: midrangeEmbed, component: midrangerow},
        bd: {embed: bonusducks, component: bd},
        bonusducks: {embed: bonusducks, component: bd},
        bd2: {embed: bonusducks, component: bd2},
        bonusducks2: {embed: bonusducks, component: bd2},
        bd3: {embed: bonusducks, component: bd3},
        bonusducks3: {embed: bonusducks, component: bd3},
        bpb: {embed: budgetpb, component: bpb},
        budgetpb: {embed: budgetpb, component: bpb},
        cb: {embed: congabait, component: cb},
        congabait: {embed: congabait, component: cb},
        cb2: {embed: congabait, component: cb2},
        congabait2: {embed: congabait, component: cb2},
        cb3: {embed: congabait, component: cb3},
        congabait3: {embed: congabait, component: cb3},
        cb4: {embed: congabait, component: cb4},
        congabait4: {embed: congabait, component: cb4},
        pa: {embed: professorpackage, component: pa},
        professorpackage: {embed: professorpackage, component: pa},
        pa2: {embed: professorpackage, component: pa2},
        professorpackage2: {embed: professorpackage, component: pa2},
        rcatster: {embed: reversecatster, component: rcatster},
        reversecatster: {embed: reversecatster, component: rcatster},
        rcatster2: {embed: reversecatster, component: rcatster2},
        reversecatster2: {embed: reversecatster, component: rcatster2},
        rcatster3: {embed: reversecatster, component: rcatster3},
        reversecatster3: {embed: reversecatster, component: rcatster3},
        ts: {embed: trickstache, component: ts},
        trickstache: {embed: trickstache, component: ts},
        ts2: {embed: trickstache, component: ts2},
        trickstache2: {embed: trickstache, component: ts2},
        ts3: {embed: trickstache, component: ts3},
        trickstache3: {embed: trickstache, component: ts3},
        valk: {embed: valkster, component: valk},
        valkster: {embed: valkster, component: valk},
        valk2: {embed: valkster, component: valk2},
        valkster2: {embed: valkster, component: valk2},
        valk3: {embed: valkster, component: valk3},
        valkster3: {embed: valkster, component: valk3},
        valk4: {embed: valkster, component: valk4},
        valkster4: {embed: valkster, component: valk4},
        yem: {embed: youngeggmartin, component: yem},
        youngeggmartin: {embed: youngeggmartin, component: yem},
        yem2: {embed: youngeggmartin, component: yem2},
        youngeggmartin2: {embed: youngeggmartin, component: yem2},
        yem3: {embed: youngeggmartin, component: yem3},
        youngeggmartin3: {embed: youngeggmartin, component: yem3},
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
