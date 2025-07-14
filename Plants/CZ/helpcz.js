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
    .setColor("Green");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpcz`,
  aliases: [
    `czhelp`,
    `czcommands`,
    `commandscz`,
    `helpchomp`,
    `helpzilla`,
    `zillahelp`,
    `chompzillahelp`,
    `chompzillacommands`,
    `czdecks`,
    `chompzilladecks`,
    `helpchompzilla`,
  ],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view chompzilla's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setEmoji("💰")
          .setDescription("A Deck that is cheap for new players"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setEmoji("<:compemote:1325461143136764060>")
          .setDescription("Some of the best decks in the game"),
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
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempo"), 
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription("All of the Chompzilla decks in Tbot")
          .setEmoji("<:LetsFrickenChomp:1100168574829596824>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const chompzillaDecks = {
      budgetDecks: ["budgetmopzilla"],
      compDecks: ["venice"],
      ladderDecks: ["leafystrike"],
      memeDecks: ["lasersnap", "moprbius"],
      comboDecks: ["budgetmopzilla", "lasersnap", "moprbius"],
      controlDecks: ["venice"],
      midrangeDecks: ["budgetmopzilla", "lasersnap", "moprbius", "venice"],
      tempoDecks: ["leafystrike"],
      allDecks: [
        "budgetmopzilla",
        "lasersnap",
        "leafystrike",
        "moprbius",
        "venice"
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
    const toBuildMemeString = buildDeckString(chompzillaDecks.memeDecks);
    const toBuildComboString = buildDeckString(chompzillaDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(
      chompzillaDecks.midrangeDecks
    );
    const toBuildString = buildDeckString(chompzillaDecks.allDecks);
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
    const memerow = createButtons("mopribus", "lsnap");
    const lsnap = createButtons("helpmeme", "mop");
    const mop = createButtons("lasersnap", "memehelp");
    const comborow = createButtons("mopribus2", "bmz");
    const bmz = createButtons("helpcombo", "lsnap2");
    const lsnap2 = createButtons("budgetmopzilla", "mop2");
    const mop2 = createButtons("lasersnap2", "combohelp");
    const midrangerow = createButtons("venice", "bmz2");
    const bmz2 = createButtons("helpmid", "lsnap3");
    const lsnap3 = createButtons("budgetmopzilla2", "mop3");
    const mop3 = createButtons("lasersnap3", "vce");
    const vce = createButtons("mopribus3", "midhelp");
    const alldecksrow = createButtons("venice2", "bmz3");
    const bmz3 = createButtons("helpall", "lsnap4");
    const lsnap4 = createButtons("budgetmopzilla3", "lstrike");
    const lstrike= createButtons("lasersnap4", "mop4");
    const mop4 = createButtons("leafystrike", "vce2");
    const vce2 = createButtons("mopribu4", "allhelp");
    const embed = createHelpEmbed(
      "Chompzilla Decks",
      `To view the Chompzilla decks please select an option from the select menu below!
Note: Chompzilla has ${chompzillaDecks.allDecks.length} total decks in Tbot. Select Midrange decks to view all Chompzilla decks`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
    );
    const memeEmbed = createHelpEmbed(
      "Chompzilla Meme Decks",
      `My Meme decks for Chompzilla(CZ) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Meme Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Meme decks!
Note: Chompzilla has ${chompzillaDecks.memeDecks.length} Meme decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      "Chompzilla Combo Decks",
      `My Combo decks for Chompzilla(CZ) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Combo Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Combo decks!
Note: Chompzilla has ${chompzillaDecks.comboDecks.length} Combo decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      "Chompzilla Midrange Decks",
      `My Midrange decks for Chompzilla(CZ) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Midrange Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Midrange decks!
Note: Chompzilla has ${chompzillaDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
    const allEmbed = createHelpEmbed(
      "Chompzilla Decks",
      `My decks for Chompzilla(CZ) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110", 
      `To view the Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Chompzilla decks!
Note: Chompzilla has ${chompzillaDecks.allDecks.length} decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from czdecks`);
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
        .setColor("Yellow");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const venice = createDeckEmbed(result, "apotk");
    const budgetcz = createDeckEmbed(result, "budgetcz");
    const lasersnap = createDeckEmbed(result, "lasersnap");
    const leafystrike = createDeckEmbed(result, "leafystrike");
    const mopribus = createDeckEmbed(result, "mopribus");
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
      if (value == "budget") {
        await i.reply({ embeds: [budgetcz], flags: MessageFlags.Ephemeral });
      } else if (value == "comp" || value == "control") {
        await i.reply({ embeds: [venice], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      else if(value == "ladder" || value == "tempo") {
        await i.reply({ embeds: [leafystrike], flags: MessageFlags.Ephemeral });
      }
      else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        memehelp: { embed: memeEmbed, component: memerow },
        helpmeme: { embed: memeEmbed, component: memerow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcombo: { embed: comboEmbed, component: comborow },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bmz: { embed: budgetcz, component: bmz },
        budgetmopzilla: { embed: budgetcz, component: bmz },
        bmz2: { embed: budgetcz, component: bmz2 },
        budgetmopzilla2: { embed: budgetcz, component: bmz2 },
        bmz3: { embed: budgetcz, component: bmz3 },
        budgetmopzilla3: { embed: budgetcz, component: bmz3 },
        vce: { embed: venice, component: vce },
        venice: { embed: venice, component: vce },
        vce2: { embed: venice, component: vce2 },
        venice2: { embed: venice, component: vce2 },
        lsnap: { embed: lasersnap, component: lsnap },
        lasersnap: { embed: lasersnap, component: lsnap },
        lsnap2: { embed: lasersnap, component: lsnap2 },
        lasersnap2: { embed: lasersnap, component: lsnap2 },
        lsnap3: { embed: lasersnap, component: lsnap3 },
        lasersnap3: { embed: lasersnap, component: lsnap3 },
        lsnap4: { embed: lasersnap, component: lsnap4 },
        lasersnap4: { embed: lasersnap, component: lsnap4 },
        mop: { embed: mopribus, component: mop },
        mopribus: { embed: mopribus, component: mop },
        mop2: { embed: mopribus, component: mop2 },
        mopribus2: { embed: mopribus, component: mop2 },
        mop3: { embed: mopribus, component: mop3 },
        mopribus3: { embed: mopribus, component: mop3 }, 
        mop4: { embed: mopribus, component: mop4 },
        mopribu4: { embed: mopribus, component: mop4 },
        lstrike: { embed: leafystrike, component: lstrike },
        leafystrike: { embed: leafystrike, component: lstrike }
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button action",
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
