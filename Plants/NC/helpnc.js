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
    .setColor("Red");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpnc`,
  aliases: [
    `nccommands`,
    `commandsnc`,
    `nightcapdecks`,
    `nchelp`,
    `helpnightcap`,
    `nightcaphelp`,
    `helpcap`,
    `helpnight`,
    `nightcapdecks`,
    `helpnightcap`,
    `ncdecks`,
    `capdecks`,
    `ncdeck`,
  ],
  category: `Night Cap(NC)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("select an option below to view Nightcap's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Decks")
          .setValue("comp")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
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
          .setLabel("Control Deck")
          .setValue("control")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Nightcap Decks")
          .setDescription("All of nightcap's decks")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const nightcapDecks = {
      budgetDecks: ["budgetnc"],
      competitiveDecks: ["cyburn", "toyotacontrolla"],
      aggroDecks: ["budgetnc"],
      comboDecks: ["cyburn"],
      controlDecks: ["toyotacontrolla"],
      midrangeDecks: ["cyburn"],
      allDecks: ["budgetnc", "cyburn", "toyotacontrolla"],
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
    const toBuildCompString = buildDeckString(nightcapDecks.competitiveDecks);
    const toBuildString = buildDeckString(nightcapDecks.allDecks);
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
    const compRow = createButtons("toyotacontrolla", "cburn");
    const cburn = createButtons("helpcomp", "tc");
    const tc = createButtons("cyburn", "comphelp");
    const alldecksrow = createButtons("toyotacontrolla2", "bnc");
    const bnc = createButtons("helpall", "cburn2");
    const cburn2 = createButtons("budgetnc", "tc2");
    const tc2 = createButtons("cyburn2", "allhelp");
    const embed = createHelpEmbed(
      "Night Cap(NC) Decks",
      `To view the Night Cap decks please select an option from the select menu below!
Note: Night Cap has ${nightcapDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
    );
    const compEmbed = createHelpEmbed(
      "Night Cap Competitive Decks",
      `My Competitive Decks for Night Cap(NC) are ${toBuildCompString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044",
      `To view the Competitive Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Competitive decks!
Note: Night Cap has ${nightcapDecks.competitiveDecks.length} Competitive decks in Tbot`
    );
    const allEmbed = createHelpEmbed(
      "Night Cap Decks",
      `My Decks for Night Cap(NC) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044",
      `To view the Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Night Cap decks!
Note: Night Cap has ${nightcapDecks.allDecks.length} decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from ncdecks`);
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
    //budgetnc
    const budgetnc = createDeckEmbed(result, "budgetnc");
    const cyburn = createDeckEmbed(result, "cyburn");
    const toyotacontrolla = createDeckEmbed(result, "toyotacontrolla");
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
      if (value == "budget" || value == "aggro") {
        await i.reply({ embeds: [budgetnc], flags: MessageFlags.Ephemeral });
      } else if (value == "comp") {
        await i.update({ embeds: [compEmbed], components: [compRow] });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }  else if (value == "combo") {
        await i.reply({ embeds: [cyburn], flags: MessageFlags.Ephemeral });
      } else if (value == "control") {
        await i.reply({
          embeds: [toyotacontrolla],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "midrange") {
        await i.reply({ embeds: [cyburn], flags: MessageFlags.Ephemeral });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpcomp: { embed: compEmbed, component: compRow },
        comphelp: { embed: compEmbed, component: compRow },
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpall: { embed: allEmbed, component: alldecksrow },
        bnc: { embed: budgetnc, component: bnc },
        budgetnc: { embed: budgetnc, component: bnc },
        cburn: { embed: cyburn, component: cburn },
        cyburn: { embed: cyburn, component: cburn },
        cburn2: { embed: cyburn, component: cburn2 },
        cyburn2: { embed: cyburn, component: cburn2 },
        tc: { embed: toyotacontrolla, component: tc },
        toyotacontrolla: { embed: toyotacontrolla, component: tc },
        tc2: { embed: toyotacontrolla, component: tc2 },
        toyotacontrolla2: { embed: toyotacontrolla, component: tc2 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button action.",
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
