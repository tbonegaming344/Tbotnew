const {
  ActionRowBuilder,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
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
    .setColor("#964B00");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpbc`,
  aliases: [
    `bchelp`,
    `bccommands`,
    `commandsbc`,
    `helpbeta`,
    `helpcarrotina`,
    `helpbetacarrotina`,
    `betacarrotinahelp`,
    `beta-carrotinadecks`,
    `betacarrotinadecks`,
    `bcdecks`,
    `betacarrotinacommands`,
    `betadecks`,
    `betahelp`,
    `carrotinadecks`,
    `bcdeck`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setDescription("Some of the Best Plant Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("competitive"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
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
          .setLabel("Midrange Deck")
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
          .setLabel("All Decks")
          .setDescription("View of Beta Carrotina decks")
          .setEmoji("<:betaEmote:1368237119650402454>")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const betaCarrotinaDecks = {
      competitiveDecks: ["shamcontrolbc"],
      ladderDecks: ["carroot", "dinocounter"],
      comboDecks: ["carroot", "dinocounter"],
      controlDecks: ["shamcontrol"],
      midrangedecks: ["dinocounter"],
      tempoDecks: ["carroot"],
      allDecks: ["carroot", "dinocounter", "shamcontrolbc"],
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
    const toBuildString = buildDeckString(betaCarrotinaDecks.allDecks);
    const toBuildLadderString = buildDeckString(betaCarrotinaDecks.ladderDecks);
    const toBuildComboString = buildDeckString(betaCarrotinaDecks.comboDecks);
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
    const ladderrow = createButtons("dinocounter", "car");
    const car = createButtons("helpladder", "dcounter");
    const dcounter = createButtons("carroot", "ladderhelp");
    const comborow = createButtons("dinocounter2", "car2");
    const car2 = createButtons("helpcombo", "dcounter2");
    const dcounter2 = createButtons("carroot2", "combohelp");
    const alldecksrow = createButtons("shamcontrol", "car3");
    const car3 = createButtons("helpall", "dcounter3");
    const dcounter3 = createButtons("carroot3", "scontrol");
    const scontrol = createButtons("dinocounter3", "allhelp");
    const [result] = await db.query("SELECT * FROM bcdecks");
    const embed = createHelpEmbed(
      "Beta Carrotina Commands",
      `To view the Beta Carrotina decks please select an option from the select menu below
Note: Beta Carrotina has ${betaCarrotinaDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist"
    );
    const ladderEmbed = createHelpEmbed(
      "Beta Carrotina Ladder Decks",
      `My ladder decks for Beta Carrotina are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist",
      `To view the ladder Beta Carrotina decks please use the commands listed above or click the buttons below to navigate through all ladder decks. 
Note: Beta Carrotina has ${betaCarrotinaDecks.ladderDecks.length} total ladder decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      "Beta Carrotina Combo Decks",
      `My combo decks for Beta Carrotina are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist",
      `To view the combo Beta Carrotina decks please use the commands listed above or click the buttons below to navigate through all combo decks.
Note: Beta Carrotina has ${betaCarrotinaDecks.comboDecks.length} total combo decks in Tbot`
    );
    const allEmbed = createHelpEmbed(
      "Beta Carrotina Decks",
      `My decks for Beta Carrotina are ${toBuildString}`,
      "https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist",
      `To view the all Beta Carrotina decks please use the commands listed above or click the buttons below to navigate through all decks.
Note: Beta Carrotina has ${betaCarrotinaDecks.allDecks.length} total all decks in Tbot`
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
        .setColor("White");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const carroot = createDeckEmbed(result, "carroot");
    const dinocounter = createDeckEmbed(result, "dinocounter");
    const shamcontrol = createDeckEmbed(result, "shamcontrol");
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
      if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (value == "control" || value == "competitive") {
        await i.reply({
          embeds: [shamcontrol],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "midrange") {
        await i.reply({
          embeds: [dinocounter],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "tempo") {
        await i.reply({
          embeds: [carroot],
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpall: { embed: allEmbed, component: alldecksrow },
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpladder: { embed: ladderEmbed, component: ladderrow },
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpcombo: { embed: comboEmbed, component: comborow },
        combohelp: { embed: comboEmbed, component: comborow },
        car: { embed: carroot, component: car },
        carroot: { embed: carroot, component: car },
        car2: { embed: carroot, component: car2 },
        carroot2: { embed: carroot, component: car2 },
        car3: { embed: carroot, component: car3 },
        carroot3: { embed: carroot, component: car3 },
        dcounter: { embed: dinocounter, component: dcounter },
        dinocounter: { embed: dinocounter, component: dcounter },
        dcounter2: { embed: dinocounter, component: dcounter2 },
        dinocounter2: { embed: dinocounter, component: dcounter2 },
        dcounter3: { embed: dinocounter, component: dcounter3 },
        dinocounter3: { embed: dinocounter, component: dcounter3 },
        scontrol: { embed: shamcontrol, component: scontrol },
        shamcontrol: { embed: shamcontrol, component: scontrol },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unknown button interaction",
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
